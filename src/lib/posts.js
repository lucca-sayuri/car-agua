import { supabase } from './supabaseClient'
import placeholder from '../assets/placeholder.png'

// Nome do bucket do Storage onde ficam as imagens dos posts (veja supabase-mural.sql)
export const POSTS_BUCKET = 'post-images'
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5 MB

// A coluna data_criacao é "timestamp" (provavelmente sem fuso). Quando o Supabase
// devolve a data sem "Z"/offset, o JS interpretaria como horário local e a hora
// ficaria errada. Como a gente grava em UTC (toISOString), aqui tratamos como UTC.
function parseTimestamp(value) {
    if (!value) return null

    const normalized = String(value).replace(' ', 'T')
    const timePart = normalized.split('T')[1] ?? ''
    const hasZone = /(Z|[+-]\d{2}(:?\d{2})?)$/.test(timePart)

    const date = new Date(hasZone ? normalized : `${normalized}Z`)
    return Number.isNaN(date.getTime()) ? null : date
}

// Converte uma linha da tabela `posts` para o formato que Post e PostPage usam
export function mapPost(row) {
    const date = parseTimestamp(row.data_criacao)

    return {
        id: String(row.id),
        pfp: row.foto_perfil || placeholder,
        name: row.nome_usuario,
        email: row.email_usuario,
        time: date
            ? date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
            : '',
        date: date
            ? date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })
            : '',
        text: row.texto_post,
        image: row.foto_post || null,
    }
}

export async function fetchPosts(search = '') {
    let query = supabase
        .from('posts')
        .select('*')
        .order('data_criacao', { ascending: false })
        .limit(100)

    // Remove caracteres que têm significado especial na sintaxe de filtros do PostgREST
    const term = search.trim().replace(/[,()"\\*%]/g, ' ').trim()

    if (term) {
        query = query.or(`texto_post.ilike.*${term}*,nome_usuario.ilike.*${term}*`)
    }

    const { data, error } = await query
    if (error) throw error

    return data.map(mapPost)
}

export async function fetchPostById(id) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', Number(id))
        .single()

    if (error) throw error

    return mapPost(data)
}

async function uploadImage(file, userId) {
    const extension = (file.name.split('.').pop() || 'png').toLowerCase()
    const path = `${userId}/${crypto.randomUUID()}.${extension}`

    const { error } = await supabase.storage
        .from(POSTS_BUCKET)
        .upload(path, file, { contentType: file.type, cacheControl: '3600' })

    if (error) throw error

    const { data } = supabase.storage.from(POSTS_BUCKET).getPublicUrl(path)
    return data.publicUrl
}

export async function createPost({ user, text, file }) {
    const cleanText = text.trim()

    if (!cleanText && !file) {
        throw new Error('Escreva algo ou escolha uma imagem para publicar.')
    }

    if (file && file.size > MAX_IMAGE_SIZE) {
        throw new Error('A imagem deve ter no máximo 5 MB.')
    }

    const imageUrl = file ? await uploadImage(file, user.id) : null

    const { data, error } = await supabase
        .from('posts')
        .insert({
            foto_perfil: user.user_metadata?.avatar_url ?? null,
            nome_usuario: user.user_metadata?.name || user.email,
            email_usuario: user.email,
            data_criacao: new Date().toISOString(),
            foto_post: imageUrl,
            texto_post: cleanText || null,
        })
        .select()
        .single()

    if (error) throw error

    return mapPost(data)
}

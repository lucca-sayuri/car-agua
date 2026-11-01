// Y: importa os hooks básicos do react porque não tem jeito
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// Y: supabase client que pelo menos não solta warning de chave indefinida
import { supabase } from '../../lib/supabaseClient'
import './PostPage.css'

export default function PostPage() {
  // Y: pega o postid da url, tipo /mural/5 vira postid = "5"
  const { postid } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Y: useEffect roda sempre que o postid muda, então se clicar em outro post busca de novo
  useEffect(() => {
    // Y: flag pra evitar setState depois que o componente some, clássico problema do react
    let ignore = false

    async function fetchPost() {
      // Y: se não tem id não faz nada
      if (!postid) return

      try {
        // Y: busca na tabela posts, filtra pelo id convertido pra número porque a url vem como string
        // Y: .single() traz um objeto direto, não array, então não precisa de map
        const { data, error: supabaseError } = await supabase
          .from('posts')
          .select('*')
          .eq('id', Number(postid))
          .single()

        // Y: se o componente já foi desmontado ignora tudo
        if (ignore) return

        // Y: se o supabase devolveu erro joga no estado de erro, senão salva o post
        if (supabaseError) {
          setError(supabaseError.message)
        } else {
          setPost(data)
        }
      } catch (err) {
        // Y: se explodiu de outra forma também joga no erro
        if (ignore) return
        setError(err.message)
      } finally {
        // Y: loading sempre vira false no final, mesmo se deu erro... pq paro de carrega ne
        if (!ignore) setLoading(false)
      }
    }

    fetchPost()

    // Y: cleanup, seta ignore = true quando sair da rota pra não atualizar state de componente morto
    return () => {
      ignore = true
    }
  }, [postid])

  if (loading) return <div className='loading'>Carregando post…</div>
  if (error) return <div className='error'>Erro ao carregar o post: {error}</div>
  if (!post) return <div className='not-found'>Post não encontrado.</div>

  // Y: enfim, renderiza o post com os dados que vieram do banco
  return (
    <>
      <div className='focus-post'>
        <div className='f-post-top'>
          <figure className='post-pfp'>
            <img src={post.pfp} alt={post.name} />
          </figure>
          <div className='f-post-user'>
            <p className='f-user-name'>{post.name}</p>
            <p className='f-user-email greyed-out'>{post.email}</p>
          </div>
          <div className='f-date-time greyed-out'>
            <p className='f-post-time'>{post.time}</p>
            <p className='f-post-date'>{post.date}</p>
          </div>
        </div>

        <div className='f-post-bottom'>
          <p className='f-post-text'>{post.text}</p>
          <figure className='f-post-image'>
            <img src={post.image} alt='imagem do post' />
          </figure>
        </div>
      </div>
    </>
  )
}

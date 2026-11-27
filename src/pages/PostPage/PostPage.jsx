// Y: ts GENUINELY hard
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLocation, useNavigate } from 'react-router'
import { FaArrowLeft } from "react-icons/fa6"
import { fetchPostById } from '../../lib/posts'
import './PostPage.css'

export default function PostPage() {
    // Y: navegação do Lucca
    const location = useLocation()
    let navigate = useNavigate()
    // se abrir o link direto (sem clicar no mural) não existe location.state, então usa ?.
    const props = location.state?.props

    const { postid } = useParams()

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Y: useEffect roda sempre que o postid muda, então se clicar em outro post busca de novo
    useEffect(() => {
        // Y: se não tem postid na url, usa os props e para por aqui
        if (!postid) {
            setLoading(false)
            return
        }

        // Y: flag pra evitar setState depois que o componente some, clássico problema do react
        let ignore = false

        async function loadPost() {
            try {
                // fetchPostById já converte as colunas (foto_perfil, nome_usuario...) pro formato do componente
                const data = await fetchPostById(postid)

                if (ignore) return
                setPost(data)
            } catch (err) {
                // Y: se explodiu de alguma forma joga no erro
                if (ignore) return
                setError(err.message)
            } finally {
                // Y: loading sempre vira false no final, mesmo se deu erro... pq paro de carregar ne
                if (!ignore) setLoading(false)
            }
        }

        loadPost()

        return () => {
            ignore = true
        }
    }, [postid])

    // Y: se ainda tá carregando mostra essa mensagemzinha
    if (loading) return <div className='loading'>Carregando post…</div>
    if (error) return <div className='error'>Erro ao carregar o post: {error}</div>

    // Y: define os dados: prioriza o post do supabase, senão usa os props antigos
    const data = post || props

    if (!data) return <div className='not-found'>Post não encontrado.</div>

    return (
        <>
            <div className='post-area'>
                <div className='post-title'>
                    <button onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </button>
                    <h1>POST</h1>
                </div>

                <div className='focus-post'>
                    <div className='f-post-top'>
                        <figure className='post-pfp'>
                            <img src={data.pfp} alt={"pfp"} />
                        </figure>
                        <div className='f-post-user'>
                            <p className='f-user-name'>{data.name}</p>
                            <p className='f-user-email greyed-out'>{data.email}</p>
                        </div>
                        <div className='f-date-time greyed-out'>
                            <p className='f-post-time'>{data.time}</p>
                            <p className='f-post-date'>{data.date}</p>
                        </div>
                    </div>

                    <div className='f-post-bottom'>
                        <p className='f-post-text'>{data.text}</p>
                        {data.image && (
                            <figure className='f-post-image'>
                                <img src={data.image} alt="image" />
                            </figure>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

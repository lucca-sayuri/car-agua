import { useEffect, useState } from 'react'
import WriteArea from '../../components/WriteArea/WriteArea'
import Post from '../../components/Post/Post'
import placeholder from '../../assets/placeholder.png'
import { FaSearch } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { fetchPosts } from '../../lib/posts'

import './Mural.css'

// mensagens de carregando/erro/vazio ocupam a grid inteira
const messageStyle = { gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--color-white)' }

export default function Mural() {
    const { user } = useAuth()

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    // searchInput = o que está digitado; search = o termo realmente aplicado na busca
    const [searchInput, setSearchInput] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        // flag pra não dar setState depois que o componente sumiu ou a busca mudou
        let ignore = false

        fetchPosts(search)
            .then((rows) => {
                if (ignore) return
                setPosts(rows)
                setError('')
            })
            .catch((err) => {
                if (!ignore) setError(err.message || 'Não foi possível carregar o mural.')
            })
            .finally(() => {
                if (!ignore) setLoading(false)
            })

        return () => {
            ignore = true
        }
    }, [search])

    function handleSearchChange(event) {
        const value = event.target.value
        setSearchInput(value)

        // apagar a busca (inclusive pelo X do input) volta a listar tudo
        if (value === '') setSearch('')
    }

    function handleSearchKeyDown(event) {
        if (event.key === 'Enter') setSearch(searchInput)
    }

    function handleNewPost(newPost) {
        setPosts((current) => [newPost, ...current])
    }

    return (
        <>
            <div className="mural-area">
                <div className='mural-search-box'>
                    <h1>MURAL CIDADÃO</h1>
                    <select name="select" className='mural-filter'>
                        <button>
                            <selectedcontent></selectedcontent>
                        </button>
                        <option value='filtrar'><div>Filtrar</div></option> {/* ESSA dabaesaba TAVA DANDO ERRO NO CONSOLE POR ALGUM MOTIVO. */}
                        <option value='relato'><div>Relato</div></option>
                        <option value='local'><div>Local</div></option>
                        <option value='protesto'><div>Protesto</div></option>
                        <option value='clima'><div>Clima</div></option>
                    </select>
                    <div className='mural-search-area'>
                        <input type="search" name="search" className="search-bar" placeholder="Procurar..." value={searchInput} onChange={handleSearchChange} onKeyDown={handleSearchKeyDown} />
                        <button className=" search-button" onClick={() => setSearch(searchInput)}><FaSearch /></button>
                    </div>
                </div>

                <WriteArea pfp={user?.user_metadata?.avatar_url || placeholder} onPostCreated={handleNewPost} />

                <div className='grid-area'>
                    <div className='mural-grid'>
                        {loading && <p style={messageStyle}>Carregando mural…</p>}
                        {!loading && error && <p style={messageStyle}>Erro ao carregar o mural: {error}</p>}
                        {!loading && !error && posts.length === 0 && (
                            <p style={messageStyle}>{search ? 'Nenhum post encontrado.' : 'Ainda não há posts no mural.'}</p>
                        )}

                        {posts.map((post) => (
                            <Post
                                key={post.id}
                                pfp={post.pfp}
                                name={post.name}
                                email={post.email}
                                time={post.time}
                                date={post.date}
                                text={post.text}
                                image={post.image}
                                id={post.id}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

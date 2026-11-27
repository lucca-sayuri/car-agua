import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import './WriteArea.css'
import { IoMdImage } from "react-icons/io";
import { MdOutlineGifBox } from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { useAuth } from '../../context/AuthContext'
import { createPost } from '../../lib/posts'


export default function WriteArea({ pfp, onPostCreated }) {
    const { user, isAuthenticated } = useAuth()
    const navigate = useNavigate()

    const [text, setText] = useState('')
    const [file, setFile] = useState(null)
    const [sending, setSending] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const fileInputRef = useRef(null)

    async function handleSubmit() {
        // quem não está logado não consegue postar, então manda pro login
        if (!isAuthenticated) {
            navigate('/login')
            return
        }

        setErrorMessage('')
        setSending(true)

        try {
            const newPost = await createPost({ user, text, file })

            setText('')
            setFile(null)
            if (fileInputRef.current) fileInputRef.current.value = ''

            onPostCreated?.(newPost)
        } catch (error) {
            setErrorMessage(error.message || 'Não foi possível publicar no mural.')
        } finally {
            setSending(false)
        }
    }

    return (
        <>
            <div className='write-box'>
                <div className='top-area'>
                    <figure className='write-pfp'>
                        <img src={pfp} alt="Profile Picture"/>
                    </figure>

                    <textarea name="mural-text" className='mural-text' placeholder='Comece a escrever no mural...' maxLength="300" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                </div>
                <div className='bottom-area'>
                    <div className='icons-area'>
                        <input type="file" name="img-input" id='img-input' accept='.png, .jpg, .jpeg, .webp' ref={fileInputRef} onChange={(event) => setFile(event.target.files?.[0] ?? null)}/>
                        <label htmlFor="img-input" className='img-button' title={file ? file.name : undefined}><IoMdImage/></label>
                        <MdOutlineGifBox/>
                        <HiOutlineEmojiHappy/>
                    </div>

                    <button type="submit" className='post-button' onClick={handleSubmit} disabled={sending}>
                        {sending ? 'ENVIANDO...' : 'ENVIAR'}
                    </button>
                </div>

                {errorMessage && <p role="alert" style={{ color: '#ffb3b3', fontSize: '14px', margin: '8px 0 0' }}>{errorMessage}</p>}
            </div>
        </>
    )
}

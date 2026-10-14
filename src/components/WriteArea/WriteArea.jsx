import './WriteArea.css'

export default function WriteArea({pfp}) {
    return (
        <>
            <div className='write-box'>
                <div className='top-area'>
                    <figure className='write-pfp'>
                        <img src={pfp} alt="Profile Picture"/>
                    </figure>

                    <input type="text" name="write-input" className='write-input' placeholder='Comece a escrever no mural...'/>
                </div>
                <div className='bottom-area'>
                    <div className='icons-area'>
                        a
                        b
                        c
                    </div>

                    <button type="submit" className='post-button'>ENVIAR</button>
                </div>
            </div>
        </>
    )
}
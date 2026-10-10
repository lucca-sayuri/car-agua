import './Mural.css'

export default function Mural() {
    return (
        <>
            <div className="mural-area">
                <div className='mural-search-box'>
                    <h1>MURAL CIDADÃO</h1>
                    <select name="select" className='mural-filter'>
                            <option value="">Filtrar</option>
                            <hr />
                            <option value="local">Local</option>
                            <option value="clima">Clima</option>
                            <option value="protesto">Protesto</option>
                            <option value="relato">Relato</option>
                        </select>
                    <div className='mural-search-area'>
                        <input type="search" name="search" className="search-bar" placeholder="Procurar..." />
                        <button className=" search-button"></button>
                    </div>
                </div>
            </div>
        </>
    )
}
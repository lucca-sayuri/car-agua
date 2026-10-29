import WriteArea from '../../components/WriteArea/WriteArea'
import Post from '../../components/Post/Post'
import placeholder from '../../assets/placeholder.png'
import { FaSearch } from 'react-icons/fa'

import './Mural.css'

export default function Mural() {
    return (
        <>
            <div className="mural-area">
                <div className='mural-search-box'>
                    <h1>MURAL CIDADÃO</h1>
                    <select name="select" className='mural-filter'>
                        <button>
                            <selectedcontent></selectedcontent>
                        </button>
                        <option><div>Filtrar</div></option>
                        <option><div>Relato</div></option>
                        <option><div>Local</div></option>
                        <option><div>Protesto</div></option>
                        <option><div>Clima</div></option>
                    </select>
                    <div className='mural-search-area'>
                        <input type="search" name="search" className="search-bar" placeholder="Procurar..." />
                        <button className=" search-button"><FaSearch /></button>
                    </div>
                </div>

                <WriteArea pfp={placeholder} />

                <div className='grid-area'>
                    <div className='mural-grid'>
                        <Post
                        pfp={placeholder}
                        name={"john123"}
                        email={"john123@gmail.com"}
                        time={"15:34"}
                        date={"19/08/26"}
                        text={"Parece que os cara tão trabaiando"}
                        />
                    </div>
                </div>

            </div>
        </>
    )
}
import './News.css'
import NewsCard from '../../components/NewsCard/NewsCards'
import placeholder from "../../assets/placeholder.png"
import { FaSearch } from "react-icons/fa";


export default function News() {
    return (
        <>
            <div className='news-area'>

                <div className='search-box'>
                    <h1>NOTÍCIAS RECENTES</h1>
                    <div className='search-area'>
                        <input type="search" name="search" className="search-bar" placeholder="Procurar..." />
                        <button className="search-button"><FaSearch/></button>
                    </div>
                </div>

                <section className='news-grid'>
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum id doloremque magnam."}
                    />
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum id doloremque magnam."}
                    />
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum id doloremque magnam."}
                    />
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus illum id doloremque magnam."}
                    />
                </section>

            </div>
        </>
    )
}
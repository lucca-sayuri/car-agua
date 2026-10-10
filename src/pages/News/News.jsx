import './News.css'
import NewsCard from '../../components/NewsCard/NewsCards'
import placeholder from "../../assets/placeholder.png"

export default function News() {
    return (
        <>
            <div className='news-area'>

                <div className='search-box'>
                    <h1>NOTÍCIAS RECENTES</h1>
                    <div className='search-area'>
                        <input type="search" name="search" className="search-bar" placeholder="Procurar..." />
                        <button className="search-button"></button>
                    </div>
                </div>

                <section className='news-grid'>
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor tornado tornado tempestade morte triste"}
                    />
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor tornado tornado tempestade morte triste"}
                    />
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor tornado tornado tempestade morte triste"}
                    />
                    <NewsCard
                    image={placeholder}
                    title={"coisa ruim"}
                    source={"localhost:5173/noticias"} 
                    desc={"Lorem ipsum dolor tornado tornado tempestade morte triste"}
                    />
                </section>

            </div>
        </>
    )
}
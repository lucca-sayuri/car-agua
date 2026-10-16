import { Link } from "react-router"
import './NewsCard.css'

export default function NewsCard({image, title, source, desc}) {
    return (
        <>
            <div className="card-box">
                <figure className="card-cover">
                    <img src={image} alt={title} />
                </figure>

                <div className="text-area">
                    <h1>
                        {title}
                    </h1>

                    <Link to={source}>
                        {source}
                    </Link> 

                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </>
    )
}
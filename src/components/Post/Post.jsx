import './Post.css'
import { Link } from 'react-router'

export default function Post({ pfp, name, email, time, date, text, image, id }) {
    return (
        <>
            <Link className='post-link' to={{
                pathname: `/mural/${id}`}}>
                <div className="mural-post">
                    <div className='post-top'>
                        <figure className='post-pfp'>
                            <img src={pfp} alt={name} />
                        </figure>
                        <div className='post-user'>
                            <p className='user-name'>{name}</p>
                            <p className='user-email greyed-out'>{email}</p>
                        </div>

                        <div className='date-time greyed-out'>
                            <p className='post-time'>{time}</p>
                            <p className='post-date'>{date}</p>
                        </div>
                    </div>

                    <div className='post-bottom'>
                        <p className='post-text'>{text}</p>
                        <figure className='post-image'>
                            <img src={image} alt="image" />
                        </figure>
                    </div>
                </div>
            </Link>
        </>
    )
}
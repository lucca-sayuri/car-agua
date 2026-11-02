import './Post.css'
import { Link } from 'react-router'

export default function Post(props) {
    return (
        <>
            <Link className='post-link' to={{pathname: `/mural/${props.id}`}} state={{ props: props }}>
                <div className="mural-post">
                    <div className='post-top'>
                        <figure className='post-pfp'>
                            <img src={props.pfp} alt={props.name} />
                        </figure>
                        <div className='post-user'>
                            <p className='user-name'>{props.name}</p>
                            <p className='user-email greyed-out'>{props.email}</p>
                        </div>

                        <div className='date-time greyed-out'>
                            <p className='post-time'>{props.time}</p>
                            <p className='post-date'>{props.date}</p>
                        </div>
                    </div>

                    <div className='post-bottom'>
                        <p className='post-text'>{props.text}</p>
                        <figure className='post-image'>
                            <img src={props.image} alt="image" />
                        </figure>
                    </div>
                </div>
            </Link>
        </>
    )
}
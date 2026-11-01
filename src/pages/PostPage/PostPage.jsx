import './PostPage.css'
import { useLocation, useNavigate } from 'react-router'
import { FaArrowLeft } from "react-icons/fa6";


export default function PostPage() {
    const location = useLocation()
    let navigate = useNavigate()
    const props = location.state.props

    return (
        <>
            <div className='post-area'>
                <div className='post-title'>
                    <button onClick={() => navigate(-1)}>
                        <FaArrowLeft />
                    </button>
                    <h1>POST</h1>
                </div>

                <div className='focus-post'>
                    <div className='f-post-top'>
                        <figure className='post-pfp'>
                            <img src={props.pfp} alt={"pfp"} />
                        </figure>
                        <div className='f-post-user'>
                            <p className='f-user-name'>{props.name}</p>
                            <p className='f-user-email greyed-out'>{props.email}</p>
                        </div>
                        <div className='f-date-time greyed-out'>
                            <p className='f-post-time'>{props.time}</p>
                            <p className='f-post-date'>{props.date}</p>
                        </div>
                    </div>

                    <div className='f-post-bottom'>
                        <p className='f-post-text'>{props.text}</p>
                        <figure className='f-post-image'>
                            <img src={props.image} alt="image" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}
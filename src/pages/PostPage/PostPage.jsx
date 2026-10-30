import './PostPage.css'

export default function PostPage({ pfp, name, email, time, date, text, image}) {
    return (
        <>
            <div className='focus-post'>
                <div className='f-post-top'>
                    <figure className='post-pfp'>
                        <img src={pfp} alt={name} />
                    </figure>
                    <div className='f-post-user'>
                        <p className='f-user-name'>{name}</p>
                        <p className='f-user-email greyed-out'>{email}</p>
                    </div>
                    <div className='f-date-time greyed-out'>
                        <p className='f-post-time'>{time}</p>
                        <p className='f-post-date'>{date}</p>
                    </div>
                </div>

                <div className='f-post-bottom'>
                        <p className='f-post-text'>{text}</p>
                        <figure className='f-post-image'>
                            <img src={image} alt="image" />
                        </figure>
                    </div>
            </div>
        </>
    )
}
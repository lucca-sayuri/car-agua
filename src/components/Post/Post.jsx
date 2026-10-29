import './Post.css'

export default function Post({ pfp, name, email, time, date, text }) {
    return (
        <>
            <div className="mural-post">
                <div className='post-top'>
                    <figure className='post-pfp'>
                            <img src={pfp} alt="Profile Picture" />
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
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}
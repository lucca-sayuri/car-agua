import './WriteArea.css'
import { IoMdImage } from "react-icons/io";
import { MdOutlineGifBox } from "react-icons/md";
import { HiOutlineEmojiHappy } from "react-icons/hi";


export default function WriteArea({pfp}) {
    return (
        <>
            <div className='write-box'>
                <div className='top-area'>
                    <figure className='write-pfp'>
                        <img src={pfp} alt="Profile Picture"/>
                    </figure>

                    <textarea name="mural-text" className='mural-text' placeholder='Comece a escrever no mural...' maxLength="300"></textarea>
                </div>
                <div className='bottom-area'>
                    <div className='icons-area'>
                        <input type="file" name="img-input" id='img-input' accept='.png, .jpg, .jpeg, .webp' multiple/>
                        <label htmlFor="img-input" className='img-button'><IoMdImage/></label>
                        <MdOutlineGifBox/>
                        <HiOutlineEmojiHappy/>
                    </div>

                    <button type="submit" className='post-button'>ENVIAR</button>
                </div>
            </div>
        </>
    )
}
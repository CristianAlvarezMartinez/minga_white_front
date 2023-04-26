import logo from '../assets/images/Logo.png'
import imgFooter from '../assets/images/imgFooter.png'
import { AiFillFacebook, AiOutlineTwitter,AiFillYoutube} from "react-icons/ai";
import {BsVimeo} from 'react-icons/bs'
export default function Footer() {
  return (
    <footer className='h-[70vh] bg-black flex flex-col justify-center'>

          <img src={imgFooter} alt="footerImg" className='w-[100vw] h-[60%] hidden | lg:block borderFooter'/>

            <div className='w-[100%] h-[80%]	flex flex-col items-center justify-around border-t-2 border-white/25 | lg:flex-row lg:border-b-2 lg:border-t-0 '>

            <div className='text-white flex flex-row gap-8 2xl:text-2xl'>
              <h3>Home</h3>
              <h3>Mangas</h3>
            </div>

            <img src={logo} alt="logoFooter" className='h-12 2xl:h-20' />

            <div>

              <div className='text-white flex flex-row justify-between mb-4 text-2xl 2xl:text-4xl 2xl:gap-4'>
                <a href="https://www.facebook.com" target='_blank'><AiFillFacebook /></a>
                <a href="https://twitter.com/home" target='_blank'><AiOutlineTwitter /></a>
                <a href="https://twitter.com/home" target='_blank'><BsVimeo /></a>
                <a href="https://www.youtube.com" target='_blank'><AiFillYoutube /></a>
              </div>
              <button className='bg-slate-200 py-1.5 px-10 rounded-lg | 2xl:w-[100%] 2xl:py-3 2xl:px-16 2xl:text-2xl'>Donate ❤</button>
 
            </div>

            </div>

          </footer>
  )
}

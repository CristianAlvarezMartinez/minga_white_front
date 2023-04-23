import menu from './assets/images/Menu.png'
import logo from './assets/images/logo.png'
import images from './assets/images/home_img.png'
import imgFooter from './assets/images/imgFooter.png'
import { AiFillFacebook, AiOutlineTwitter,AiFillYoutube} from "react-icons/ai";
import {BsVimeo} from 'react-icons/bs'


import './index.css'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black grid overflow-auto '>
        <nav className='flex justify-between align-center px-4 mt-4 h-14 | md:h-16 md:px-8 md:mt-8'>
            <img src={menu} alt="menu" className='h-12 | md:h-14'/>
            <img src={logo} alt="Logo imagen" className='w-24 | md:w-28' />
        </nav>
        <h1 className='mobile:hidden | lg:block text-white font-bold text-center text-5xl my-12'>Best manga reader</h1>
          <div className=' grid grid-cols-4'>
            <div className='min-[320px]:hidden lg:block col-span-2 pt-6 h-[75vh]'>
              <img src={images} alt="MangasImg" className='w-[80%] h-[100%] m-auto' />
            </div>
            <div className=" relative w-[100vw] h-[80vh] bg-[url('./src/assets/images/imgs_group.png')] bg-no-repeat bg-cover bg-center flex flex-col pt-20 px-7 aling-center gap-5 self-end | md:bg-contain md:gap-12 | lg:bg-none lg:col-span-2 lg:w-[100%] lg:p-0 lg:h-[55vh] lg:self-center lg:gap-9 lg:pt-10">

                <h1 className='text-white text-5xl font-medium text-center leading-normal | md:text-6xl | lg:text-4xl  '>Your favorite manga reader <span className='md:hidden'>😏</span></h1>

                <p className='text-slate-300 text-center leading-5 | md:text-2xl md:leading-tight md:w-[75%] md:self-center | lg:text-lg'>Is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the lastest releases, this app is perfect for those who want to read manga anytime, anywhere.
                </p>
                <input type="text" placeholder='Search mangas' className='text-center p-2.5 rounded backdrop-blur-md bg-white/20 mt-2 focus:outline-none text-white | md:w-[50%] md:self-center'/>
            </div>
          </div>
            
          <footer className='h-[60vh] bg-black flex flex-col'>

          <img src={imgFooter} alt="footerImg" className='w-[100vw] h-[50%]'/>

            <div className='w-[70%] m-auto flex flex-row justify-between items-center  pb-3 border-b-2 border-white/25'>

            <div className='text-white flex flex-row gap-8'>
              <h3>Home</h3>
              <h3>Mangas</h3>
            </div>

            <img src={logo} alt="logoFooter" className='h-10' />

            <div>

              <div className='text-white flex flex-row justify-between mb-4 text-2xl'>
                <a href="https://www.facebook.com" target='_blank'><AiFillFacebook /></a>
                <a href="https://twitter.com/home" target='_blank'><AiOutlineTwitter /></a>
                <a href="https://twitter.com/home" target='_blank'><BsVimeo /></a>
                <a href="https://www.youtube.com" target='_blank'><AiFillYoutube /></a>
              </div>
              <button className='bg-slate-200 py-1.5 px-10 rounded-sm'>Donate 💜</button>
            </div>

            </div>

          </footer>
      </div>
    </>
  )
}
export default App
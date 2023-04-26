import logo from '../assets/images/Logo.png'
import { useState } from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
  let [hide, setHide] = useState(true)
  const show = () => {
  setHide(!hide)
}
  return (
    <nav className='flex justify-between align-center px-4 mt-4 h-14 | lg:border-b-2 lg:border-white/25 lg:h-24 lg:justify-end | md:h-16 md:px-8 md:mt-8 | 2xl:h-28 2xl:px-16 2xl:'>
        <div className={`fixed bg-gradient-to-r from-[#434343] to-[#000] top-0 right-0 bottom-0 left-0 z-20 py-8 px-5 ${hide ? 'hidden' : ''} `}>
          <div className='flex justify-between'>
          <BiUserCircle className='text-white text-5xl'/>
          <VscChromeClose onClick={show} className="text-white text-2xl my-auto"/>
          </div>
          <div className='flex flex-col gap-5 text-center text-white mt-8 font-bold'>
          <a href="#" className='py-3 active:bg-white active:text-black rounded-lg'>Home</a>
          <a href="#" className='py-3 active:bg-white active:text-black rounded-lg'>My mangas</a>
          <a href="#" className='py-3 active:bg-white active:text-black rounded-lg'>Mangas</a>
          <a href="#" className='py-3 active:bg-white active:text-black rounded-lg'>Favourites</a>
          <a href="#" className='py-3 active:bg-white active:text-black rounded-lg'>Logout</a>
          </div>
        </div>    
        <AiOutlineMenu className='text-white text-3xl | md:block md:text-3xl | lg:hidden | 2xl:hidden' onClick={show}/>
        <img src={logo} alt="Logo imagen" className='w-24 my-auto | md:w-28 | lg:mb-7 | 2xl:w-40 2xl:h-20' />
    </nav>
  )
}

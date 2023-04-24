import menu from '../assets/images/Menu.png'
import logo from '../assets/images/Logo.png'
export default function Navbar() {
  return (
    <nav className='flex justify-between align-center px-4 mt-4 h-14 | lg:border-b-2 lg:border-white/25 lg:h-24 | md:h-16 md:px-8 md:mt-8 | 2xl:h-28 2xl:px-16 2xl:'>
        <img src={menu} alt="menu" className='h-12 | md:h-14 | 2xl:h-20'/>
        <img src={logo} alt="Logo imagen" className='w-24 | md:w-28 | lg:mb-7 | 2xl:w-40 2xl:h-20' />
  </nav>
  )
}

import menu from './assets/images/Menu.png'
import logo from './assets/images/logo.png'

import './index.css'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black grid overflow-auto'>
        <nav className='flex justify-between align-center px-4 mt-4 h-14 | md:h-16 md:px-8 md:mt-8'>
            <img src={menu} alt="menu" className='h-12 | md:h-14'/>
            <img src={logo} alt="Logo imagen" className='w-24 | md:w-28' />
        </nav>
          <div className=" relative  w-[100vw] h-[80vh] bg-[url('./src/assets/images/imgs_group.png')] bg-no-repeat bg-cover bg-center flex flex-col pt-20 px-7 py- aling-center gap-5 self-end | md:bg-contain md:gap-12">
              <h1 className='text-white text-5xl font-medium text-center leading-normal | md:text-6xl '>Your favorite manga reader <span className='md:hidden'>😏</span></h1>
              <p className='text-slate-300 text-center leading-5 | md:text-2xl md:leading-tight md:w-[75%] md:self-center'>Is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the lastest releases, this app is perfect for those who want to read manga anytime, anywhere.
              </p>
              <input type="text" placeholder='Search mangas' className='text-center p-2.5 rounded backdrop-blur-md bg-white/20 mt-2 focus:outline-none text-white | md:w-[50%] md:self-center'/>
          </div>
      </div>
    </>
  )
}

export default App

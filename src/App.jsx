import menu from './assets/images/Menu.png'
import logo from './assets/images/logo.png'
import img1 from './assets/images/naruto.png'
import img2 from './assets/images/snk.png'
import img3 from './assets/images/db1.png'
import img4 from './assets/images/dg2.png'
import './index.css'

function App() {
  return (
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black'>
        <nav className='flex justify-between align-center px-14 mt-8'>
            <img src={menu} alt="" className='h-14'/>
            <img src={logo} alt="" />
        </nav>
        <div className='relative top-9 w-8/10 h-1 bg-white linea'></div>
        <div className='absolute w-[472px] h-[335px] right-[300px] top-[400px] luz'></div>
        <h1 className='relative top-[140px] h-[61px] text-center text-white text-7xl title'>Best manga reader</h1>
        <div className='relative flex flex-col w-[500px] h-[326px] right-[-1300px] top-[350px] gap-10'>
          <p className='text-white text-6xl font-bold'>Your favorite manga reader 😏</p>
          <p className='text-white '>Is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
          <input type="text" className='w-100 h-[57px] rounded input text-white text-center' placeholder='Search mangas'/>
        </div>
        <div className='relative flex w-[680px] h-[845px] left-60 top-[-120px] '>
          <img src={img1} alt="" className='absolute images' />
          <img src={img2} alt="" className='absolute right-10 top-20'/>
          <img src={img3} alt="" className='absolute top-[410px]'/>
          <img src={img4} alt="" className='absolute right-10 top-[490px] images'/>
        </div>
      </div>
    </>
  )
}

export default App

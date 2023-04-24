
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import apiUrl from '../api'

import './index.css'

function App() {
  console.log(apiUrl)
  return (
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black grid overflow-auto '>
        <div className='mobile:hidden 2xl:block absolute violetDeg h-[115%] w-[50%] -z-10 right-0' ></div>
        <Hero />
       <Navbar /> 
       <Footer /> 
          
      </div>
    </>
  )
}
export default App
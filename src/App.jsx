import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import apiUrl from '../api'

import './index.css'

function App() {
  console.log(apiUrl)
  return (
    <>
      <div className='fixed top-0 left-0 bottom-0 right-0 bg-black grid overflow-auto '>
        <Navbar />
        <Hero />
        <Footer /> 
      </div>
    </>
  )
}
export default App
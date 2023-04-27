import { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'

export default function Carrousel() {
    useEffect(
        ()=>{ axios(apiUrl+'imgscrl')
                .then(res=> setImages(res.data.imgs))
                .catch(err=> console.log(err)) }, []
    )
    let [images, setImages] = useState([])
    let [counter, setCounter] = useState(0)
    let add = () => {
        setCounter(counter+1)
        console.log(counter)
        counter === images.length - 1 ? setCounter(0) : null
    }
    let rest = () => {
        setCounter(counter-1)
        counter === 0 ? setCounter(images.length - 1) : null
    }

  return (
    <div className='relative min-[320px]:hidden lg:block col-span-2 pt-6 h-[75vh] | 2xl:h-[90vh] select-none'>
        <div className='absolute 2xl:w-[107%] flex justify-between top-[50%] 2xl:pl-[14rem] lg:pl-4 lg:w-[97%]'>
            <BsFillArrowLeftCircleFill className='text-white/50 2xl:text-[40px] lg:text-[22px] cursor-pointer'  onClick={rest}/>
            <BsFillArrowRightCircleFill className='text-white/50 2xl:text-[40px] lg:text-[22px] cursor-pointer' onClick={add}/>
        </div>
        <img src={images[counter]?.img} alt="MangasImg" className='w-[80%] h-[100%] | lg:m-auto | xl:ml-auto | 2xl:h-[100%] 2xl:w-[75%] 2xl:mr-1' />
    </div>
  )
}

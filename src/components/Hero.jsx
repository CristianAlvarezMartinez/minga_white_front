import images from '../assets/images/home_img.png'
export default function Hero() {
  return (
   <>
    <div className='mobile:hidden 2xl:block absolute violetDeg h-[115%] w-[50%] -z-10 right-0' ></div>
    <h1 className='mobile:hidden | lg:block text-white font-bold text-center text-5xl my-12 | lg:my-16 | xl:text-6xl | 2xl:text-8xl 2xl:my-20'>Best manga reader</h1>
    <div className=' grid grid-cols-4'>
        <div className='min-[320px]:hidden lg:block col-span-2 pt-6 h-[75vh] | 2xl:h-[90vh]'>
            <img src={images} alt="MangasImg" className='w-[80%] h-[100%] | lg:m-auto | xl:ml-auto | 2xl:h-[100%] 2xl:w-[75%] 2xl:mr-1' />
        </div>
        <div className=" relative w-[100vw] h-[80vh] bg-[url('./src/assets/images/imgs_group.png')] bg-no-repeat bg-cover bg-center flex flex-col pt-20 px-7 aling-center gap-5 self-end | md:bg-contain md:gap-12 | lg:bg-none lg:col-span-2 lg:w-[100%] lg:p-0 lg:h-[55vh] lg:self-center lg:gap-9 | xl:ml-24 xl:w-auto | 2xl:ml-64 2xl:self-start 2xl:mt-32">
            <h1 className='text-white text-5xl font-medium text-center leading-normal | md:text-6xl | lg:text-4xl | xl:text-5xl xl:text-start xl:leading-tight | 2xl:text-[65px] 2xl:tracking-wider'>Your favorite <br className='hidden xl:block'/> manga reader <span className='  mobile:hidden md:hidden | xl:inline-block xl:text-4xl | 2xl:text-6xl'>😏</span>
            </h1>
            <p className='text-slate-300 text-center leading-5 | md:text-2xl md:leading-tight md:w-[75%] md:self-center | lg:text-lg xl:text-start xl:self-start 2xl:text-[22px] 2xl:text-justify 2xl:w-[55%]'>Is an exceptional app for all manga lovers. With a wide range of titles available, from classics to the lastest releases, this app is perfect for those who want to read manga anytime, anywhere.
            </p>
            <input type="text" placeholder='Search mangas' className='text-center p-2.5 rounded-md backdrop-blur-md bg-white/20 mt-2 focus:outline-none text-white | md:w-[50%] md:self-center | xl:self-start xl:w-[80%] | 2xl:w-[65%] 2xl:h-16 2xl:text-2xl'/>
        </div>
    </div>
   </> 
  )
}

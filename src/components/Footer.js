"use client"
import React,{useState,useEffect} from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'



function Footer() {

  const [subscribeEmail,setSubscribeEmail]=useState('');
  const [loading,setLoading]=useState(false)

  const subscribeHandler=async()=>{
    if(!/\S+@\S+\.\S+/.test(subscribeEmail)){
      toast.warn('Please provide a valid email address!!!')
    }else{
      setLoading(true)
      const payload={
          email:subscribeEmail,
      }

      const {data}=await axios.post('https://porous-live.onrender.com/subscribe_email',payload)
      if(data.message==='Email sent successfully!'){
          setLoading(false)
         toast.success('Email sent successfully!!!');
         setSubscribeEmail('')
      }else{
          setLoading(false)
          toast.error(`${data.message}`)
      }
    }
  }

  const handleEmail=(event)=>{
    if(event.key==='Enter'){
      subscribeHandler()
    }
  }

  return (
    <div className='bg-[#1A1829] mt-[4rem] w-[100%] px-[1.5rem] lg:px-[6rem] xl:px-[10rem] lg:mt-[6rem] xl:mt-[10rem]'>
      <div className='md:flex justify-start items-center py-[1.5rem] md:py-[3.5rem] md:space-x-[4rem] lg:space-x-[8rem]'>
        <p className='xl:text-[2.5rem] hidden md:block text-[1.8rem] lg:text-[2rem] text-white font-Poppins700 leading-[3rem] tracking-widest'>Subscribe to our <br /> newsletter</p>
        <p className=' mb-[1rem] md:hidden  text-white font-Poppins700 leading-[3rem] text-[1.3rem] tracking-widest'>Subscribe to our  newsletter</p>
        <div className='flex-1 border-b border-white flex justify-between items-center pb-[1rem]'>
          <input value={subscribeEmail} onKeyUp={(e)=>handleEmail(e)} onChange={(e)=>setSubscribeEmail(e.target.value)} type='email' placeholder='Enter your email' className='bg-transparent text-white font-Poppins400 placeholder:text-white outline-none ' />
          {
            loading? <div className='w-6 h-6 rounded-full animate-spin
            border-4 border-solid border-gray-500 border-t-transparent'>

            </div>: <BsArrowRight onClick={()=>subscribeHandler()} className='text-white' />
          }
        </div>
      </div>
      <div className='md:border-t md:border-b border-white md:flex justify-between items-center md:py-[1.5rem]'>
        <div className='flex justify-between md:justify-start items-center md:space-x-6 lg:space-x-8 xl:space-x-[3.5rem]'>
          <Link href="/">
            <Image src={'/logo.svg'} width={70} height={50} priority={true} alt="" />
          </Link>
          <div className='flex md:hidden justify-start items-center space-x-8'>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='p-[0.5rem] text-[1.2rem] rounded-full bg-white text-[#1A1829]'>
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/irrigate_porous/" target="_blank" rel="noopener noreferrer" className='p-[0.5rem] text-[1.2rem] rounded-full bg-white text-[#1A1829]'>
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/company/irrigate-porous-pvt-ltd/" target="_blank" rel="noopener noreferrer" className='p-[0.5rem] text-[1.2rem] rounded-full bg-white text-[#1A1829]'>
              <FaLinkedinIn />
            </a>
          </div>
          <Link href="/about" className='text-white md:block hidden font-Poppins400 tracking-wider border-b border-white'>About Us</Link>
          <Link href="/industry" className='text-white md:block hidden font-Poppins400 tracking-wider border-b border-white'>Industry</Link>
          <Link href="/products" className='text-white md:block hidden font-Poppins400 tracking-wider border-b border-white'>Projects</Link>
          <Link href="/blogs" className='text-white md:block hidden font-Poppins400 tracking-wider border-b border-white'>Blogs</Link>
          <Link href="/inquiry" className='text-white md:block hidden font-Poppins400 tracking-wider border-b border-white'>Inquiry</Link>
        </div>
        <div className='md:flex hidden justify-start items-center space-x-8'>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className='p-[0.5rem] text-[1.2rem] rounded-full bg-white text-[#1A1829]'>
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/irrigate_porous/" target="_blank" rel="noopener noreferrer" className='p-[0.5rem] text-[1.2rem] rounded-full bg-white text-[#1A1829]'>
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/company/irrigate-porous-pvt-ltd/" target="_blank" rel="noopener noreferrer" className='p-[0.5rem] text-[1.2rem] rounded-full bg-white text-[#1A1829]'>
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className='text-white font-Poppins400 text-[0.6rem] md:text-[0.8rem] pb-[3rem] pt-[1.5rem] flex justify-between items-center'>
        <p>© irrigateporous | All right reserved</p>
        <div onClick={()=>window.location.href = "https://www.termsfeed.com/live/8385967b-9679-477d-8996-e2880cc90ae0"} className='flex justify-between space-x-2 md:space-x-6 items-center cursor-pointer'>
          <p>Terms of Use</p>
          <p className='h-3 w-0.5 bg-white'></p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <ToastContainer
                newestOnTop={false}
                rtl={false}
                transition={Flip}
                position="top-right"
                autoClose={2000}
                theme="dark"
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={false}
                draggable={true}
                progress={undefined}
                className="text-center"
            />
    </div>
  )
}

export default Footer
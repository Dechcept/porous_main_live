"use client"
import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import { useRef, useState,useEffect } from 'react';
import Link from 'next/link'
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Loader from '@/components/Loader'
import { useSearchParams } from 'next/navigation'

SwiperCore.use([Pagination, Navigation]);

function page() {

    const searchParams = useSearchParams()
 
    const product = searchParams.get('product')
    const productId = searchParams.get('productId')

    console.log(product)
    console.log(productId)

    const [inquiryPayload, setInquiryPayload] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        query: ''
    })

    const [loading,setLoading]=useState(false)

    const submitInquiryHandler = async () => {
        if (!inquiryPayload.name && !inquiryPayload.email && !inquiryPayload.mobile && !inquiryPayload.subject && !inquiryPayload.query) {
            toast.warn('Make Sure To Provide All Fields!!!')
        }else  if (!inquiryPayload.name) {
            toast.warn('Please provide a valid Name !!!')
          }else if (!inquiryPayload.email) {
            toast.warn('Please provide a valid Email address !!!')
          } else if (!/\S+@\S+\.\S+/.test(inquiryPayload.email)) {
            toast.warn('Please provide a valid Email address !!!')
          }else if (!inquiryPayload.mobile) {
            toast.warn('Please provide a valid Phone Number !!!')
          }else if(!/^(\+\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(inquiryPayload.mobile)){
            toast.warn('Please provide a valid Phone Number !!!')
          }else if (!inquiryPayload.subject) {
            toast.warn('Please provide a valid Subject !!!')
          } else if (!inquiryPayload.query) {
            toast.warn('Please provide a Inquery !!!')
          }else{
            setLoading(true)
           
            let payload={
                
            }

            if(product && productId){
                let locationNew=window.location.origin
payload={
    name:inquiryPayload.name,
                email:inquiryPayload.email,
                subject:inquiryPayload.subject,
                mobile_number:inquiryPayload.mobile,
                message:inquiryPayload.query,
                product:product,
                location:`${locationNew}/products/${productId}`
}
            }else{
                payload={
                    name:inquiryPayload.name,
                                email:inquiryPayload.email,
                                subject:inquiryPayload.subject,
                                mobile_number:inquiryPayload.mobile,
                                message:inquiryPayload.query,
                              
                }
            }

            const {data}=await axios.post('https://porous-live.onrender.com/email_service',payload)
            if(data.message==='Email sent successfully!'){
                setLoading(false)
               toast.success('Email sent successfully!!!');
               setInquiryPayload({
                name: '',
                email: '',
                mobile: '',
                subject: '',
                query: ''
               })
            }else{
                setLoading(false)
                toast.error(`${data.message}`)
            }
          }
          
    }

    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',

        });
    }, [])

    return (
        <div>

            {/* HEAD GOES HERE */}
            <div className='w-[100%] relative'>
                <p className='relative w-[100%] h-[350px] md:h-[350px] lg:h-[380px] xl:h-[360px]'>
                    <Image src={'/agricultureHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                </p>
                <p className='absolute w-[200px] h-[160px] md:w-[264px] md:h-[211px] bottom-[25%] md:bottom-[20%] lg:left-[6%] xl:left-[10%] transform rotate-[90deg]  '>
                    <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'fill' }} priority={true} alt="" />
                </p>
                <p className=' font-Poppins700 md:text-[4rem] lg:text-[4rem] text-[2rem] bottom-[40%] left-[25%]  z-20 text-white  tracking-widest  absolute lg:bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[12%]'>Inquiry</p>


            </div>

            {/* SECOND SECTION */}
            <div className='xl:px-[10rem] md:mt-[4rem] lg:mt-[3rem] xl:mt-[5rem] lg:px-[6rem] md:px-[3rem] px-[1rem] mt-[4rem]'>
                <div className='md:flex lg:justify-between items-start 2xl:space-x-[4rem] md:space-x-4 lg:space-x-6 '>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='xl:text-[3rem] md:text-[1.6rem] text-[2rem] text-center md:text-start  lg:text-[2rem] font-Poppins700 tracking-wider md:w-1/2'>Let's connect on call</p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className=' font-Poppins400 text-[#656565] text-center md:text-start mt-4 md:mt-0 md:text-[0.7rem] md:w-1/2 lg:text-[0.7rem] xl:text-[1rem] '>Ready to take the next step in enhancing your irrigation practices with porous pipes? Fill out the form below to request a call back from our irrigation experts. </p>
                </div>

                {/* FORM */}
                {
                    loading?<div className='md:flex-1 mt-[3rem] md:mt-0 h-[20rem]  flex justify-center items-center'>
                    <Loader/>
                 </div>
: <div className='xl:mt-[6rem] lg:mt-[4rem] md:mt-[3rem] mt-[3rem]'>
<div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='md:flex justify-between items-center md:space-x-6'>
    <input type='text' placeholder='Name' required className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none' value={inquiryPayload.name} onChange={(e) => setInquiryPayload((prevState) => ({
        ...prevState,
        name: e.target.value,
    }))} />
    <input type='email' placeholder='Email' required className='border-b-[2px] text-[#656565] border-[#D9D9D9] md:w-1/2 w-[100%] py-[0.8rem] outline-none font-Poppins400 mt-2 md:mt-0' value={inquiryPayload.email} onChange={(e) => setInquiryPayload((prevState) => ({
        ...prevState,
        email: e.target.value,
    }))} />
</div>
<div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='md:flex justify-between items-center md:space-x-6 mt-[1.3rem]'>
    <input type='text' placeholder='Mobile No' className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none' value={inquiryPayload.mobile} onChange={(e) => setInquiryPayload((prevState) => ({
        ...prevState,
        mobile: e.target.value,
    }))} />
    <input type='text' placeholder='Subject' className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none mt-2 md:mt-0' value={inquiryPayload.subject} onChange={(e) => setInquiryPayload((prevState) => ({
        ...prevState,
        subject: e.target.value,
    }))} />
</div>
<div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='mt-[1.3rem]'>
    <textarea rows={3} placeholder='Your query' className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] py-[0.8rem] outline-none' value={inquiryPayload.query} onChange={(e) => setInquiryPayload((prevState) => ({
        ...prevState,
        query: e.target.value,
    }))} />
</div>
<button data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" onClick={submitInquiryHandler} className='bg-[#0174BB]  text-white px-8 py-3 font-Poppins500 rounded-lg mt-[2rem] hover:bg-white hover:text-[#0174BB] transition duration-[0.5s] hover:shadow-2xl hover:border hover:border-[#0174BB]'>Send Inquiry</button>
</div>                }
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

export default page
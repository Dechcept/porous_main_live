"use client"
import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiContacts } from 'react-icons/ti'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link'
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import Loader from '@/components/Loader'

function page() {

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
            toast.warn('Please provide a Message !!!')
          }else{
           setLoading(true)
            const payload={
                name:inquiryPayload.name,
                email:inquiryPayload.email,
                subject:inquiryPayload.subject,
                mobile_number:inquiryPayload.mobile,
                message:inquiryPayload.query
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


    const handleMapRedirect = () => {
        const location = encodeURIComponent('Ahmedabad Abc Colony, Street-3, Sector-5, Gopichand Ahmedabad-560038');
        const url = `https://www.google.com/maps/search/?api=1&query=${location}`;
        window.open(url, '_blank');
    };

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
                <p className=' font-Poppins700 md:text-[4rem] lg:text-[4rem] text-[3rem] bottom-[37%] left-[25%]  z-20 text-white  tracking-widest  absolute lg:bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[12%]'>Contact</p>


            </div>

            {/* SECOND SECTION */}
            <div className='xl:px-[12rem] md:px-[3rem] mt-[2rem] xl:mt-[5rem] md:flex justify-between items-start md:space-x-[5rem] px-[1rem]'>
                <div className='md:flex flex-col justify-start items-start '>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='xl:text-[2rem] md:text-[2rem] text-[2.2rem] font-Poppins700 tracking-wider '>Get in touch</p>
                    <div className='mt-3'>
                        <p className='lg:block md:hidden block'>
                            <Image src={'/contactOffice.svg'} width={50} height={30} priority={true} alt="" />
                        </p>
                        <p className='lg:hidden md:block hidden'>
                            <Image src={'/contactOffice.svg'} width={40} height={20} priority={true} alt="" />
                        </p>
                        <p className='font-Poppins700 mt-4 md:mt-3 lg:mt-4'>The Office</p>
                        <p className=' font-Poppins400 mt-2 lg:mt-2 md:mt-1 md:text-[0.8rem] lg:text-[1rem]'>Irrigate Porous Private Limited
<br/>GROUND FLOOR PLOT NO.63/64<br/> PARAB, KAMREJ OM TEXTILE PARK, V-9,<br/> Surat-394325, Gujarat, India</p>
                    </div>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='lg:mt-6 mt-6 md:mt-4'>
                        <p className='lg:block md:hidden block text-[3rem]'>
                            <TiContacts  />
                        </p>
                        <p className='lg:hidden md:block hidden text-[3rem]'>
                            <TiContacts  />
                        </p>
                        <p className='font-Poppins700 lg:mt-4 mt-4 md:mt-3'>Contact Details</p>
                        <p className=' font-Poppins400  mt-2 lg:mt-2 md:mt-1 md:text-[0.8rem] lg:text-[1rem]'>
                            <span>abc123@gmail.com</span>
                        </p>
                        <p className=' font-Poppins400  mt-2 lg:mt-2 md:mt-1 md:text-[0.8rem] lg:text-[1rem]'>
                            <span>+91 7856231498</span>
                        </p>
                    </div>
                </div>

                {/* FORM */}
    
                {
                    loading?<div className='md:flex-1 mt-[3rem] md:mt-0 h-[20rem]  flex justify-center items-center'>
                    <Loader/>
                 </div>:<div className='md:flex-1 mt-[3rem] md:mt-0'>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='md:flex justify-between items-center md:space-x-6'>
                        <input type='text' placeholder='Name' required className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none' value={inquiryPayload.name} onChange={(e) => setInquiryPayload((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                        }))} />
                        <input type='email' placeholder='Email' required className='border-b-[2px] text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none font-Poppins400 mt-[1.3rem] md:mt-0' value={inquiryPayload.email} onChange={(e) => setInquiryPayload((prevState) => ({
                            ...prevState,
                            email: e.target.value,
                        }))} />
                    </div>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='md:flex justify-between items-center md:space-x-6 mt-[1.3rem]'>
                        <input type='text' placeholder='Mobile No' className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none' value={inquiryPayload.mobile} onChange={(e) => setInquiryPayload((prevState) => ({
                            ...prevState,
                            mobile: e.target.value,
                        }))} />
                        <input type='text' placeholder='Subject' className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] md:w-1/2 py-[0.8rem] outline-none mt-[1.3rem] md:mt-0' value={inquiryPayload.subject} onChange={(e) => setInquiryPayload((prevState) => ({
                            ...prevState,
                            subject: e.target.value,
                        }))} />
                    </div>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='mt-[1.3rem]'>
                        <textarea rows={3} placeholder='Your message' className='border-b-[2px] font-Poppins400 text-[#656565] border-[#D9D9D9] w-[100%] py-[0.8rem] outline-none' value={inquiryPayload.query} onChange={(e) => setInquiryPayload((prevState) => ({
                            ...prevState,
                            query: e.target.value,
                        }))} />
                    </div>
                    <button data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" onClick={submitInquiryHandler} className='bg-[#0174BB] text-white px-8 py-3 font-Poppins500 rounded-lg mt-[2rem]'>Send Message</button>
                </div> 
                }

                
            </div>

            {/* <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" onClick={handleMapRedirect} className='relative w-[100%] h-[300px] xl:h-[500px] mt-[6rem] hover:scale-105 transition duration-[0.5s]'>
                <Image src={'/contactMap.svg'} fill style={{ objectFit: 'contain' }} priority={true} alt="" />
            </p> */}

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
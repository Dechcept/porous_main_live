"use client"
import React from 'react'
import Image from 'next/image'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios'

function page() {

    const [industryList,setIndustryList]=useState([])

    const fetchIndustryList=async()=>{
        try {
            const {data} = await axios.get('https://porous-live.onrender.com/industry/industry-list');
            
            if(data.data.length>0){
              setIndustryList(data.data)
            }else{
              console.log('error',error)
            }
        
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(() => {
        fetchIndustryList()
    }, [])

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
        <p className=' font-Poppins700 md:text-[3rem] lg:text-[4rem] text-[2rem] bottom-[40%] left-[25%]  z-20 text-white  tracking-widest  absolute lg::bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[20%]'>Industry</p>

    </div>

    {/* GRID GOES HERE */}
    <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-8 lg:gap-y-6 xl:px-[10rem] mt-[8rem] lg:px-[6rem] md:px-[3rem] px-[1rem] '>
       {
        industryList.length && industryList.map((industry)=>{

            return(
                <Link data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" href={`/industry/${industry._id}`} className='col-span-1  shadow-xl rounded-b-lg pb-4'>
                <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg '>
                    <Image src={industry.image} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                </p>
                <p className='font-Poppins700 tracking-wider text-center mt-2'>{industry.title}</p>
                  </Link>
            )
        })
       }
              
    </div>


</div>
  )
}

export default page
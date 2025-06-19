"use client"
import React from 'react'
import Image from 'next/image'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRef, useState, useEffect } from 'react';

function page() {

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
                <p className=' font-Poppins700 md:text-[3rem] lg:text-[4rem] text-[2rem] bottom-[40%] left-[25%]  z-20 text-white  tracking-wider  absolute lg::bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[20%]'>Products</p>

            </div>

            {/* GRID GOES HERE */}
            <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-8 lg:gap-y-6 xl:px-[10rem] mt-[8rem] lg:px-[6rem] md:px-[3rem] px-[1rem] '>
                <Link href={`/products/flat_inline_pipe_(12mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='col-span-1 '>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/12mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (12mm)</p>
                </Link>
                <Link href={`/products/flat_inline_pipe_(14mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
                    <p className='relative w-[100%]  h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/14mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (14mm)</p>
                </Link>
                <Link href={`/products/flat_inline_pipe_(16mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/16mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (16mm)</p>
                </Link>
                <Link href={`/products/flat_inline_pipe_(16mm_epdm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                    <p className='relative w-[100%]  h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/16mmEpd.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>EPDM PIPE <br /> (16mm)</p>
                </Link>
                <Link href={`/products/flat_inline_pipe_(19mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/19mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (19mm)</p>
                </Link>
                <Link href={`/products/flat_inline_pipe_(22mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/22mm1.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (22mm)</p>
                </Link>
                <Link href={`/products/areation_tube_green(25mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/pipes/16mm/main.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Areation Tube Green <br /> (25mm)</p>
                </Link>
                <Link href={`/products/areation_tube_blue(25mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/pipes/22mm/main.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Areation Tube Blue <br /> (25mm)</p>
                </Link>
       
                
            </div>


        </div>
    )
}

export default page
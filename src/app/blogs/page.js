"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'

function page() {
    const [showMoreBlogs, setShowMoreBlogs] = useState(false)
    const [blogList,setBlogList]=useState([])

    const fetchProjectList=async()=>{
        try {
            const {data} = await axios.get('https://porous-live.onrender.com/blog/blog-list');
            
            if(data.data.length>0){
setBlogList(data.data)
            }else{
console.log('error',error)
            }
        
          } catch (error) {
            console.error('Error fetching data:', error);
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

        fetchProjectList()
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
                <p className=' font-Poppins700 md:text-[4rem] lg:text-[4rem] text-[3rem] bottom-[37%] left-[25%]  z-20 text-white  tracking-wider  absolute lg:bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[12%]'>Blogs</p>


            </div>
            {/* SECOND SECTION */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 lg:gap-y-8 md:gap-y-10 xl:gap-y-6 lg:px-[6rem] md:px-[3rem] px-[1rem] xl:px-[10rem] mt-[8rem]'>
              {
                blogList.length>0 && blogList.map((blog)=>{
                    const date = new Date(blog.date);

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const formattedDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;

                    return(
                        <Link data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" href={`/blogs/${blog._id}`} className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
                        <p className='relative w-[100%] h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                            <Image src={blog.image} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                        </p>
                        <p className='font-Poppins700 tracking-wider  mt-4 px-[0.2rem] '>{blog.title}</p>
                        <p className='text-[#766D85] font-Poppins500 px-[0.2rem] mt-6 tracking-wider '>{formattedDate}</p>
                    </Link >
                    )
                })
              }
            </div>

            {/* LOAD MORE */}
            {
                !showMoreBlogs && <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" onClick={() => setShowMoreBlogs(!showMoreBlogs)} className='flex justify-center items-center mt-[7rem]'>
                    <button className='border border-[#0174BB] px-8 py-3 rounded-lg hover:bg-[#0174BB] hover:text-white transition duration-[0.5s]'>Load More</button>
                </div>
            }



        </div>
    )
}

export default page
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'
import { Avatar } from '@mui/material'

function page({ params }) {

    const [blogDetail, setBlogDetail] = useState({})
    const [blogList,setBlogList]=useState([])
    const [formatDate,setFormatDate]=useState('')

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
        fetchProjectList()
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

    useEffect(()=>{
if(blogList.length>0){
const blogDetail1=blogList.find((blog)=>blog._id===params.blogId);

if(blogDetail1){
setBlogDetail(blogDetail1)
}
}
    },[blogList])

   useEffect(()=>{
   if(blogDetail && blogDetail.date){
    console.log('blogDetail',blogDetail)
    const date1=new Date(blogDetail.date)
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate1 = date1.toLocaleString('en-US', options);
      setFormatDate(formattedDate1)
   }
   },[blogDetail])

    return (
        <div>

            {/* HEAD */}
            <div className='xl:px-[8rem] mt-[2rem] md:px-[2rem] px-[1rem] lg:px-[4rem] md:mt-[3rem] lg:mt-[4rem] xl:mt-[6rem] '>
                <div className='border-b-2 border-gray-200 md:pb-[1.5rem] pb-[1rem] lg:pb-[2rem]'>
                    <p className=' font-Poppins700 text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] tracking-wider'>{blogDetail.title}</p>
                    <div className='text-[#656565] flex justify-start items-center space-x-2 tracking-wider  font-Poppins400 md:space-x-4 lg:mt-[1rem] xl:mt-[1.8rem] md:mt-[0.8rem] lg:text-[1rem] md:text-[0.9rem] text-[0.8rem] mt-[0.8rem]'>
                        <p className=''>{blogDetail.postedby}</p>
                        <p className='w-[0.2rem] h-[1rem] md:h-[1.4rem] lg:h-[1.5rem] rounded-lg bg-[#656565]'></p>
                        <p>{formatDate}</p>
                    </div>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className='xl:px-[8rem] mt-[1rem] md:mt-[1.2rem] md:px-[2rem] px-[1rem] lg:px-[4rem] lg:mt-[2.5rem] xl:mt-[4rem] md:grid grid-cols-6 gap-x-12'>
                {/* LEFT SECTION */}
                <div className='col-span-4 space-y-8'>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] font-Poppins400 tracking-wider xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem]'>{blogDetail.paraone}</p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='xl:text-[1.2rem] lg:text-[1rem] font-Poppins700 tracking-wider md:text-[0.9rem]'>{blogDetail.paratwobold}</p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] font-Poppins400 tracking-wider xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem]'>{blogDetail.parathree}</p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='relative w-[100%] h-[200px] lg:h-[320px] xl:h-[400px] z-20 hover:scale-105 transition duration-[0.5s]'>
                        <Image src={blogDetail.image} fill style={{ objectFit: 'cover', borderRadius: '10px' }} priority={true} alt="" />
                    </p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] font-Poppins400 tracking-wider xl:text-[1rem] lg:text-[0.8rem] md:text-[0.8rem]'>{blogDetail.description}</p>
                </div>

                {/* RIGHT SECTION */}
                <div className='col-span-2 mt-[3rem] md:mt-0'>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='flex justify-start items-start space-x-4 '>
                        <Avatar src={blogDetail.userimage} alt="User Avatar" sx={{width:80,height:80}}/>
                        <div className='flex flex-col justify-between h-[100%] lg:space-y-3  xl:space-y-5'>
                            <p className=' font-Poppins700 lg:text-[1rem] xl:text-[1.2rem] md:text-[0.9rem] tracking-wider '>{blogDetail.postedby}</p>
                            <p className=' font-Poppins400 md:text-[0.8rem] lg:text-[1rem] tracking-wider '>{blogDetail.designation}</p>
                        </div>
                    </div>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] md:text-[0.7rem] text-[0.8rem] font-Poppins400 tracking-wider mt-[1rem] lg:text-[0.8rem] xl:text-[0.9rem]'>
                        {blogDetail.userdesc}
                    </p>
                    <div className=' my-[1rem]'>
                        <p className='border-b-2 border-gray-200 w-[100%] h-[0.1rem]'></p>
                    </div>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='xl:text-[1.2rem] lg:text-[1rem] font-Poppins700 tracking-wider my-[1rem] text-[1.2rem] md:text-[1rem]'>Discover More</p>
                   {
                  blogList.length &&  blogList.map((blog,index)=>{
                    const date = new Date(blog.date);

                  const day = date.getDate();
                  const month = date.getMonth() + 1;
                  const year = date.getFullYear();
                  
                  const formattedDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
                  return(
                 <div className='mb-[2rem]'>
                      <Link href={`/blogs/${blog._id}`} className=' cursor-pointer '>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className=' font-Poppins700 tracking-wider text-[0.9rem] md:text-[0.7rem] xl:text-[1rem] lg:text-[0.9rem]'>
                    {blog.title}
                 </p>
                 <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] flex justify-start items-center font-Poppins400 lg:space-x-4 tracking-wider  md:space-x-2 space-x-4 mt-[0.8rem] xl:text-[0.8rem] lg:text-[0.7rem] text-[0.7rem] md:text-[0.7rem]'>
                     <p >  {blog.postedby}</p>
                     <p className='w-[0.2rem] md:h-[1.2rem] h-[1.5rem] lg:h-[1.5rem] rounded-lg bg-[#656565]'></p>
                     <p>  {formattedDate}</p>
                 </div>
                   </Link >
                 </div>
                  )
                  }
                  
                       
                    )
                   }

                  
                </div>
            </div>

            <div className='mt-[7rem] xl:px-[8rem] md:px-[2rem] lg:px-[4rem] px-[1rem]'>
                <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#0174BB] font-Poppins500 text-center '>BLOGS</p>
                <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className=' font-Poppins700 text-center text-[2rem] tracking-wider mb-[3rem]'>LATEST BLOGS</p>
                <div className='md:grid grid-cols-4 md:px-4 lg:px-0 md:gap-x-3 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 xl:gap-x-6 xl:gap-y-6 '>
                    {
                        blogList.map((blog)=>{
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
                        }
                       

                        )
                    }
                
                </div>
            </div>


        </div>
    )
}

export default page
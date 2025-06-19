"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'



function page({ params }) {

    const [showMoreProduct, setShowMoreProduct] = useState(false)
    const [projectDetail,setProjectDetail]=useState([{
        title:'',
        patra1:'',
        para2:''

    }])
    const [projectList,setProjectList]=useState([])
    const [projectImage,setProjectImages]=useState([])

    const fetchProjectList=async()=>{
        try {
            const {data} = await axios.get('https://porous-live.onrender.com/project/project-list');
            
            if(data.data.length>0){
setProjectList(data.data)
            }else{
console.log('error',error)
            }
        
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    const {projectId}=params

    const fectProjectImages=async()=>{
        try {
            const {data} = await axios.get(`https://porous-live.onrender.com/project/getprojectgallerybyid/${projectId}`);
            
            if(data.data.length>0){
                setProjectImages(data.data)
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
        fectProjectImages()
    }, [])

    useEffect(()=>{
      if(projectList.length>0){
        const projectDetail1=projectList.find((project)=>project._id===projectId);
        if(projectDetail1){
         setProjectDetail(projectDetail1)
        }
      }
    },[projectList])


        
    return (
        <div>

            {/* HEAD GOES HERE */}
            <div className='w-[100%] relative'>
                <p className='relative w-[100%] h-[350px] md:h-[350px] lg:h-[380px] xl:h-[360px]'>
                    <Image src={'/agricultureHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt=""/>
                </p>
                <p className='absolute w-[200px] h-[160px] md:w-[264px] md:h-[211px] bottom-[25%] md:bottom-[20%] lg:left-[6%] xl:left-[10%] transform rotate-[90deg]  '>
                    <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'fill' }} priority={true} alt=""/>
                </p>
                <p className=' font-Poppins700 md:text-[3rem] lg:text-[4rem] text-[2rem] bottom-[40%] left-[25%]  z-20 text-white  tracking-wider  absolute lg::bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[20%]'>{projectDetail.title}</p>

            </div>

            <div className='xl:px-[10rem] lg:px-[6rem] md:px-[3rem] px-[1rem]'>
                <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className=' font-Poppins500 text-[1.8rem] text-center md:text-start xl:text-[2.5rem] tracking-wider mt-[4rem]'>About the Project</p>
                <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='lg:grid grid-cols-3 justify-start mb-[4rem] mt-[1rem]'>
                    <p className='text-[#656565] font-Poppins400 text-center md:text-start text-[0.9rem] md:text-[1rem] tracking-wider col-span-2 '></p>
                </div>
                <div  className='md:grid grid-cols-3 md:gap-x-6 space-y-4 md:space-y-0 '>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='relative col-span-1 w-[100%] lg:h-[540px] h-[540px] md:h-[450px] '>
                        <Image src={projectImage[0]?.image?projectImage[0].image:'/projectHero2.jpg'} fill style={{ objectFit: 'cover' }} priority={true} alt=""/>
                    </p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='relative col-span-1 w-[100%] lg:h-[540px] h-[540px] md:h-[450px]'>
                        <Image src={projectImage[1]?.image?projectImage[1].image:'/projectHero2.jpg'} fill style={{ objectFit: 'cover' }} priority={true} alt=""/>
                    </p>
                    <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='relative col-span-1 w-[100%] lg:h-[540px] h-[540px] md:h-[450px]'>
                        <Image src={projectImage[2]?.image?projectImage[2].image:'/projectHero2.jpg'} fill style={{ objectFit: 'cover' }} priority={true} alt=""/>
                    </p>
                </div>

                <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='lg:grid grid-cols-3 justify-end mt-[4rem] text-[0.9rem] text-center md:text-start md:text-[1rem]'>
                    <p className='text-[#656565] font-Poppins400 tracking-wider col-span-2 col-start-2 '>{projectDetail.description}</p>
                </div>
            </div>

            <div className='xl:px-[10rem] mt-[6rem] lg:px-[6rem] md:px-[3rem] px-[1rem] '>
                <p data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className=' font-Poppins700 text-center text-[2rem] tracking-wider mb-[3rem]'>PROJECT GALLERY</p>
                <div className='grid md:grid-cols-6 grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-12 md:gap-y-8 lg:gap-y-6 xl:px-[10rem] mt-[8rem] lg:px-[6rem] md:px-[3rem] px-[1rem] '>
               {
                projectImage.length&& projectImage.map((image)=>{
                    return (
                        <div className='col-span-2'>
                        <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" href={`/projects/${image.projectid}`} className='col-span-1 '>
                         <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                          <Image src={image.image} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                         </p>
          
                     </div>
                          </div>
                    )
                })
               }
                
                </div>
              
              
            </div>

        </div>
    )
}

export default page
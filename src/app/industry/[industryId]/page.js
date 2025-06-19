"use client"
import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios'

SwiperCore.use([Pagination, Navigation]);

function page({params}) {

    const swiperRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [benefitSlide, setBenefitSlide] = useState(0);
    const [industryData,setIndustryData]=useState({})

    const [industryList,setIndustryList]=useState([])
    const [industryImages,setIndustryImages]=useState([])
    const [industryDetail,setIndustryDetail]=useState({})


    const handleSlideChange = () => {
        if (swiperRef.current) {
            setActiveIndex(swiperRef.current.activeIndex);
        }
    };

    const {industryId}=params

    const fetchProjectList=async()=>{
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

    const fectProjectImages=async()=>{
        try {
            const {data} = await axios.get(`
            https://porous-live.onrender.com/industry/getaccessoriesbyid/${industryId}`);
            
            if(data.data.length>0){
                setIndustryImages(data.data)
            }else{
              console.log('error',error)
            }
        
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    } 


    // const carouselArr = [
    //     {
    //         image: '/homeLandscape.svg',
    //         id: 1,
    //         name: 'Landscape Irrigation'
    //     },
    //     {
    //         image: '/homeAgriculture.svg',
    //         id: 2,
    //         name: 'Agriculture Irrigation'
    //     },
    //     {
    //         image: '/homePest.svg',
    //         id: 3,
    //         name: 'Pest Control'
    //     },
    //     {
    //         image: '/homeAgriculture.svg',
    //         id: 4,
    //         name: 'Agriculture Irrigation'
    //     },
    //     {
    //         image: '/homeLandscape.svg',
    //         id: 5,
    //         name: 'Landscape Irrigation'
    //     },
    //     {
    //         image: '/homePest.svg',
    //         id: 6,
    //         name: 'Pest Control'
    //     },
    //     {
    //         image: '/homePest.svg',
    //         id: 7,
    //         name: 'Pest Control'
    //     },
    //     {
    //         image: '/homeLandscape.svg',
    //         id: 8,
    //         name: 'Landscape Irrigation'
    //     },
    //     {
    //         image: '/homeAgriculture.svg',
    //         id: 9,
    //         name: 'Agriculture Irrigation'
    //     },

    // ]

    const carouselArr = [
        {
          image: '/homeLandscape.svg',
          id: 1,
            name: 'Landscape Irrigation',
            heading: 'Landscape irrigation systems can be designed to deliver water to the plants in various ways, including sub-surface irrigation method and underground sprinkles. The system is designed to deliver water efficiently to plants based on their specific water needs and soil. Low water bills and a more sustainable landscape can be achieved by using efficient irrigation technologies.',
            benefitHead1: 'Saves water',
            benefitHead1Summary: 'Landscaping with proper watering can reduce water usage when it is utilised with porous pipes.',
            benefitHead2: 'Reduced maintenance',
            benefitHead2Summary: 'Porous pipes require less maintenance than other irrigation systems because they are designed to work on a low gravity.',
            benefitHead3: 'Reduced energy costs',
            benefitHead3Summary: 'Irrigation using porous pipes requires low pressure, which means lower energy costs for pumping water. This technology is therefore more energy-efficient than other methods.',
            metricSizes:['16mm','19mm']
        },
        {
          image: '/homeAgriculture.svg',
          id: 2,
            name: 'Agriculture Irrigation',
            heading: 'Agricultural irrigation is the process of delivering water to crops or pasture areas to ensure their development and production. Irrigation systems can be designed to deliver water in through sprinkler irrigation.Agricultural irrigation can also involve the use of irrigation scheduling and water management practices to optimize water use efficiency and minimize water waste.',
            benefitHead1: 'Improved crop productivity',
            benefitHead1Summary: 'Improving crop productivity can be achieved by ensuring that crops receive the right amount of water, which encourages healthy plant growth and results in increased crop yields. This is especially important in areas with limited rainfall or unpredictable weather patterns.',
            benefitHead2: 'Increased crop quality',
            benefitHead2Summary: 'Irrigation may help to improve the quality of crops, which could lead to higher profits.',
            benefitHead3: 'Enhanced adaptability',
            benefitHead3Summary: 'Irrigation allows farmers to more freely choose their crops and planting schedule, which can result in a more consistent harvest.',
            metricSizes:['16mm','19mm']
        },
        {
          image: '/homePest.svg',
          id: 3,
            name: 'Pest Control',
            heading: 'Pest control is the process of managing or eliminating pests or insects, particularly termites, which can cause significant damage to irrigation fields that can pose a threat to crops. ',
            benefitHead1: 'Protects Health',
            benefitHead1Summary: 'Health is protected by the fact that diseases can be spread by pests like cockroaches, mosquitoes, and rats. Proper pest management can help keep the public healthy by reducing the chances of disease transmission. ',
            benefitHead2: 'Environmental protected',
            benefitHead2Summary: 'Pesticides can help protect infrastructure and buildings from damage by pests, including termites, carpenter ants, and rats. This can save property owners money on repairs.',
            benefitHead3: 'Prevents property damage',
            benefitHead3Summary: 'Integrated pest management (IPM) is a way to manage pests using a combination of natural and/or safe methods. This can help to reduce the use of harmful chemicals and promote a more environmentally friendly approach to pest management.',
            metricSizes:['9mm','12mm','14mm', '16mm','19mm','22mm']
        },
        {
          image: '/homeAgriculture.svg',
          id: 4,
            name: 'Aqua Culture',
            heading: 'Aquaculture is the breeding, growing, and harvesting of fish and aquatic plants in artificial facilities. Aquaculture can be conducted in completely built on land (onshore aquaculture). ',
            benefitHead1: 'Increase food security',
            benefitHead1Summary: 'Aquaculture can help to increase food security by providing a dependable food source.',
            benefitHead2: 'Sustainable production',
            benefitHead2Summary: 'Aquaculture may be a sustainable way to produce food, without having a negative environmental impact. Appropriate aquaculture methods can help lessen pollution, promote biodiversity, and save natural resources. ',
            benefitHead3: 'Economic benefits',
            benefitHead3Summary: 'Aquaculture may have economic benefits for local businesses and residents by producing revenue and jobs. This could reduce reliance on imported seafood and help strengthen the economy. ',
            metricSizes:['16mm']
        },
      ]

    const numSlides = Math.ceil(carouselArr.length / 3);

    const benefitArray = [
        {
            id: 1,
            content: 'We Are Strengthening And Making It Long Lasting'
        },
        {
            id: 2,
            content: 'Bringing Growth, Ingenuity, And Experience To Market.'
        },
        {
            id: 3,
            content: 'Producing More. Conserving More. Improving Lives.'
        }
    ]



    const nextBenefitSlide = () => {
        console.log('benefitSlide', benefitSlide)
        if (benefitSlide === 2) {
            setBenefitSlide(0)
        }

        if (benefitSlide > 2) {
            setBenefitSlide(0)
        }

        if (benefitSlide === 0) {
            setBenefitSlide(1)
        }

        if (benefitSlide === 1) {
            setBenefitSlide(2)
        }

    }

    const prevBenefitSlide = () => {
        console.log('benefitSlide.current1', benefitSlide)
        if (benefitSlide === 0) {
            setBenefitSlide(2)
        } else {
            setBenefitSlide(benefitSlide - 1)
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

    useEffect(() => {
        
 

        if(industryList.length){
         const detailData=industryList.find((industry)=>industry._id===industryId);
         setIndustryDetail(detailData)
        }

 },[industryList])




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
                <p className=' font-Poppins700 md:text-[3rem] lg:text-[4rem] text-[2rem] bottom-[40%] left-[25%]  z-20 text-white  tracking-wider  absolute lg::bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[12%]'>{industryDetail&& industryDetail.title}</p>


            </div>

            {/* HERO GOES HERE */}
            <div className='mt-[10rem] hidden xl:flex justify-center  space-x-6 xl:px-[10rem]'>
                <div className='relative '>
                    <p data-aos-duration="1000"
                        data-aos-easing="ease-in-out" data-aos="fade-up" className='relative w-[552px] h-[460px] z-20 hover:scale-105 transition duration-[0.5s] rounded-lg overflow-hidden'>
                        <Image src={industryDetail&& industryDetail.image} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>
                    <p data-aos-duration="1000"
                        data-aos-easing="ease-in-out" data-aos="fade-up" className='absolute -top-16 -left-16 w-[328px] h-[328px]'>
                        <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>

                </div>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className=''>
                    <p className='font-Poppins700 text-[2.2rem] leading-[2.5rem] mt-3 tracking-wider '>{industryDetail&& industryDetail.title}</p>
                    <p className='text-[#656565] font-Poppins400 mt-6 tracking-wider '>{industryDetail&& industryDetail.description}</p>

                </div>
            </div>

            {/* HERO TAB */}
            <div className='lg:mt-[10rem] xl:hidden md:mt-[6rem] md:px-[3rem] mt-[4rem]  md:flex justify-center  md:space-x-6 lg:px-[6rem] xl:px-[10rem]'>
                <div className='relative md:block hidden '>
                    <p data-aos-duration="1000"
                        data-aos-easing="ease-in-out" data-aos="fade-up" className='relative w-[300px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[500px] xl:h-[500px] z-20 rounded-lg overflow-hidden'>
                        <Image src={industryDetail&& industryDetail.image} fill style={{ objectFit: 'fill' }} priority={true} alt="" />
                    </p>
                    <p data-aos-duration="1000"
                        data-aos-easing="ease-in-out" data-aos="fade-up" className='absolute w-[250px] h-[250px] md:-top-4 md:-left-8 lg:-top-6 lg:-left-12 xl:-top-16 xl:-left-16 lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px] z-10'>
                        <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover', borderRadius: '20px' }} priority={true} alt="" />
                    </p>
                </div>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className=''>
                    <p className='font-Poppins700 md:text-[1.8rem] lg:text-[2.2rem] text-[1.6rem] text-center md:text-start leading-[2.5rem] lg:mt-2 xl:mt-3 md:leading-[2rem] lg:leading-[2.5rem] tracking-wider '>{industryDetail&& industryDetail.title}</p>
                    <p className='text-[#656565] md:text-[0.8rem] xl:text-[1rem] text-[0.9rem]  text-center md:text-start px-[1rem] md:px-[0rem] lg:text-[0.7rem] font-Poppins400 md:mt-2 lg:mt-4 mt-4 xl:mt-6 tracking-wider '>{industryDetail&& industryDetail.description}</p>

                </div>
                <div className='relative md:hidden flex justify mt-[10rem] md:mt-0 pl-[1rem]'>
                    <p className='relative w-[300px] h-[300px]  z-20 rounded-lg overflow-hidden'>
                        <Image src={industryDetail&& industryDetail.image} fill style={{ objectFit: 'fill' }} priority={true} alt="" />
                    </p>
                    <p className='absolute -top-10 right-[8%] lg:-top-12 lg:-left-12 xl:-top-16 xl:-left-16 w-[280px] h-[280px] xl:w-[450px] xl:h-[450px]'>
                        <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className='w-[100%] md:hidden lg:h-[450px] xl:h-[550px] pt-[12rem] md:pt-0  pb-[2rem] bg-[#E6F1F8] lg:-translate-y-12 xl:-translate-y-16  2xl:space-x-[12rem] lg:px-[6rem] xl:px-[10rem] -translate-y-12 z-10'>

                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='  '>
                    <p className='text-[#0174BB]  font-Poppins500 text-[1.2rem] tracking-wider lg:text-[1.1rem] xl:text-[1.2rem] mb-[2rem] text-center md:text-start'>BENEFITS</p>
                    <div className='w-[100%] relative h-[4rem]'>
                        <p className={benefitSlide === 0 ? 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider ' : 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{industryDetail&&industryDetail.benefitHead1}</p>
                        {/* <p className={benefitSlide === 1 ? 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider ' : 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{benefitArray[1].content}</p>
                        <p className={benefitSlide === 2 ? 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider ' : 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{benefitArray[2].content}</p> */}
                    </div>
                    <div className='md:mt-8 mt-[3rem] flex md:block justify-center space-x-4'>
                        <button onClick={()=>prevBenefitSlide()} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
                            <MdKeyboardArrowLeft />
                        </button>
                        <button onClick={()=>nextBenefitSlide()} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
                            <MdKeyboardArrowRight />
                        </button>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center items-center md:justify-start  lg:space-x-6 xl:space-x-8 lg:w-[98%] xl:w-[85%] 2xl:w-[80%] px-[2rem] translate-y-24'>
                    <div className='whiteDropShadow bg-white lg:px-[1rem] w-[80%] px-[0.8rem] xl:px-[1rem] pb-[1.5rem]   h-[17rem]'>
                        <div className='flex justify-center items-center -translate-y-8'>
                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                            </p>
                        </div>
                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>{industryDetail&&industryDetail.benefitHead1}</p>
                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>{industryDetail&&industryDetail.benefitHead1Summary}</p>
                    </div>
                    <div className='whiteDropShadow bg-[#0174BB] lg:px-[1rem] w-[80%] px-[0.8rem] xl:px-[1rem] pb-[1.5rem] h-[17rem] mt-[4rem]'>
                        <div className='flex justify-center items-center -translate-y-8 '>
                            <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                                <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                            </p>
                        </div>
                        <p className='font-Poppins500 text-white tracking-wider text-[1.1rem] text-center'>{industryDetail&&industryDetail.benefitHead2}</p>
                        <p className='font-Poppins400 text-white tracking-wider text-[0.85rem] text-center mt-4'>{industryDetail&&industryDetail.benefitHead2Summary}</p>
                    </div>
                </div>
            </div>

            {/* {SECOND SECTION LARGE SCREENS} */}
            <div className='w-[100%] md:h-[430px] lg:h-[500px] xl:h-[600px] lg:-translate-y-32 xl:-translate-y-24  2xl:space-x-[8rem] lg:px-[4rem] xl:px-[10rem] hidden md:flex pb-[2rem] bg-[#E6F1F8] -translate-y-20 xl:space-x-[4rem]   justify-start items-end space-x-12 px-[10rem] md:px-[3rem] md:mt-4 lg:mt-0 '>

                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='w-1/3'>
                    <p className='text-[#0174BB] font-Poppins500 text-[1.2rem] mb-2'>BENEFITS</p>
                    <div className='relative w-[100%] h-[5rem] '>
                    <p className={benefitSlide === 0 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider   ' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{industryDetail&&industryDetail.benefitHead1}</p>
                        {/* <p className={benefitSlide === 0 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider   ' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{industryData&&industryData.benefitHead1}</p>
                        <p className={benefitSlide === 1 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider ' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{industryData&&industryData.benefitHead2}</p>
                        <p className={benefitSlide === 2 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider ' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider '}>{industryData&&industryData.benefitHead3}</p> */}
                    </div>
                    {/* <div className='mt-8 space-x-4'>
                        <button onClick={prevBenefitSlide} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
                            <MdKeyboardArrowLeft />
                        </button>
                        <button onClick={nextBenefitSlide} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
                            <MdKeyboardArrowRight />
                        </button>
                    </div> */}
                </div>

                <div className=' flex space-x-4 justify-center lg:justify-start translate-y-24 lg:space-x-6 xl:space-x-8 lg:w-[60%] xl:w-[60%] 2xl:w-[60%] xl:px-[2rem] lg:px-[0rem] md:w-[60%] '>
          <div className='relative w-[100%] h-[12rem] '>
            <div className={benefitSlide === 0 ? 'absolute top-0 w-[100%] flex transition duration-[0.9s]  space-x-6 opacity-100' : 'absolute top-0 opacity-0 transition duration-[0.9s] flex space-x-6 w-[100%]'}>
              <div className='whiteDropShadow bg-white px-[0.5rem] pb-[1.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s]  2xl:h-[20rem]'>
                <div className='flex justify-center items-center -translate-y-8'>
                  <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                    <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-gray-800 tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>{industryDetail&&industryDetail.benefitHead1}</p>
                <p className='font-Poppins400 text-gray-700 tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>{industryDetail&&industryDetail.benefitHead1Summary}</p>
              </div>
              <div className='whiteDropShadow bg-[#0174BB] px-[0.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] 2xl:h-[20rem] pb-[1.5rem]'>
                <div className='flex justify-center items-center -translate-y-8 '>
                  <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                    <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-white tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>{industryDetail&&industryDetail.benefitHead2}</p>
                <p className='font-Poppins400 text-white tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>{industryDetail&&industryDetail.benefitHead2Summary}</p>
              </div>
            </div>
            {/* <div className={benefitSlide === 1 ? 'absolute top-0 w-[100%] opacity-100 transition duration-[0.9s] flex space-x-6 ' : 'absolute top-0 opacity-0 transition duration-[0.9s] flex space-x-6 w-[100%]'}>
              <div className='whiteDropShadow bg-white px-[0.5rem] pb-[1.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] 2xl:h-[20rem]'>
                <div className='flex justify-center items-center -translate-y-8'>
                  <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                    <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-gray-800 tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>{industryData&&industryData.benefitHead3}</p>
                <p className='font-Poppins400 text-gray-700 tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>{industryData&&industryData.benefitHead3Summary}</p>
              </div>
              <div className='whiteDropShadow bg-[#0174BB] px-[0.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] 2xl:h-[20rem] pb-[1.5rem]'>
                <div className='flex justify-center items-center -translate-y-8 '>
                  <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                    <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-white tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>{industryData&&industryData.benefitHead1}</p>
                <p className='font-Poppins400 text-white tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>{industryData&&industryData.benefitHead1Summary}</p>
              </div>
            </div>
            <div className={benefitSlide === 2 ? 'absolute top-0 w-[100%] opacity-100 transition duration-[0.9s] flex space-x-6 ' : 'absolute top-0 opacity-0 transition duration-[0.9s] flex space-x-6 w-[100%]'}>
              <div className='whiteDropShadow bg-white px-[0.5rem] pb-[1.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] 2xl:h-[20rem]'>
                <div className='flex justify-center items-center -translate-y-8'>
                  <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                    <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-gray-800 tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>{industryData&&industryData.benefitHead2}</p>
                <p className='font-Poppins400 text-gray-700 tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>{industryData&&industryData.benefitHead2Summary}</p>
              </div>
              <div className='whiteDropShadow bg-[#0174BB] px-[0.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] 2xl:h-[20rem] pb-[1.5rem]'>
                <div className='flex justify-center items-center -translate-y-8 '>
                  <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                    <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-white tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>{industryData&&industryData.benefitHead3}</p>
                <p className='font-Poppins400 text-white tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>{industryData&&industryData.benefitHead3Summary}</p>
              </div>
            </div> */}
          </div>
        </div>
            </div>

            {/* FOURTH SECTION */}
            <div className='w-[100%]   bg-white mt-[8rem] lg:px-[6rem] px-[1rem] xl:px-[10rem]'>
                <p data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='text-center mt-3 text-[2.5rem] font-Poppins700 text-[#0174BB] tracking-wider '>Product Sizes</p>
                <p data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] lg:px-[6rem] xl:px-[10rem] text-[0.9rem] font-Poppins500 tracking-wider text-center mt-4 leading-[1.8rem] mb-[4rem]'>
                   Here are some common metric sizes of porous pipes
                </p>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className={`relative hidden   xl:px-[10rem] md:grid md:grid-cols-9 md:gap-y-4 lg:gap-y-0   justify-center gap-x-[1.5rem] items-center w-[100%]`}>
                    {/* <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        modules={[Pagination, Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}

                        onSlideChange={handleSlideChange}

                    >
                        <div className=' '>

                            {
                                carouselArr.map((x) =>
                                    <SwiperSlide key={x.id} className=' flex  '>
                                        <div className='bg-white flex flex-col items-center rounded-lg'>

                                            <div key={`inner${x.id}`} className={`  w-[100%] rounded-lg h-[150px]  md:h-[200px]   relative  `} >
                                                <Image
                                                    priority={true}
                                                    src={x.image}
                                                    alt=''
                                                    fill
                                                    style={{
                                                        objectFit: "cover",
                                                        borderRadius: "10px"
                                                    }} />

                                            </div>
                                            <p className=' font-Poppins500 py-[0.8rem]'>{x.name}</p>
                                        </div>
                                    </SwiperSlide>

                                )
                            }

                        </div>

                    </Swiper> */}
                    {/* <div className=" z-20 flex justify-center items-center mt-8 space-x-3">
                        {Array.from({ length: numSlides }).map((_, index) => (
                            <div
                                key={`pagination-${index}`}
                                className={`w-4 h-4 flex justify-center items-center border border-black rounded-full p-[0.15rem] `}
                                onClick={() => {
                                    if (swiperRef.current) {
                                        swiperRef.current.slideTo(index * 3);
                                        setActiveIndex(index);
                                    }
                                }}
                            >
                                <p className={`w-[100%] h-[100%] rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-400"
                                    }`}></p>
                            </div>
                        ))}
                    </div> */}
                   
                       

                            {
                              industryImages&&industryImages.map((x) =>
                                    
                                        <Link href={`/products/${x.title.toLowerCase().replace(/ /g, '_')}`} className='bg-white w-[100%] text-center  rounded-lg md:col-span-3'>

                                            <p key={`inner${industryData.id}`} className={`  w-[100%] rounded-lg h-[150px]  md:h-[200px]   relative  `} >
                                                <Image
                                                    priority={true}
                                                    src={x.image}
                                                    alt=''
                                                    fill
                                                    style={{
                                                        objectFit: "cover",
                                                        borderRadius: "10px"
                                                    }} />

                                            </p>
                                            <p  className=' font-Poppins500 py-[0.8rem] tracking-wider '>{x.title}</p>
                                        </Link>
                                  

                                )
                            }
                </div>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='md:hidden space-y-6 text-center'>
                    {/* <Swiper

                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            carouselArr.map((x) =>
                                <SwiperSlide key={x.id} className=' flex  '>
                                    <div className='bg-white flex flex-col items-center rounded-lg'>

                                        <div key={`inner${x.id}`} className={`  w-[100%] rounded-lg h-[250px]  md:h-[200px]   relative  `} >
                                            <Image
                                                priority={true}
                                                src={x.image}
                                                alt=''
                                                fill
                                                style={{
                                                    objectFit: "cover",
                                                    borderRadius: "10px"
                                                }} />

                                        </div>
                                        <p className=' font-Poppins500 py-[0.8rem]'>{x.name}</p>
                                    </div>
                                </SwiperSlide>

                            )
                        }
                    </Swiper> */}
                   
{
    industryImages&&industryImages.map((x) =>
      
            <Link href={`/products/${x.title.toLowerCase().replace(/ /g, '_')}`} className='bg-white w-[100%] rounded-lg'>

                <p key={`inner${industryData.id}`} className={`  w-[100%] rounded-lg h-[250px]  md:h-[200px]   relative  `} >
                    <Image
                        priority={true}
                        src={x.image}
                        alt=''
                        fill
                        style={{
                            objectFit: "cover",
                            borderRadius: "10px"
                        }} />

                </p>
                <p  className=' font-Poppins500 py-[0.8rem] tracking-wider '>{x.title}</p>
            </Link>
       

    )
}

                </div>

            </div>

        </div>
    )
}

export default page
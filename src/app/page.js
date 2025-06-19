"use client"
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


export default function Home() {
  const swiperRef = useRef();
  const videoRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayButton, setDisplayButton] = useState(true);
  const swiperRefHead = useRef(null);
  const [benefitSlide, setBenefitSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [blogList,setBlogList]=useState([])
  const [industryList,setIndustryList]=useState([])


  // useEffect(() => {
  //   console.log("benefitSlide.current", benefitSlide.current);
  //   const swiperInstance = swiperRefHead.current.swiper;
  //   const interval = setInterval(() => {
  //     if (swiperInstance && swiperInstance.activeIndex !== null) {
  //       const newIndex = (swiperInstance.activeIndex + 1) % swiperInstance.slides.length;
  //       swiperInstance.slideTo(newIndex);
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);


  const fetchBlogtList=async()=>{
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

    fetchBlogtList()
    fetchIndustryList()
  }, [])

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.activeIndex);
    }
  };


  // const carouselArr = [
  //   {
  //     image: '/homeLandscape.svg',
  //     id: 1,
  //     name: 'Landscape Irrigation'
  //   },
  //   {
  //     image: '/homeAgriculture.svg',
  //     id: 2,
  //     name: 'Agriculture Irrigation'
  //   },
  //   {
  //     image: '/homePest.svg',
  //     id: 3,
  //     name: 'Pest Control'
  //   },
  //   {
  //     image: '/homePest.svg',
  //     id: 4,
  //     name: 'Aqua Culture'
  //   },
  //   {
  //     image: '/homeAgriculture.svg',
  //     id: 5,
  //     name: 'Agriculture Irrigation'
  //   },
  //   {
  //     image: '/homeLandscape.svg',
  //     id: 6,
  //     name: 'Landscape Irrigation'
  //   },
  //   {
  //     image: '/homePest.svg',
  //     id: 7,
  //     name: 'Pest Control'
  //   },
  //   {
  //     image: '/homePest.svg',
  //     id: 8,
  //     name: 'Aqua Culture'
  //   },
  //   {
  //     image: '/homePest.svg',
  //     id: 9,
  //     name: 'Pest Control'
  //   },
  //   {
  //     image: '/homeLandscape.svg',
  //     id: 10,
  //     name: 'Landscape Irrigation'
  //   },
  //   {
  //     image: '/homeAgriculture.svg',
  //     id: 11,
  //     name: 'Agriculture Irrigation'
  //   },

  // ]

  const carouselArr = [
    {
      image: '/homeLandscape.svg',
      id: 1,
      name: 'Landscape Irrigation'
    },
    {
      image: '/homeAgriculture.svg',
      id: 2,
      name: 'Agriculture Irrigation'
    },
    {
      image: '/homePest.svg',
      id: 3,
      name: 'Pest Control'
    },
    {
      image: '/homeAgriculture.svg',
      id: 4,
      name: 'Aqua Culture'
    },
  ]

  const numSlides = Math.ceil(carouselArr.length / 3);

  const handlePlayClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setDisplayButton(!displayButton)
    } else {
      video.pause();
      setDisplayButton(!displayButton)
    }
  };

  const handleVideoButton = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setDisplayButton(!displayButton)
    } else {
      video.pause();
      setDisplayButton(!displayButton)
    }
    // setDisplayButton(!displayButton)
  }

  const benefitArray = [
    {
      id: 1,
      content: 'Bringing growth and experience to the Market.'
    },
    {
      id: 3,
      content: 'Producing More. Conserving More. Improving Lives.'
    },
    {
      id: 2,
      content: 'We Are Strengthening And Making It Long Lasting'
    },


  ]


  const testimonialArray = [
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Rishabjit',
      des: 'Manager of crazy bite',
    },
    {
      id: 2,
      content: 'My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.',
      name: 'Kelsi Gordon',
      des: 'Insurance Broker, Brashears Insurance'
    },
    {
      id: 3,
      content: 'Jeramy and his team at the Lorem Ipsum Company whipped my website into shape just in time for tax season. I was excited by the results and am proud to direct clients to my website once again.',
      name: 'Seth Gewirtz',
      des: 'Facebook Project Manager'
    }
  ]

  const nextBenefitSlide = () => {
    console.log('benefitSlide', benefitSlide)
    if (benefitSlide === 2) {
      setBenefitSlide(0)
    }

    if (benefitSlide === 0) {
      setBenefitSlide(1)
    }

    if (benefitSlide > 2) {
      setBenefitSlide(0)
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

  const nextTestimonialSlide = () => {
    console.log('testimonialSlide', testimonialSlide)
    if (testimonialSlide === 2) {
      setTestimonialSlide(0)
    }

    if (testimonialSlide > 2) {
      setTestimonialSlide(0)
    }

    if (testimonialSlide === 0) {
      setTestimonialSlide(1)
    }

    if (testimonialSlide === 1) {
      setTestimonialSlide(2)
    }

  }

  const prevTestimonialSlide = () => {
    console.log('testimonialSlide.current1', testimonialSlide)
    if (testimonialSlide === 0) {
      setTestimonialSlide(2)
    } else {
      setTestimonialSlide(testimonialSlide - 1)
    }

  }


  return (
    <div >

      {/* HEAD GOES HERE */}
      {/* <div className='w-[100%] relative'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          ref={swiperRefHead}
          loop
          navigation={false}
          pagination={false}
          speed={2500}
        >
          <SwiperSlide>
            <div className='relative w-[100%] h-[350px] md:h-[400px] lg:h-[500px] xl:h-[580px]'>
              <Image src={'/homeHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
            </div>
            <div className='absolute md:w-[160px] md:h-[200px] md:left-[10%] md:bottom-[25%] lg:w-[230px] lg:h-[300px] lg:left-[12%] lg:bottom-[25%] xl:w-[264px] xl:h-[336px] xl:bottom-[20%] xl:left-[10%] flex flex-col items-center lg:pt-12 xl:pt-16 md:pt-6 left-[10%] bottom-[30%] h-[150px] w-[120px] pt-6'>
              <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
              <span className='font-Poppins400 md:text-[1.2rem] text-white text-[0.9rem]  tracking-wider'>Quality</span>
            </div>
            <p className='font-Poppins700 md:left-[15%] md:bottom-[35%] lg:left-[18.5%] md:text-[2.5rem] lg:text-[3rem] lg:bottom-[40%] lg:leading-[3.8rem] xl:text-[5rem] md:leading-[3rem] xl:leading-[5.5rem] z-20 text-white  tracking-widest absolute xl:bottom-[30%] xl:left-[15.5%] bottom-[38%] text-[1.5rem] leading-[2rem] left-[17%]'>
              Highly Strength and Long Lasting
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-[100%] h-[350px] md:h-[400px] lg:h-[500px] xl:h-[580px]'>
              <Image src={'/aboutHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
            </div>
            <div className='absolute md:w-[160px] md:h-[200px] md:left-[10%] md:bottom-[25%] lg:w-[230px] lg:h-[300px] lg:left-[12%] lg:bottom-[25%] xl:w-[264px] xl:h-[336px] xl:bottom-[20%] xl:left-[10%] flex flex-col items-center lg:pt-12 xl:pt-16 md:pt-6 left-[10%] bottom-[30%] h-[150px] w-[120px] pt-6'>
              <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
              <span className='font-Poppins400 md:text-[1.2rem] text-white text-[0.9rem]  tracking-wider'>Quality</span>
            </div>
            <p className='font-Poppins700 md:left-[15%] md:bottom-[35%] lg:left-[18.5%] md:text-[2.5rem] lg:text-[3rem] lg:bottom-[40%] lg:leading-[3.8rem] xl:text-[5rem] md:leading-[3rem] xl:leading-[5.5rem] z-20 text-white  tracking-widest absolute xl:bottom-[30%] xl:left-[15.5%] bottom-[38%] text-[1.5rem] leading-[2rem] left-[17%]'>
            Highly Strength and Long Lasting
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className='relative w-[100%] h-[350px] md:h-[400px] lg:h-[500px] xl:h-[580px]'>
              <Image src={'/agricultureHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
            </div>
            <div className='absolute md:w-[160px] md:h-[200px] md:left-[10%] md:bottom-[25%] lg:w-[230px] lg:h-[300px] lg:left-[12%] lg:bottom-[25%] xl:w-[264px] xl:h-[336px] xl:bottom-[20%] xl:left-[10%] flex flex-col items-center lg:pt-12 xl:pt-16 md:pt-6 left-[10%] bottom-[30%] h-[150px] w-[120px] pt-6'>
              <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
              <span className='font-Poppins400 md:text-[1.2rem] text-white text-[0.9rem]  tracking-wider'>Quality</span>
            </div>
            <p className='font-Poppins700 md:left-[15%] md:bottom-[35%] lg:left-[18.5%] md:text-[2.5rem] lg:text-[3rem] lg:bottom-[40%] lg:leading-[3.8rem] xl:text-[5rem] md:leading-[3rem] xl:leading-[5.5rem] z-20 text-white  tracking-widest absolute xl:bottom-[30%] xl:left-[15.5%] bottom-[38%] text-[1.5rem] leading-[2rem] left-[17%]'>
            Highly Strength and Long Lasting
            </p>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className='w-[100%] relative'>
      <div className='relative w-[100%] h-[350px] md:h-[400px] lg:h-[500px] xl:h-[580px]'>
              <Image src={'/homeHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
            </div>
            <div className='absolute md:w-[160px] md:h-[200px] md:left-[10%] md:bottom-[25%] lg:w-[230px] lg:h-[300px] lg:left-[12%] lg:bottom-[25%] xl:w-[264px] xl:h-[336px] xl:bottom-[20%] xl:left-[10%] flex flex-col items-center lg:pt-12 xl:pt-16 md:pt-6 left-[10%] bottom-[30%] h-[150px] w-[120px] pt-6'>
              <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
              <span className='font-Poppins400 md:text-[1.2rem] text-white text-[0.9rem]  tracking-wider'>Quality</span>
            </div>
            <p className='font-Poppins700 md:left-[15%] md:bottom-[35%] lg:left-[18.5%] md:text-[2.5rem] lg:text-[3rem] lg:bottom-[40%] lg:leading-[3.8rem] xl:text-[5rem] md:leading-[3rem] xl:leading-[5.5rem] z-20 text-white  tracking-widest absolute xl:bottom-[30%] xl:left-[15.5%] bottom-[38%] text-[1.5rem] leading-[2rem] left-[17%]'>
            Strengthening and Long Lasting
            </p>
      </div>


      {/* HERO GOES HERE */}
      <div className='lg:mt-[10rem] md:mt-[6rem] md:px-[3rem] mt-[4rem]  md:flex justify-center  md:space-x-6 lg:px-[6rem] xl:px-[10rem] z-20'>
        <div className='relative md:block hidden '>
          <p data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos="fade-up" className='relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[500px] xl:h-[500px] z-20 hover:scale-105 transition duration-[0.5s]'>
            <Image src={'/homeHero1.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
          </p>
          <p data-aos-duration="1000"
            data-aos-easing="ease-in-out" data-aos="fade-up" className='absolute w-[250px] h-[250px] md:-top-8 md:-left-8 lg:-top-12 lg:-left-12 xl:-top-16 xl:-left-16 lg:w-[320px] lg:h-[320px] xl:w-[450px] xl:h-[450px]'>
            <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
          </p>
          <p className='flex items-center  absolute w-[120%] md:-bottom-[5rem] lg:-bottom-[5.5rem] xl:-bottom-[6rem] z-30'>
            <span className='text-[#0174BB] font-Poppins500 leading-[10rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem]'>10</span><span className='font-Poppins500 lg:text-[1.2rem] xl:text-[1.5rem] mt-[2rem]'>years of experience</span>          </p>
        </div>
        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className=''>
          <p className=' font-Poppins500 text-[#0174BB] lg:text-[1.2rem] text-center md:text-start tracking-wider'>Who We Are</p>
          <p className='font-Poppins700 md:text-[1.8rem] lg:text-[2.2rem] text-[1.6rem] text-center md:text-start leading-[2.5rem] lg:mt-2 xl:mt-3 md:leading-[2rem] lg:leading-[2.5rem] tracking-wider'>We focus on  Sustainability</p>
          <p className='text-[#656565] md:text-[0.8rem] xl:text-[1rem] text-[0.9rem]  text-center md:text-start px-[1rem] md:px-[0rem] lg:text-[0.7rem] font-Poppins400 md:mt-2 lg:mt-4 mt-4 xl:mt-6 tracking-wider'>The main background of porous irrigation is to provide a water-efficient and sustainable irrigation system for agriculture. Porous irrigation systems release water slowly and steadily through small holes or pores along the length of the pipes, allowing the water to seep into the soil gradually and directly to the roots of the plants.</p>
          <div className='flex md:block justify-center md:items-start lg:items-center mb-[4rem] md:mb-0 '>
            <button className='lg:mt-8 mt-8 md:mt-2 border border-[#0174BB] md:text-[0.8rem] lg:text-[1rem] rounded-lg font-Poppins400 px-6 py-2 hover:bg-[#0174BB] hover:text-white transition duration-[0.5s] tracking-wider'>
              <Link href="/about" >More About us</Link>
            </button>
          </div>
        </div>
        <div className='relative md:hidden flex justify mt-[10rem] md:mt-0 pl-[1rem]'>
          <p className='relative w-[300px] h-[300px]  z-20'>
            <Image src={'/homeHero1.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
          </p>
          <p className='absolute -top-10 right-[8%] lg:-top-12 lg:-left-12 xl:-top-16 xl:-left-16 w-[280px] h-[280px] xl:w-[450px] xl:h-[450px]'>
            <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
          </p>
          <p className='flex items-center -bottom-[5rem]  absolute  md:w-[120%] lg:-bottom-[5.5rem] xl:-bottom-[6rem] z-30'>
            <span className='text-[#0174BB] font-Poppins500 leading-[10rem] text-[10rem] lg:text-[15rem] xl:text-[20rem]'>10</span><span className='font-Poppins500 lg:text-[1.2rem] xl:text-[1.5rem] mt-[2rem]'>years of experience</span>          </p>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className='w-[100%] md:hidden lg:h-[450px] xl:h-[550px] pt-[12rem] md:pt-0  pb-[2rem] bg-[#E6F1F8] lg:-translate-y-12 xl:-translate-y-16  2xl:space-x-[12rem] lg:px-[6rem] xl:px-[10rem] -translate-y-12 z-10'>

        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='  '>
          <p className='text-[#0174BB]  font-Poppins500 text-[1.2rem] tracking-wider lg:text-[1.1rem] xl:text-[1.2rem]   text-center md:text-start mb-[2rem] '>BENEFITS</p>
          <div className='w-[100%] relative h-[4rem]'>
            <p className={benefitSlide === 0 ? 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider' : 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider'}>{benefitArray[0].content}</p>
            <p className={benefitSlide === 1 ? 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider' : 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider'}>{benefitArray[1].content}</p>
            <p className={benefitSlide === 2 ? 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider' : 'font-Poppins700 text-center md:text-start text-[1.3rem] px-[1rem] md:px-0 lg:text-[1.5rem] xl:text-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider'}>{benefitArray[2].content}</p>
          </div>
          <div className='md:mt-8 mt-[3rem] flex md:block justify-center space-x-4'>
            <button onClick={prevBenefitSlide} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
              <MdKeyboardArrowLeft />
            </button>
            <button onClick={nextBenefitSlide} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
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
            <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
            <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water conservation by lowering evaporation and runoff. Water gets evaporated or taken away by drainage when water is delivered directly to the soil.</p>
          </div>
          <div className='whiteDropShadow bg-[#0174BB] lg:px-[1rem] w-[80%] px-[0.8rem] xl:px-[1rem] pb-[1.5rem] h-[17rem] mt-[4rem]'>
            <div className='flex justify-center items-center -translate-y-8 '>
              <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
              </p>
            </div>
            <p className='font-Poppins500 text-white tracking-wider text-[1.1rem] text-center'>Recycle</p>
            <p className='font-Poppins400 text-white tracking-wider text-[0.85rem] text-center mt-4'>Irrigation porous pipes are made from recycled rubber and plastic, As a result, it is  environmentally friendly.</p>
          </div>
        </div>
      </div>

      {/* {SECOND SECTION LARGE SCREENS} */}
      <div className='w-[100%] md:h-[430px] lg:h-[500px] xl:h-[600px] lg:-translate-y-12 xl:-translate-y-16  2xl:space-x-[8rem] lg:px-[4rem] xl:px-[10rem] hidden md:flex pb-[2rem] bg-[#E6F1F8] -translate-y-8 xl:space-x-[4rem]   justify-start items-end space-x-12 px-[10rem] md:px-[3rem] md:mt-4 lg:mt-0  '>

        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className=' w-1/3'>
          <p className='text-[#0174BB] font-Poppins500 text-[1.2rem] mb-2 tracking-wider'>BENEFITS</p>
          <div className='relative w-[100%] h-[8rem] '>
            <p className={benefitSlide === 0 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s]   tracking-wider' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider'}>{benefitArray[0].content}</p>
            <p className={benefitSlide === 1 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider'}>{benefitArray[1].content}</p>
            <p className={benefitSlide === 2 ? 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-100 transition duration-[0.9s] tracking-wider' : 'font-Poppins700 lg:text-[1.5rem] xl:text-[1.8rem] md:text-[1.2rem] leading-[2.5rem] absolute top-0 opacity-0 transition duration-[0.9s] tracking-wider'}>{benefitArray[2].content}</p>
          </div>
          <div className='mt-8 space-x-4'>
            <button onClick={prevBenefitSlide} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
              <MdKeyboardArrowLeft />
            </button>
            <button onClick={nextBenefitSlide} className='border border-black text-[1.5rem] rounded-lg p-[0.5rem] hover:bg-black hover:text-white transition duration-[0.5s]'>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        <div className=' flex space-x-4 justify-center lg:justify-start translate-y-24 lg:space-x-6 xl:space-x-8 lg:w-[60%] xl:w-[60%] 2xl:w-[60%] xl:px-[2rem] lg:px-[0rem] md:w-[60%] '>
          <div className='relative w-[100%] h-[12rem] '>
            <div className={benefitSlide === 0 ? 'absolute top-0 w-[100%] flex transition duration-[0.9s]  space-x-6 opacity-100' : 'absolute top-0 opacity-0 transition duration-[0.9s] flex space-x-6 w-[100%]'}>
              <div className='whiteDropShadow bg-white px-[0.5rem] pb-[1.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s]  lg:h-[18rem]'>
                <div className='flex justify-center items-center -translate-y-8'>
                  <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                    <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-gray-800 tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>Water conservation</p>
                <p className='font-Poppins400 text-gray-700 tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
              </div>
              <div className='whiteDropShadow bg-[#0174BB] px-[0.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] lg:h-[18rem]'>
                <div className='flex justify-center items-center -translate-y-8 '>
                  <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                    <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-white tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>Recycle</p>
                <p className='font-Poppins400 text-white tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>Irrigation porous pipes are<br /> made from recycled<br /> rubber and plastic, As a<br /> result, it is <br /> environmentally friendly.</p>
              </div>
            </div>
            <div className={benefitSlide === 1 ? 'absolute top-0 w-[100%] opacity-100 transition duration-[0.9s] flex space-x-6 ' : 'absolute top-0 opacity-0 transition duration-[0.9s] flex space-x-6 w-[100%]'}>
              <div className='whiteDropShadow bg-white px-[0.5rem] pb-[1.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] lg:h-[18rem]'>
                <div className='flex justify-center items-center -translate-y-8'>
                  <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                    <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-gray-800 tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>Better plant development</p>
                <p className='font-Poppins400 text-gray-700 tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>Porous pipes assist to keep soil moisture levels constant, which promotes healthier plant growth and reduces the danger of plant stress or damage.</p>
              </div>
              <div className='whiteDropShadow bg-[#0174BB] px-[0.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] lg:h-[18rem]'>
                <div className='flex justify-center items-center -translate-y-8 '>
                  <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                    <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-white tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>Erosion control</p>
                <p className='font-Poppins400 text-white tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>Porous pipes can aid in reducing erosion brought on by runoff from heavy rains by delivering water directly to the soil.</p>
              </div>
            </div>
            <div className={benefitSlide === 2 ? 'absolute top-0 w-[100%] opacity-100 transition duration-[0.9s] flex space-x-6 ' : 'absolute top-0 opacity-0 transition duration-[0.9s] flex space-x-6 w-[100%]'}>
              <div className='whiteDropShadow bg-white px-[0.5rem] pb-[1.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] lg:h-[18rem]'>
                <div className='flex justify-center items-center -translate-y-8'>
                  <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                    <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-gray-800 tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>Longevity</p>
                <p className='font-Poppins400 text-gray-700 tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>An average life span of porous pipes are approximately of 15+ years, by which long-term consistency is maintained to supply water to the soil.</p>
              </div>
              <div className='whiteDropShadow bg-[#0174BB] px-[0.5rem] lg:px-[1rem] xl:px-[1rem] w-1/2 hover:scale-105 transition duration-[0.5s] lg:h-[18rem]'>
                <div className='flex justify-center items-center -translate-y-8 '>
                  <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                    <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                  </p>
                </div>
                <p className='font-Poppins500 text-white tracking-wider md:text-[0.9rem] lg:text-[1.1rem] text-center'>Low gravity</p>
                <p className='font-Poppins400 text-white tracking-wider md:text-[0.7rem] lg:text-[0.85rem] text-center mt-4'>Porous pipes doesn’t require high pressure, it works with low gravity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div data-aos-duration="1000"
        data-aos-easing="ease-in-out" data-aos="fade-up" className='xl:px-[10rem] lg:px-[6rem] px-[1rem] xl:mt-[13rem] lg:mt-[10rem] md:mt-[10rem]'>
        <p className='text-[#0174BB] font-Poppins500 text-center mt-[6rem]'>OUR PRODUCTS</p>
        <p className=' font-Poppins700 text-center text-[2rem] tracking-wider mb-[3rem]'>PRODUCT RANGE</p>

        {/* GRID GOES HERE */}
        <div className='grid md:grid-cols-4 grid-cols-2 gap-x-3 gap-y-5 lg:gap-x-4 lg:gap-y-4 xl:gap-x-6 xl:gap-y-6 '>
          <Link  href={`/products/flat_inline_pipe_(12mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
            <p className='relative w-[100%] h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
              <Image src={'/12mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
            </p>
            <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (12mm)</p>
          </Link>
          <Link  href={`/products/flat_inline_pipe_(14mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
            <p className='relative w-[100%] h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
              <Image src={'/14mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
            </p>
            <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (14mm)</p>
          </Link>
          <Link  href={`/products/flat_inline_pipe_(16mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
            <p className='relative w-[100%] h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
              <Image src={'/16mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
            </p>
            <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (16mm)</p>
          </Link>
          <Link  href={`/products/flat_inline_pipe_(16mm_epdm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
            <p className='relative w-[100%] h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
              <Image src={'/16mmEpd.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
            </p>
            <p className='font-Poppins700 tracking-wider text-center mt-2'>EPDM Pipe <br /> (16mm)</p>
          </Link>
          <Link href={`/products/flat_inline_pipe_(19mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
            <p className='relative w-[100%] h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
              <Image src={'/19mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
            </p>
            <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (19mm)</p>
          </Link>
          <Link href={`/products/flat_inline_pipe_(22mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
            <p className='relative w-[100%]  h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
              <Image src={'/22mm.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
            </p>
            <p className='font-Poppins700 tracking-wider text-center mt-2'>Flat Inline Pipe <br /> (22mm)</p>
          </Link>
          <Link href={`/products/areation_tube_green(25mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
                    <p className='relative w-[100%] h-[180px] md:h-[200px]  xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/pipes/16mm/main.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Areation Tube Green <br /> (25mm)</p>
                </Link>
                <Link href={`/products/areation_tube_blue(25mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"  className='col-span-1 '>
                    <p className='relative w-[100%]  h-[160px] lg:h-[200px] xl:h-[264px] rounded-lg hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/pipes/22mm/main.jpg'} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
                    </p>
                    <p className='font-Poppins700 tracking-wider text-center mt-2'>Areation Tube Blue <br /> (25mm)</p>
                </Link>
        
        </div>
      </div>

      {/* FOURTH SECTION */}
      <div data-aos-duration="1000"
        data-aos-easing="ease-in-out" data-aos="fade-up" className='w-[100%] h-[1900px] md:h-[945px]  bg-[#E6F1F8] mt-[6rem] lg:px-[6rem] px-[1rem] xl:px-[10rem]'>
        <p data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='text-center  pt-[4rem] font-Poppins500 text-[#0174BB] tracking-wider text-[1.1rem]'>APPLICATION</p>
        <p data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='text-center mt-3 text-[2.5rem] font-Poppins700'>WHERE TO USE IT</p>
        <p data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#656565] lg:px-[6rem] xl:px-[10rem] text-[0.9rem] font-Poppins500 tracking-wider text-center mt-4 leading-[1.8rem] mb-[4rem]'>
          Porous pipes are used in various applications for the efficient delivery of water to plants or other areas that require irrigation. Here are some common applications of porous pipes
        </p>
        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='relative hidden md:grid md:grid-cols-2 md:gap-y-4 lg:gap-y-0 lg:grid-cols-4  justify-center gap-x-[1.5rem] items-center w-[100%]  xl:px-[6rem] '>
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
                industryList.length && industryList.map((x) =>
               
                    <Link href={`/industry/${x._id}`} className='bg-white  rounded-lg w-[100%] text-center'>

                      <div key={`inner${x._id}`} className={`  w-[100%] rounded-lg h-[150px]  md:h-[200px]   relative  `} >
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
                      <p className=' font-Poppins500 py-[0.8rem] tracking-wider'>{x.title}</p>
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
                  industryList.length && industryList.map((x) =>
                      <Link href={`/industry/${x._id}`} className='bg-white w-[100%] rounded-lg'>

        <div key={`inner${x._id}`} className={`  w-[100%] rounded-lg h-[250px]  md:h-[200px]   relative  `} >
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
        <p className=' font-Poppins500 py-[0.8rem] tracking-wider'>{x.title}</p>
                      </Link>
                  )
                }

        </div>

        {/* VIDEO COMP */}
        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='w-[100%] lg:h-[350px] xl:h-[420px] mt-[10rem] lg:mt-[8rem] xl:mt-[6rem] relative '>
          <video onClick={handleVideoButton} ref={videoRef} className="w-full h-full object-cover" id="video">
            <source src="/homeVideo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {
            displayButton && <button
              className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-2 border-white rounded-full w-16 h-16 flex justify-center items-center text-white hover:bg-white hover:text-black transition duration-300"
              id="playButton"
              onClick={handlePlayClick}
            >
              <p className='flex justify-center items-center '>
                <BsPlay className='text-[2.5rem] ' />
              </p>
            </button>

          }
          {
            displayButton && <p className='w-[100%] h-[100%] bg-black absolute top-0 opacity-50'></p>
          }

        </div>
      </div>

      <div className='w-[100%] lg:px-[4rem]  xl:px-[10rem]'>
        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='md:h-[543px] pb-[3rem] md:pb-0 w-[100%] mt-[12rem] pt-[3rem] md:pt-0  md:mt-[22rem] md:flex justify-start items-center md:space-x-8 bg-[#E6F1F8]'>
          <div className=' md:h-[100%]  relative md:w-1/2 flex justify-center items-center '>
            <p className='w-[100%] h-[320px] lg:h-[320px] xl:h-[415px] relative'>
              <Image src={'/homeFeedback.svg'} fill style={{ objectFit: 'fill' }} priority={true} alt="" />
            </p>
            <p className='xl:w-[190px] lg:w-[130px] h-[120px] w-[120px] lg:h-[120px] xl:h-[180px] absolute  xl:top-[30%] left-[32%]'>
              <Image src={'/homeTestQuote.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
            </p>
          </div>
          <div className='md:w-1/2 px-[1rem] lg:px-[1rem] mt-[3rem] md:mt-0'>
            <p className='md:text-start text-center font-Poppins700 md:text-[2.5rem] text-[1.5rem] tracking-wider '>TESTIMONIAL</p>
            <div className='relative  h-[8rem]'>
              <p className={testimonialSlide === 0 ? 'md:text-start text-center text-[#656565] font-Poppins400 lg:mt-6 xl:mt-8 mt-4 opacity-100 transition duration-[0.9s] absolute top-0 tracking-wider' : 'md:text-start text-center text-[#656565] font-Poppins400 lg:mt-6 xl:mt-8 mt-4 opacity-0 transition duration-[0.9s] absolute top-0 tracking-wider'}>{testimonialArray[0].content}</p>
              <p className={testimonialSlide === 1 ? 'md:text-start text-center text-[#656565] font-Poppins400 lg:mt-6 xl:mt-8 mt-4 opacity-100 transition duration-[0.9s] absolute top-0 tracking-wider' : 'md:text-start text-center text-[#656565] font-Poppins400 lg:mt-6 xl:mt-8 mt-4 opacity-0 transition duration-[0.9s] absolute top-0 tracking-wider'}>{testimonialArray[1].content}</p>
              <p className={testimonialSlide === 2 ? 'md:text-start text-center text-[#656565] font-Poppins400 lg:mt-6 xl:mt-8 mt-4 opacity-100 transition duration-[0.9s] absolute top-0 tracking-wider' : 'md:text-start text-center text-[#656565] font-Poppins400 lg:mt-6 xl:mt-8 mt-4 opacity-0 transition duration-[0.9s] absolute top-0 tracking-wider'}>{testimonialArray[2].content}</p>
            </div>
            <p className='md:w-[30%] h-1 bg-[#0174BB] mt-[3.5rem]  md:mt-[4rem] lg:mt-6'></p>
            <div className='relative h-[4rem]'>
              <p className={testimonialSlide === 0 ? 'text-[1.5rem] text-center md:text-start text-[#4E4E4E] font-Poppins600 mt-4 opacity-100 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider' : 'text-[1.5rem] text-center md:text-start text-[#4E4E4E] font-Poppins600 mt-4 opacity-0 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider'}>{testimonialArray[0].name}</p>
              <p className={testimonialSlide === 1 ? 'text-[1.5rem] text-center md:text-start text-[#4E4E4E] font-Poppins600 mt-4 opacity-100 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider' : 'text-[1.5rem] text-center md:text-start text-[#4E4E4E] font-Poppins600 mt-4 opacity-0 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider'}>{testimonialArray[1].name}</p>
              <p className={testimonialSlide === 2 ? 'text-[1.5rem] text-center md:text-start text-[#4E4E4E] font-Poppins600 mt-4 opacity-100 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider' : 'text-[1.5rem] text-center md:text-start text-[#4E4E4E] font-Poppins600 mt-4 opacity-0 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider'}>{testimonialArray[2].name}</p>
            </div>
            <div className='relative h-[3rem]'>
              <p className={testimonialSlide === 0 ? 'text-center md:text-start font-Poppins400 text-[#4E4E4E] mt-3 opacity-100 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider' : 'text-center md:text-start font-Poppins400 text-[#4E4E4E] mt-3 opacity-0 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider'}>{testimonialArray[0].des}</p>
              <p className={testimonialSlide === 1 ? 'text-center md:text-start font-Poppins400 text-[#4E4E4E] mt-3 opacity-100 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider' : 'text-center md:text-start font-Poppins400 text-[#4E4E4E] mt-3 opacity-0 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider'}>{testimonialArray[1].des}</p>
              <p className={testimonialSlide === 2 ? 'text-center md:text-start font-Poppins400 text-[#4E4E4E] mt-3 opacity-100 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider' : 'text-center md:text-start font-Poppins400 text-[#4E4E4E] mt-3 opacity-0 transition duration-[0.9s] absolute top-0 w-[100%] tracking-wider'}>{testimonialArray[2].des}</p>
            </div>

            <div className='mt-8 lg:space-x-[3rem] xl:space-x-[4rem] flex justify-center items-center md:block space-x-12'>
              <button onClick={prevTestimonialSlide} className='text-[1.5rem] text-[#4E4E4E] hover:text-[#0174BB] hover:scale-125 transition duration-[0.5s] hover:shadow-2xl'>
                <BsArrowLeft />
              </button>
              <button onClick={nextTestimonialSlide} className='text-[1.5rem] hover:shadow-2xl text-[#4E4E4E] hover:text-[#0174BB] hover:scale-125 transition duration-[0.5s]'>
                <BsArrowRight />
              </button>

            </div>
          </div>

        </div>

        {/* BLOGS */}
        <div data-aos-duration="1000"
          data-aos-easing="ease-in-out" data-aos="fade-up" className='mt-[7rem] px-[1rem] md:px-0'>
          <p className='text-[#0174BB] font-Poppins500 text-center tracking-wider'>BLOGS</p>
          <p className=' font-Poppins700 text-center text-[2rem] tracking-wider mb-[3rem] '>LATEST BLOGS</p>
          <div className='md:grid grid-cols-4 md:px-4 lg:px-0 md:gap-x-3 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 xl:gap-x-6 xl:gap-y-6 '>
           {
            blogList.length && blogList.map((x)=>{
              const date = new Date(x.date);

              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              
              const formattedDate = `${day < 10 ? "0" : ""}${day}/${month < 10 ? "0" : ""}${month}/${year}`;
  
              return (
                <Link key={x._id} href={`/blogs/${x._id}`} className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
              <p className='relative w-[100%] h-[200px] md:h-[180px] lg:h-[200px] xl:h-[264px] rounded-lg'>
                <Image src={x.image} fill style={{ objectFit: 'cover', borderRadius: '16px' }} priority={true} alt="" />
              </p>
              <p className='font-Poppins700 mt-[1rem] md:text-[0.8rem] tracking-wider  xl:text-[1rem] lg:text-[0.9rem]  lg:mt-4 xl:mt-6 px-[0.2rem]'>{x.title}</p>
              <p className='text-[#766D85] font-Poppins500 md:text-[0.8rem] xl:text-[1rem] md:mt-3 mt-[1rem] lg:text-[0.9rem] px-[0.2rem] lg:mt-4 xl:mt-6 tracking-wider'>{formattedDate}</p>
            </Link>
              )
            }
          
            )
           }
      
           
          </div>
        </div>
      </div>


    </div>
  )
}

"use client"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SwiperCore, { Navigation } from "swiper";
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';


SwiperCore.use([Pagination, Navigation]);

function about() {
    const swiperRef = useRef();
    const videoRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [testimonialSlide, setTestimonialSlide] = useState(0);

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


    const handleSlideChange = () => {
        if (swiperRef.current) {
            setActiveIndex(swiperRef.current.activeIndex);
        }
    };

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
                    <Image src={'/aboutHead.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                </p>
                <p className='absolute w-[200px] h-[160px] md:w-[264px] md:h-[211px] bottom-[25%] md:bottom-[20%] lg:left-[6%] xl:left-[10%] transform rotate-[90deg]  '>
                    <Image src={'/homeHeadSquare.svg'} fill style={{ objectFit: 'fill' }} priority={true} alt="" />
                </p>
                <p className=' font-Poppins700 md:text-[3rem] lg:text-[4rem] text-[2rem] bottom-[40%] left-[25%]  z-20 text-white  tracking-widest  absolute lg::bottom-[35%] md:bottom-[38%] lg:left-[15%] xl:left-[17%] md:left-[20%] '>About Us</p>


            </div>

            {/* HERO GOES HERE */}
            <div className='md:mt-[10rem] hidden mt-[6rem] md:flex md:space-x-[5rem] justify-center lg:space-x-[5rem]  xl:space-x-[10rem] md:px-[3rem] xl:px-0 px-[1rem]'>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='relative'>
                    <p className='relative md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[460px] xl:h-[460px] z-20 hover:scale-105 transition duration-[0.5s]'>
                        <Image src={'/aboutMan.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>
                    <p className='absolute xl:-bottom-12 xl:-right-[12%] md:-bottom-[-6%] md:-right-[15%] lg:h-[280px] lg:w-[280px] md:h-[250px] md:w-[250px] xl:w-[328px] xl:h-[328px] lg:-bottom-[15%] lg:-right-[15%]'>
                        <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>

                </div>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className=''>
                    <p className=' font-Poppins500 text-[#0174BB] lg:text-[1.1rem] xl:text-[1.2rem] tracking-wider'>About Us</p>
                    <p className='text-[#656565] font-Poppins400 xl:text-[1rem] md:mt-3 lg:text-[0.8rem] lg:mt-4 xl:mt-6 md:text-[0.8rem] tracking-wider'>Irrigate Porous Private Limited is a well-known maker of Pest control,<br /> Aeration Tubes, Agricultural and Land Irrigation Systems.<br />
                        <strong className='text-black'></strong> started the firm to supply farmers with high-quality <br /> irrigation equipment. At Porous Irrigation, we take pride in our commitment<br /> to <strong className='text-black'>environmental sustainability</strong> and <strong className='text-black'>water conservation</strong>.
                        Irrigate Porous<br /> has established itself as a market leader in a wide range of coverings<br /> in irrigation devices available at single location for all Porous irrigation<br /> solutions across the country, which is backed by a dedicated team of <strong className='text-black'>10</strong><br /> <strong className='text-black'>executives</strong> who help constantly to provide better irrigation solutions.</p>

                </div>
            </div>

            {/* HERO FOR MOBILE */}
            <div className=' md:hidden  mt-[4rem]   '>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className=''>
                    <p className=' font-Poppins500 text-[#0174BB] lg:text-[1.2rem] text-center md:text-start tracking-wider'>About Us</p>
                    <p className='text-[#656565] md:text-[0.8rem] xl:text-[1rem] text-[0.9rem]  text-center md:text-start px-[1rem] md:px-[0rem] lg:text-[0.7rem] font-Poppins400 md:mt-2 lg:mt-4 mt-4 xl:mt-6 tracking-wider'>Irrigate Porous Private Limited is a well-known maker of Pest control,Aeration Tubes, Agricultural and Land Irrigation Systems.<strong className='text-black'></strong> started the firm to supply farmers with high-quality irrigation equipment. At Porous Irrigation, we take pride in our commitment to <strong className='text-black'>environmental sustainability</strong> and <strong className='text-black'>water conservation</strong>.Irrigate Porous has established itself as a market leader in a wide range of coveringsin irrigation devices available at single location for all Porous irrigation solutions across the country, which is backed by a dedicated team of <strong className='text-black'>10</strong> <strong className='text-black'>executives</strong> who help constantly to provide better irrigation solutions.</p>
                    <div className='flex md:block justify-center md:items-start lg:items-center mb-[4rem] md:mb-0 tracking-wider'>
                        <button className='lg:mt-8 mt-8 md:mt-2 border border-[#0174BB] md:text-[0.8rem] lg:text-[1rem] rounded-lg font-Poppins400 px-6 py-2 '>
                            More About Us
                        </button>
                    </div>
                </div>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='relative md:hidden flex justify mt-[10rem] md:mt-0 pl-[1rem]'>
                    <p className='relative w-[300px] h-[300px]  z-20'>
                        <Image src={'/aboutMan.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>
                    <p className='absolute -top-10 right-[8%] lg:-top-12 lg:-left-12 xl:-top-16 xl:-left-16 w-[280px] h-[280px] xl:w-[450px] xl:h-[450px]'>
                        <Image src={'/homeHeroSquare.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                    </p>
                </div>
            </div>

            {/* THIRD SECTION */}
            <div data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos="fade-up" className='xl:mt-[16rem] md:mt-[10rem] mt-[10rem] px-[1rem] lg:mt-[15rem] xl:px-[10rem] lg:px-[3rem] md:px-[2rem] bg-[#E6F1F8] pb-[4rem] '>
                <div className='md:flex justify-center items-center md:space-x-6 -translate-y-[6rem] md:-translate-y-[6rem] '>
                    <div className='md:w-1/3 lg:px-[1.8rem] md:px-[1rem] md:py-[1rem] lg:py-[2rem] py-[0.8rem] px-[0.8rem] rounded-lg whiteDropShadow bg-white hover:scale-105 transition duration-[0.5s] xl:h-[22rem] lg:h-[26rem] md:h-[24rem]'>
                        <p className=' font-Poppins700 text-[1.5rem] tracking-wider text-center lg:text-start'>Our Mission</p>
                        <p className=' font-Poppins400 text-[#656565] mt-5 md:text-[0.8rem] text-center lg:text-start lg:text-[1rem] tracking-wider'>The goal of irrigation porous systems is to encourage the adoption of sustainable and ecologically friendly irrigation technologies that conserve water and have a low environmental effect. </p>
                    </div>
                    <div className='md:w-1/3 lg:px-[1.8rem] md:px-[1rem] md:py-[1rem] lg:py-[2rem] py-[0.8rem] px-[0.8rem] rounded-lg whiteDropShadow bg-white mt-[2rem] md:mt-0 hover:scale-105 transition duration-[0.5s] xl:h-[22rem] lg:h-[26rem] md:h-[24rem]'>
                        <p className=' font-Poppins700 text-[1.5rem] tracking-wider text-center lg:text-start'>Our Vision</p>
                        <p className=' font-Poppins400 text-[#656565] mt-5 lg:text-[1rem] md:text-[0.8rem] text-center lg:text-start tracking-wider'>As a company, we want to be known as industry leaders and innovators. The goal is to uphold the highest quality and ethical standards while also making the world a better place through our novel products.  We are fully prepared to accelerate development in our products, which are wholly geared to improving irrigation methods. </p>
                    </div>
                    <div className='md:w-1/3 lg:px-[1.8rem] md:px-[1rem] md:py-[1rem] lg:py-[2rem] py-[0.8rem] px-[0.8rem] rounded-lg whiteDropShadow bg-white mt-[2rem] md:mt-0 hover:scale-105 transition duration-[0.5s] xl:h-[22rem] lg:h-[26rem] md:h-[24rem]'>
                        <p className=' font-Poppins700 text-[1.5rem] tracking-wider text-center lg:text-start'>Our Goal</p>
                        <p className=' font-Poppins400 text-[#656565] mt-5 lg:text-[1rem] md:text-[0.8rem] text-center lg:text-start tracking-wider'>Ultimately, the goal of irrigation porous systems is to provide a dependable and efficient irrigation solution that fulfils the demands of farmers, landscapers, and homes while simultaneously addressing rising concerns about water shortage and conservation.</p>
                    </div>

                </div>
                <p data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='text-[#0174BB] font-Poppins500 text-center mt-[4rem]'>VALUES</p>
                <p data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className=' font-Poppins700 text-center text-[2rem] tracking-wider mb-[3rem]'>OUR CORE VALUES</p>
                <div data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos="fade-up" className='mt-[8rem]'>
                          <div className='md:flex lg:justify-between  justify-center md:space-x-8  xl:px-[6rem]'>
                                    <div className='md:w-1/3 h-[15rem] md:scale-[85%] lg:scale-100  shadow-lg  lg:block rounded-[24px] bg-white px-[1rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s] mb-[3rem]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Customers</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Understanding the ever-changing needs of people, contributing to success.</p>
                                    </div>
                                    <div className='md:w-1/3 h-[15rem] md:scale-[85%] lg:scale-100 shadow-lg rounded-[24px] bg-white px-[1rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s] mb-[3rem]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Focus</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>We focus on improving quality and efficiency, providing farmers with new technology, and creating jobs.</p>
                                    </div>
                                    <div className='md:w-1/3 h-[15rem] md:scale-[85%] lg:scale-100 shadow-lg  md:block rounded-[24px] bg-[#0174BB] px-[2rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8 '>
                                            <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                                                <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-white tracking-wider text-[1.1rem] text-center'>Trust</p>
                                        <p className='font-Poppins400 text-white tracking-wider text-[0.85rem] text-center mt-4'>Transparency in all our dealings with customers, suppliers, co-employees.</p>
                                    </div>
                                </div>
                    {/* <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        modules={[Pagination, Navigation]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        navigation={false}
                        onSlideChange={handleSlideChange}
                    // className="mySwiper"
                    >
                        <div className=' '>

                            <SwiperSlide className='  pt-[2.5rem] pb-[0.5rem] px-[0.5rem]'>
                                <div className='flex lg:justify-between  justify-center md:space-x-8 '>
                                    <div className='xl:w-1/4 shadow-lg hidden lg:block rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Customers</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Understanding the ever-changing needs of people, contributing to success.</p>
                                    </div>
                                    <div className='xl:w-1/4 shadow-lg rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Focus</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>We focus on improving quality and efficiency, providing farmers with new technology, and creating jobs.</p>
                                    </div>
                                    <div className='xl:w-1/4 shadow-lg hidden md:block rounded-[24px] bg-[#0174BB] px-[2rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8 '>
                                            <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                                                <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-white tracking-wider text-[1.1rem] text-center'>Trust</p>
                                        <p className='font-Poppins400 text-white tracking-wider text-[0.85rem] text-center mt-4'>Transparency in all our dealings with customers, suppliers, co-employees.</p>
                                    </div>
                                    <div className='xl:w-1/4 shadow-lg hidden xl:block rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=' pt-[2.5rem]  '>
                                <div className='flex lg:justify-between  justify-center md:space-x-8 '>
                                    <div className='shadow-lg hidden xl:block rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                    <div className='shadow-lg rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                    <div className='shadow-lg hidden md:block rounded-[24px] bg-[#0174BB] px-[2rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8 '>
                                            <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                                                <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-white tracking-wider text-[1.1rem] text-center'>Recycle</p>
                                        <p className='font-Poppins400 text-white tracking-wider text-[0.85rem] text-center mt-4'>Irrigation porous pipes are<br /> made from recycled<br /> rubber and plastic, As a<br /> result, it is <br /> environmentally friendly.</p>
                                    </div>
                                    <div className='shadow-lg hidden lg:block rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=' pt-[2.5rem] '>
                                <div className='flex lg:justify-between  justify-center md:space-x-8 '>
                                    <div className='shadow-lg hidden xl:block rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                    <div className='shadow-lg rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                    <div className='shadow-lg hidden md:block rounded-[24px] bg-[#0174BB] px-[2rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8 '>
                                            <p className=' p-[1rem] shadowBack rounded-full  bg-[#0174BB]'>
                                                <Image src={'/homeMasked2.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-white tracking-wider text-[1.1rem] text-center'>Recycle</p>
                                        <p className='font-Poppins400 text-white tracking-wider text-[0.85rem] text-center mt-4'>Irrigation porous pipes are<br /> made from recycled<br /> rubber and plastic, As a<br /> result, it is <br /> environmentally friendly.</p>
                                    </div>
                                    <div className='shadow-lg hidden lg:block rounded-[24px] bg-white px-[2rem] pb-[1.5rem] hover:scale-105 transition duration-[0.5s]'>
                                        <div className='flex justify-center items-center -translate-y-8'>
                                            <p className=' p-[1rem] shadowBack rounded-full bg-white '>
                                                <Image src={'/homeMasked1.svg'} width={40} height={40} priority={true} alt="" />
                                            </p>
                                        </div>
                                        <p className='font-Poppins500 text-gray-800 tracking-wider text-[1.1rem] text-center'>Water conservation</p>
                                        <p className='font-Poppins400 text-gray-700 tracking-wider text-[0.85rem] text-center mt-4'>Porous pipes aid in water<br /> conservation by lowering<br /> evaporation and runoff.<br /> Water gets evaporated or<br /> taken away by drainage<br /> when water is delivered<br /> directly to the soil.</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </div>

                    </Swiper>
                    <div className=" z-20 flex justify-center items-center mt-8 space-x-3">
                        {Array.from(Array(3).keys()).map((index) => (
                            <div
                                key={index}
                                className={`w-4 h-4 flex justify-center items-center border border-black rounded-full p-[0.15rem] `}
                                onClick={() => {
                                    if (swiperRef.current) {
                                        swiperRef.current.slideTo(index);
                                    }
                                }}
                            >
                                <p className={`w-[100%] h-[100%] rounded-full ${activeIndex === index ? "bg-blue-600" : "bg-gray-400"
                                    }`}></p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>

            {/* FOURTH SECTION */}
            <div className=' xl:px-[10rem] xl:mt-[8rem] md:mt-[5rem] md:px-[3rem] px-[1rem] mt-[4rem]'>
                <div className='md:flex items-start justify-between'>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className=''>
                        <p className=' font-Poppins500 text-[#0174BB] text-[1rem] text-center md:text-start'>WHY CHOOSE US</p>
                        <p className='font-Poppins700 hidden xl:block text-[2.2rem] leading-[2.5rem] mt-2'>Why Porous?</p>
                        <p className='font-Poppins700 xl:hidden block lg:leading-[2.5rem] text-[1.5rem]  md:text-[2.2rem] xl:leading-[2.5rem] mt-2 text-center md:text-start'>Why Porous?</p>
                    </div>
                    <div data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up" className='md:w-3/4 mt-[1rem] md:mt-0'>
                        <p className='text-[#656565] font-Poppins400 md:leading-[1.6rem] lg:leading-[2rem] lg:text-[0.9rem]  md:text-[0.8rem] xl:text-[1rem] text-[0.8rem] text-center md:text-start leading-[1.5rem] tracking-wider'>
                        Porous irrigation pipe has been developed in accordance with this invention having extremely consistent porosities along the length of the pipes. Irrigation systems containing fewer pressure regulators can be deployed. Crop yields will increase since a higher percentage of plants will receive a. uniform amount of water. The invention of the porous pipes will have particular application to all subsurface crops.This method of irrigation helps to reduce water waste and ensures that plants receive the right amount of water, promoting healthy growth and higher yields. Additionally,porous irrigation can improve soil quality, as the slow release of water helps to distribute nutrients more evenly throughout the soil, encouraging deep root growth and reducing soil erosion.
                        </p>

                    </div>
                </div>

                {/* <div className='md:flex  items-start mt-[2rem] justify-between xl:space-x-8 2xl:space-x-0'>
                    <div data-aos-duration="1000"
                        data-aos-easing="ease-in-out" data-aos="fade-up" className=' md:w-1/2'>

                        <p className='relative w-[100%] h-[350px] md:w-[320px] md:h-[400px] lg:w-[450px] lg:h-[400px] xl:w-[552px] xl:h-[460px] z-20 hover:scale-105 transition duration-[0.5s]'>
                            <Image src={'/aboutFocus.svg'} fill style={{ objectFit: 'cover' }} priority={true} alt="" />
                        </p>

                    </div>
                    <div className=' md:w-1/2 mt-[2rem] md:mt-0 w-[100%] md:h-[400px] lg:h-[400px] xl:h-[460px]  flex flex-col justify-between'>
                        <div data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos="fade-up" className='border border-[#0174BB] rounded-[24px] md:py-[0.8rem] md:px-[1rem] xl:py-[0.8rem] xl:px-[0.8rem] 2xl:py-[1.3rem] 2xl:px-[2rem] space-y-3 md:space-y-4 px-[0.8rem] py-[0.8rem] xl:space-y-3 2xl:space-y-4 lg:px-[0.8rem] lg:py-[0.8rem] lg:space-y-1'>
                            <div className='flex justify-start items-center '>
                                <p className=' font-Poppins600 text-[1.2rem] mr-3 '>01</p>
                                <p className='h-[1.4rem] w-[0.25rem] bg-black mr-6'></p>
                                <p className=' font-Poppins500 text-[1.2rem] '>Headline 1</p>
                            </div>
                            <p className='text-[#656565] text-center md:text-start font-Poppins400 lg:text-[0.8rem] xl:text-[0.9rem] md:text-[0.7rem] '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos="fade-up" className='border border-[#0174BB] rounded-[24px] md:py-[0.8rem] md:px-[1rem] 2xl:py-[1.3rem] 2xl:px-[2rem] space-y-3 md:space-y-4 px-[0.8rem] py-[0.8rem] mt-[1.5rem] md:mt-0 xl:py-[0.8rem] xl:px-[0.8rem] xl:space-y-3 2xl:space-y-4 lg:px-[0.8rem] lg:py-[0.8rem]'>
                            <div className='flex justify-start items-center'>
                                <p className=' font-Poppins600 text-[1.2rem] mr-3 '>01</p>
                                <p className='h-[1.4rem] w-[0.25rem] bg-black mr-6'></p>
                                <p className=' font-Poppins500 text-[1.2rem] '>Headline 1</p>
                            </div>
                            <p className='text-[#656565] text-center md:text-start font-Poppins400 lg:text-[0.8rem] xl:text-[0.9rem] md:text-[0.7rem] '>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos="fade-up" className='border border-[#0174BB] rounded-[24px] md:py-[0.8rem] md:px-[1rem] 2xl:py-[1.3rem] 2xl:px-[2rem] space-y-3 md:space-y-4 px-[0.8rem] py-[0.8rem] mt-[1.5rem] md:mt-0 xl:py-[0.8rem] xl:px-[0.8rem] xl:space-y-3 2xl:space-y-4 lg:px-[0.8rem] lg:py-[0.8rem]'>
                            <div className='flex justify-start items-center'>
                                <p className=' font-Poppins600 text-[1.2rem] mr-3 '>01</p>
                                <p className='h-[1.4rem] w-[0.25rem] bg-black mr-6'></p>
                                <p className=' font-Poppins500 text-[1.2rem] '>Headline 1</p>
                            </div>
                            <p className='text-[#656565] text-center md:text-start font-Poppins400 lg:text-[0.8rem] xl:text-[0.9rem] md:text-[0.7rem]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do, eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div> */}

            </div>

            {/* TESTIMONIAL */}
            <div data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos="fade-up" className='w-[100%] lg:px-[4rem]  xl:px-[10rem]'>
                <div className='md:h-[543px] pb-[3rem] md:pb-0 w-[100%] mt-[8rem] pt-[3rem] md:pt-0  md:mt-[10rem] lg:mt-[12rem]  md:flex justify-start items-center md:space-x-8 bg-[#E6F1F8]'>
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
                        <p className='md:w-[30%] h-1 bg-[#0174BB] lg:mt-6 mt-[3.5rem]  md:mt-[4rem]'></p>
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

            </div>


        </div>
    )
}

export default about
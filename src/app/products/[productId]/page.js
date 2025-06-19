"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BsPlay, BsArrowRight, BsArrowLeft } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import {BiSearch } from 'react-icons/bi'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageMagnifier from '@/components/ImageMagnifier'
import axios from 'axios'
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'



function page({ params }) {

    const [productDetail, setProductDetail] = useState({})
    const [currentImage,setCurrentImage]=useState('');
    const [selectedIndex,setSelectedIndex]=useState('');

    const [selectedColor,setSelectedColor]=useState('Black')
    const [loading,setLoading]=useState(false)


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

    const imageUrls = ['/12mm.jpg', '/12mm.jpg', '/12mm.jpg', '/12mm.jpg', '/12mm.jpg']; 

    const {productId}=params;

    const productArray=[
        {
            id:'flat_inline_pipe_(12mm)',
            imageArray:['/pipes/12mm/main.jpg','/pipes/12mm/1.jpg','/pipes/12mm/2.jpg','/pipes/12mm/3.jpg','/pipes/12mm/1.jpg'],
            description:'Rubber 200Meter 12 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'12mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'flat_inline_pipe_(14mm)',
            imageArray:['/pipes/14mm/main.jpg','/pipes/14mm/1.jpg','/pipes/14mm/2.jpg','/pipes/14mm/3.jpg','/pipes/14mm/4.jpg'],
            description:'Rubber 200Meter 14 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'14mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'flat_inline_pipe_(16mm)',
            imageArray:['/pipes/16mm/main.jpg','/pipes/16mm/1.jpg','/pipes/16mm/2.jpg','/pipes/16mm/3.jpg','/pipes/16mm/1.jpg'],
            description:'Rubber 200Meter 16 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'16mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'flat_inline_pipe_(16mm_epdm)',
            imageArray:['/pipes/16mmEpd/main.jpg','/pipes/16mmEpd/1.jpg','/pipes/16mmEpd/2.jpg','/pipes/16mmEpd/3.jpg','/pipes/16mmEpd/4.jpg'],
            description:'Rubber 200Meter 16 Mm EPDM Pipe, Round',
            length:'200m',
            diameter:'16mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'flat_inline_pipe_(19mm)',
            imageArray:['/pipes/19mm/main.jpg','/pipes/19mm/1.jpg','/pipes/19mm/2.jpg','/pipes/19mm/3.jpg','/pipes/19mm/1.jpg'],
            description:'Rubber 200Meter 19 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'19mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'flat_inline_pipe_(22mm)',
            imageArray:['/pipes/22mm/main.jpg','/pipes/22mm/1.jpg','/pipes/22mm/2.jpg','/pipes/22mm/3.jpg','/pipes/22mm/1.jpg'],
            description:'Rubber 200Meter 22 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'22mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'areation_tube_blue(25mm)',
            imageArray:['/pipes/22mm/main.jpg','/pipes/22mm/1.jpg','/pipes/22mm/2.jpg','/pipes/22mm/3.jpg','/pipes/22mm/1.jpg'],
            description:'Rubber 200Meter 25 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'25mm',
            material:'Rubber',
            shape:'Round'
        },
        {
            id:'areation_tube_green(25mm)',
            imageArray:['/pipes/16mm/main.jpg','/pipes/16mm/1.jpg','/pipes/16mm/2.jpg','/pipes/22mm/3.jpg','/pipes/16mm/1.jpg'],
            description:'Rubber 200Meter 25 Mm Porous Pipe, Round',
            length:'200m',
            diameter:'25mm',
            material:'Rubber',
            shape:'Round'
        }
    ]

    useEffect(()=>{
        if(productId){
        const filterProduct=productArray.find((product)=>product.id.toString()===productId.toString())
        console.log('filterProduct',filterProduct)
        console.log('filterProduct1',filterProduct.imageArray)
        if(filterProduct && filterProduct.imageArray){
             setProductDetail(filterProduct)
             setCurrentImage(filterProduct.imageArray[0])
             setSelectedIndex(0)
         }
        }
    },[productId])


    const handleInquiryHandler=async()=>{

        setLoading(true)
        let location=window.location.href
        const payload={
            link:location,
            name:productDetail.description,
        }

        const {data}=await axios.post('https://porous-live.onrender.com/inquiry_email',payload)
        if(data.message==='Email sent successfully!'){
            setLoading(false)
           toast.success('Email sent successfully!!!');
        }else{
            setLoading(false)
            toast.error(`${data.message}`)
        }
    }


    return (
        <div>
         
         {/* IMAGE AND DESCRIPTION */}
         <div className='w-[100%]  grid grid-cols-12 xl:px-[6rem] mt-8'>

        {/* LEFT SECTION */}
        <div className='lg:col-span-6 col-span-8 md:col-span-12 flex flex-col md:flex-row justify-center items-center px-[1.5rem] md:px-[8rem] lg:px-0 md:flex md:justify-start space-x-4'>
    {/* IMAGES LIST */}
     <div className=' md:block flex justify-start items-center  md:px-0'>
        {productDetail && productDetail.imageArray && productDetail.imageArray.map((imageUrl, index) => (
         <div key={index} onClick={()=>{
            setCurrentImage(imageUrl)
            setSelectedIndex(index)
          }} className={`${selectedIndex===index?' p-[0.3rem] border-2 border-blue-600 transition duration-[0.3s]  relative ':'relative   p-[0.3rem] border-0 transition duration-[0.3s]'} ${index===0?'mt-0':'mt-[0.3rem]'}`}>
             <p   className= 'w-[5rem] h-[5rem] relative '>
            <Image src={imageUrl} fill priority={true} alt="" style={{ objectFit: 'cover' }} />
          </p>
         </div>
        ))}
      </div>

    
     <div style={{zIndex:10}} className="h-[100%] relative ">
     <ImageMagnifier src={currentImage?currentImage : '/12mm.jpg'} className="h-[100%] relative "/>
     </div>
    
        </div>


        {/* RIGHT SECTION */}
        <div className='lg:col-span-6 scale-[90%] col-span-12 md:px-[4rem] md:mt-[2rem] mt-[2.5rem] lg:mt-0 lg:px-0 xl-scale-1 lg:scale-[85%]'>
 <p className=' font-Poppins600 tracking-wider text-[1.6rem] pb-[1rem] border-b-2 border-zinc-400   w-[98%]'>
    {productDetail && productDetail.description}
 </p>

 <div className='mt-[1rem] space-y-2'>

<div className='flex justify-start items-center'>
    <p className=' font-Poppins400 text-zinc-700 w-[20rem] text-[1.2rem]'>Length of Pipe</p>
    <p className=' font-Poppins700 text-[1.2rem]'>
        :{productDetail && productDetail.length}
    </p>
</div>

<div className=' flex justify-start items-center'>
    <p className=' font-Poppins400 text-zinc-700 w-[20rem] text-[1.2rem]'>Size/Diameter</p>
    <p className=' font-Poppins700 text-[1.2rem]'>
        :{productDetail && productDetail.diameter}
    </p>
</div>

<div className=' flex justify-start items-center'>
    <p className=' font-Poppins400 text-zinc-700 w-[20rem] text-[1.2rem]'>Material</p>
    <p className=' font-Poppins700 text-[1.2rem]'>
        :{productDetail && productDetail.material}
    </p>
</div>

<div className=' flex justify-start items-center'>
    <p className=' font-Poppins400 text-zinc-700 w-[20rem] text-[1.2rem]'>Shape</p>
    <p className=' font-Poppins700 text-[1.2rem]'>
        :{productDetail && productDetail.shape}
    </p>
</div>
 </div>

 <div className=' flex justify-start items-center mt-2'>
    <p className=' font-Poppins400 text-zinc-700  text-[1.2rem]'>Color :</p>
    <p className=' font-Poppins700 text-[1.2rem] ml-2'>{selectedColor}</p>
</div>

{/* <div className='flex justify-start items-center space-x-3 mt-6'>

    <div onClick={()=>setSelectedColor('Black')} className={selectedColor==='Black'?'p-[0.1rem] rounded-full border-2 border-black':'p-[0.1rem] rounded-full border-2 border-white transition duration-[0.5s]'}>
        <p className='w-4 h-4 rounded-full bg-black'></p>
    </div>

    <div onClick={()=>setSelectedColor('Pink')} className={selectedColor==='Pink'?'p-[0.1rem] rounded-full border-2 border-pink-600':'p-[0.1rem] rounded-full border-2 border-white transition duration-[0.5s]'}>
        <p className='w-4 h-4 rounded-full bg-pink-600'></p>
    </div>

    <div onClick={()=>setSelectedColor('Yellow')} className={selectedColor==='Yellow'?'p-[0.1rem] rounded-full border-2 border-yellow-400':'p-[0.1rem] rounded-full border-2 border-white transition duration-[0.5s]'}>
        <p className='w-4 h-4 rounded-full bg-yellow-400'></p>
    </div>

    <div onClick={()=>setSelectedColor('Purple')} className={selectedColor==='Purple'?'p-[0.1rem] rounded-full border-2 border-purple-500':'p-[0.1rem] rounded-full border-2 border-white transition duration-[0.5s]'}>
        <p className='w-4 h-4 rounded-full bg-purple-500'></p>
    </div>

    <div onClick={()=>setSelectedColor('Blue')} className={selectedColor==='Blue'?'p-[0.1rem] rounded-full border-2 border-blue-600':'p-[0.1rem] rounded-full border-2 border-white transition duration-[0.5s]'}>
        <p className='w-4 h-4 rounded-full bg-blue-600'></p>
    </div>
</div> */}

{/* <div className='lg:mt-2 md:mt-[1.5rem]'>
    <p className=' font-Poppins400 text-zinc-700  text-[1.2rem]'>Description</p>
    <p className=' font-Poppins400 text-zinc-500 tracking-widest  text-[1rem] mt-2'>
    There was a reason for her shyness. Everyone assumed it had always been there but she knew better. She knew the exact moment that the shyness began. It had been that fateful moment at the lake. There are just some events that do that to you.
    </p>
</div> */}

<div className='lg:mt-6 md:mt-[2rem] mt-[3rem]'>
<Link href={`/inquiry?product=${productDetail.description}&productId=${productDetail.id}`} className=' bg-blue-600 text-white font-Poppins500 rounded-lg px-8 py-3 tracking-wider'>
    Get Inquiry
</Link>
</div>
        </div>

         </div>

         <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-8 lg:gap-y-6 xl:px-[10rem] mt-[3.5rem] md:mt-[8rem] lg:px-[6rem] md:px-[3rem] px-[1rem] '>
            <p className='lg:col-span-4 col-span-2 md:col-span-3 tracking-widest text-[2rem] font-Poppins700 text-center'>
              Similar Products
            </p>
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
                <Link href={`/products/flat_inline_pipe_(12mm)`} data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos="fade-up"   className='col-span-1 hover:scale-105 transition duration-[0.5s]'>
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
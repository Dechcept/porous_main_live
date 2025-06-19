import React from 'react'

function Loader() {
  return (
    <div className='flex flex-col items-center justify-center'>
            <div class="w-12 h-12 rounded-full animate-spin
        border-4 border-solid border-green-500 border-t-transparent"></div>
        <p className=' font-Poppins700 tracking-widest text-gray-500 text-[0.9rem] animate-pulse duration-300 mt-[2rem]'>Sending Request. . .</p>
        </div>
  )
}

export default Loader
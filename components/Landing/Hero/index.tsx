// import { ModelViewer } from '@/components/model-viewer'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
// import { ModelViewer } from '@/components/model-viewer'

function Hero({}) {
  return (
    <div className='h-auto flex flex-col items-center p-5 mt-10 pb-10 gap-16' id='home'>
        <Image
        src={"/svg/heading.svg"}
        width={100}
        height={100}
        alt='Brop In Tech'
        className='w-[60%] place-content-center absolute -z-10'
        />

        <div className='flex flex-col sm:flex-row justify-center gap-10 items-center pl-10 pr-10 relative top-10 text-center md:text-left'>
              <div className='w-full sm:w-[50%] mt-10 md:mt-0 flex flex-col gap-2 text-center md:tex-left'>

                <p>Orbital Viewport</p>
                <h1 className='text-[var(--color-2)] font-extrabold'>KIGALI CITY</h1>
                <h2>Rwanda</h2>
            </div>
            <div className='w-[50%] absolute sm:relative -z-10'>
                <Image
                src={"/images/globe.png"}
                width={500}
                height={500}
                alt={"globe"}
                className="w-full"
                />
                {/* <ModelViewer/> */}
            </div>
              <div className='w-full sm:w-[50%] flex flex-col gap-5 items-center sm:items-start justify-start'>
                <Image
                src={"/svg/customers.svg"}
                width={200}
                height={200}
                alt='satisfied customers'
                />
                  <p>Transform your vision with Brop Co. We deliver innovative software and web solutions to help your business thrive in the digital world.</p>
                <button className='btn btn--secondary'>Contact Us</button>

            </div>
        </div>

        <button className='relative  btn btn--outline flex items-center gap-5 animate-bounce mt-5'>
            <ArrowDown/>
            Scroll to continue
        </button>
    </div>
  )
}

export default Hero
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

        <div className='flex justify-center gap-10 items-center pl-10 pr-10 relative top-10'>
            <div className='w-[50%] text-left flex flex-col gap-2'>

                <p>Orbital Viewport</p>
                <h1 className='text-[var(--color-2)] font-extrabold'>KIGALI CITY</h1>
                <h2>Rwanda</h2>
            </div>
            <div className='w-[50%] '>
                <Image
                src={"/images/globe.png"}
                width={500}
                height={500}
                alt={"globe"}
                className="w-full"
                />
                {/* <ModelViewer/> */}
            </div>
            <div className='w-[50%] flex flex-col gap-5 items-start justify-start'>
                <Image
                src={"/svg/customers.svg"}
                width={200}
                height={200}
                alt='satisfied customers'
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime blanditiis in delectus. Natus mollitia ab harum illum at quis?</p>
                <button className='btn btn--secondary'>Contact Us</button>

            </div>
        </div>

        <button className='relative  btn btn--outline flex items-center gap-5'>
            <ArrowDown/>
            Scroll to continue
        </button>
    </div>
  )
}

export default Hero
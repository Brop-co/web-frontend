'use client'
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';

function WhatWeDo({ }) {

    return (
        <div className='w-full p-5 bg-[var(--color-4)] text-[#171717] h-auto flex items-center justify-evenly'>
           <div className='flex flex-col gap-5 w-[50%] items-start justify-normal'>
                <h1>
                    What We Do
                </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis sed fugit numquam, labore libero perspiciatis eveniet accusamus ducimus doloribus nam minus obcaecati facere amet repudiandae rerum quos vitae? Laborum saepe sunt accusantium sit id optio veniam blanditiis, adipisci quidem exercitationem deserunt architecto officiis, delectus cupiditate quas corrupti a earum. Dolores officiis ullam ipsum odio incidunt, pariatur repudiandae hic ipsa?</p>

                <button className='btn btn--secondary'>
                    Contact Us
                </button>
           </div>

           <div className='w-[40%] flex justify-end'>
                <Carousel className='w-[50%]' useKeyboardArrows showStatus={false} showArrows={false} showIndicators={true} swipeable showThumbs={false} >
                    <div>
                        <Image
                            className='w-[20px]'
                            src={'/svg/logo.svg'}
                            width={100}
                            height={100}
                            alt=''
                        />
                        <p className="">Mobile App Development</p>
                    </div>
                    <div>
                        <Image
                            className='w-[20px]'
                            src={'/images/globe.png'}
                            width={100}
                            height={100}
                            alt=''
                        />
                        <p className="">3D Designing</p>
                    </div>
                    <div>
                        <Image
                            className='w-[20px]'
                            src={'/svg/logo.svg'}
                            width={100}
                            height={100}
                            alt=''
                        />
                        <p className="">Branding & Marketing</p>
                    </div> <div>
                        <Image
                            className='w-[20px]'
                            src={'/svg/logo.svg'}
                            width={100}
                            height={100}
                            alt=''
                        />
                        <p className="">Web App Development</p>
                    </div>
                </Carousel>
           </div>
        </div>
    )
}

export default WhatWeDo
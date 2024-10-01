'use client'
import Image from 'next/image';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'

function WhatWeDo({ }) {

    return (
        <div id='services' className='w-full p-5 bg-[var(--white)] text-[#171717] h-auto flex items-center justify-evenly pl-10 pr-10'>
           <div className='flex flex-col gap-10 w-[50%] items-start justify-normal'>
                <Image
                src={'/svg/whatwedo.svg'}
                width={300}
                height={300}
                alt='What We Do Text'
                />
                <p className=' leading-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis sed fugit numquam, labore libero perspiciatis eveniet accusamus ducimus doloribus nam minus obcaecati facere amet repudiandae rerum quos vitae? Laborum saepe sunt accusantium sit id optio veniam blanditiis, adipisci quidem exercitationem deserunt architecto officiis, delectus cupiditate quas corrupti a earum. Dolores officiis ullam ipsum odio incidunt, pariatur repudiandae hic ipsa?</p>

                <button className='btn btn--secondary'>
                    Contact Us
                </button>
           </div>

            <div className='w-1/2'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="services_swiper flex flex-col h-auto"
                >
                    <SwiperSlide className="swiper-slide h-auto">
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src="/svg/mobile.svg"
                                width={100}
                                height={100}
                                alt="Brop CO, Mobile Development Service"
                                className='w-[50%] mb-4'
                            />
                            <p className="text-center mb-11 text-[1em]">Mobile App Development</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="flex flex-col items-center justify-between">
                            <Image
                                src="/svg/webdev_service.svg"
                                width={100}
                                height={700}
                                alt="Brop CO, Web Development Development Service"
                                className='w-[50%] mb-4'
                            />
                            <p className="text-center mb-11 text-[1em]">Web Development</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src="/svg/branding.svg"
                                width={100}
                                height={100}
                                alt="Brop CO, Branding & Marketing Service"
                                className='w-[50%] mb-4'
                            />
                            <p className="text-center mb-11 text-[1em]">Branding & Marketing</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="flex flex-col items-center justify-center">
                            <Image
                                src="/svg/iot.svg"
                                width={100}
                                height={100}
                                alt="Brop CO, Iot Engineering Service"
                                className='w-[50%] mb-4'
                            />
                            <p className="text-center mb-11 text-[1em]">Iot Engineering</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default WhatWeDo
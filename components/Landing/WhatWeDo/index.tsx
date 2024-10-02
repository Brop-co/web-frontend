'use client'
import Image from 'next/image';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import { services } from '@/utils/constants';

function WhatWeDo({ }) {

    return (
        <div id='services' className='w-full p-5 bg-[var(--white)] text-[#171717] h-auto flex items-center justify-evenly pl-10 pr-10 flex-col md:flex-row'>
           <div className='flex flex-col gap-10 w-[50%] items-center md:items-start justify-normal'>
                <Image
                src={'/svg/whatwedo.svg'}
                width={300}
                height={300}
                alt='What We Do Text'
                />
                <p className=' leading-8 hidden md:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis sed fugit numquam, labore libero perspiciatis eveniet accusamus ducimus doloribus nam minus obcaecati facere amet repudiandae rerum quos vitae? Laborum saepe sunt accusantium sit id optio veniam blanditiis, adipisci quidem exercitationem deserunt architecto officiis, delectus cupiditate quas corrupti a earum. Dolores officiis ullam ipsum odio incidunt, pariatur repudiandae hic ipsa?</p>


                <div className='w-full md:w-1/2 block md:hidden'>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ dynamicBullets: true }}
                        modules={[Pagination]}
                        className="services_swiper flex flex-col h-auto"
                    >
                        {
                            services.map((service, index)=>(
                                <SwiperSlide key={index} className="swiper-slide h-auto">
                                    <div className="flex flex-col items-center justify-center">
                                        <Image
                                            src={service.image}
                                            width={100}
                                            height={100}
                                            alt={service.desc}
                                            className='w-[50%] mb-4'
                                        />
                                        <p className="text-center mb-11 text-[1em]">{service.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <button className='btn btn--secondary'>
                    Contact Us
                </button>
           </div>

            <div className='w-1/2 hidden md:block'>
                <Swiper
                    slidesPerView={1}
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="services_swiper flex flex-col h-auto"
                >
                    {
                        services.map((service, index) => (
                            <SwiperSlide key={index} className="swiper-slide h-auto">
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src={service.image}
                                        width={100}
                                        height={100}
                                        alt={service.desc}
                                        className='w-[50%] mb-4'
                                    />
                                    <p className="text-center mb-11 text-[1em]">{service.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
 
        </div>
    )
}

export default WhatWeDo
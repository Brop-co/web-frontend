'use client'

import { team } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'


function Team({ }) {
    return (
        <div
            id='our-brand'
            className='w-full p-10 pl-0 pr-0 bg-transparent text-[var(--white)] h-auto flex flex-col items-center justify-center'
        >
            <div>
                <Image
                    src="/svg/meet_experts.svg"
                    width={300}
                    height={300}
                    alt='Brop Inc, Meets experts from Brop'
                    className=''
                />

            </div>
            <div className='w-full mt-10'>
                <Swiper
                    slidesPerView={3}
                    modules={[Pagination]}
                    pagination={{ dynamicBullets: false }}
                    className='flex gap-5 w-full'
                >
                    {
                        team.map((member, index) => (
                            <SwiperSlide key={index} className='swiper-slide w-full bg-[#070728] p-5 ml-2 rounded-xl mb-10'>
                                <div className='flex flex-col items-start justify-start gap-5'>
                                    <Image
                                        src={member.image}
                                        width={400}
                                        height={200}
                                        alt={`Brop Inc, Brop's ${member.name}, ${member.role}`}
                                        className=''
                                    />

                                    <div className="flex flex-col gap-2">
                                        <h1 className="uppercase font-extrabold text-[2em]">
                                            {member.name}
                                        </h1>

                                        <h3 className='capitalize text-[1.2em]'>
                                            {member.role}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Team
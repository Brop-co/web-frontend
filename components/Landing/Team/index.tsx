'use client'

import { team } from '@/utils/constants'
import Image from 'next/image'
import React, { } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'


function Team({ }) {
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    const getScreenWidth = () => {
        setScreenWidth(window.innerWidth); 
    }

    React.useEffect(() => {
        window.addEventListener('resize', getScreenWidth);

        return () => {
            window.removeEventListener('resize', getScreenWidth);
        }
    }, []);

    React.useEffect(()=>{
        console.log(screenWidth)
    },[screenWidth])
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
                    slidesPerView={screenWidth > 1028 ? 3 : screenWidth > 600 ? 2 : 1 }
                    modules={[Pagination]}
                    pagination={{ dynamicBullets: false }}
                    className='flex gap-5 w-full'
                >
                    {
                        team.map((member, index) => (
                            <SwiperSlide key={index} className='swiper-slide w-full bg-[#070728] p-5 ml-2 rounded-xl mb-10 flex '>
                                <div className='flex flex-col items-start justify-between gap-5 w-full'>
                                    <Image
                                        src={member.image}
                                        width={400}
                                        height={200}
                                        alt={`Brop Inc, Brop's ${member.name}, ${member.role}`}
                                        className='w-full'
                                    />

                                    <div className="flex flex-col gap-2 w-full">
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
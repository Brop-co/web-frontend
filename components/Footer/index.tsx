import { landingHeaderListItems, socials } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Footer({ }) {
    return (
      <div className="flex flex-col mt-12 ">
            <div
                className='w-full p-2 flex flex-col md:flex-row items-start justify-evenly'
            >
                <div>
                    <Image
                        src="/images/logo_full.png"
                        width={100}
                        height={100}
                        alt='Brop Inc, Brop logo'
                    />

                    <h1 className='mt-5 mb-5 uppercase font-extrabold underline text-[1.3rem]'>
                        bropcorw@gmail.com
                    </h1>
                </div>

                <div className='flex gap-28 w-full md:w-[45%] md:justify-evenly justify-start text-left'>
                    <div className='flex flex-col gap-2'>
                        {
                            socials.map((social, index) => (
                                <a key={index} href={social.link}
                                    className='font-bold text-[grey] text-[1.1rem] mb-4'
                                    target='_blank' rel='noreferrer'>
                                    {social.name}
                                </a>
                            ))
                        }
                    </div>
                    <div className='flex flex-col gap-2'>

                        {
                            landingHeaderListItems.map((social, index) => (
                                <Link key={index} href={social.link}
                                    className='font-bold text-[grey] text-[1.1rem] mb-4'
                                    >
                                    {social.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>

            </div>
                <hr className='w-full h-[10px]' />

                <div className="grid grid-cols-2 md:flex items-center justify-between p-5 text-[1.1rem]">
                    <h1 className='font-bold text-[1.3rem] text-[grey]'>
                        Brop Team
                    </h1>
                    <div className='hidden md:flex md:flex-row flex-col items-center gap-3'>
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                    </div>
                   <p>&copy; {new Date().getFullYear()}</p>
                </div>
      </div>
    )
}

export default Footer
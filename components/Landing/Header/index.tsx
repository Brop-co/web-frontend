'use client'
import { landingHeaderListItems } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header({ }) {

  React.useEffect(() => {
    const header = document.querySelector(".page-header");
    const toggleClass = "is-sticky";
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 150) {
        header?.classList.add(toggleClass);
      } else {
        header?.classList.remove(toggleClass);
      }
    });
  }, [])
  return (
    <div className='page-header w-full flex justify-between items-center p-5 pl-10 pr-10 sticky top-0 bg-transparent z-50'>
      <div className="flex items-center justify-between w-1/2">
        <div className='hidden lg:flex gap-8 items-center'>
          {
            landingHeaderListItems.map((item, index) => (
              <Link key={index} href={item.link} className=' cursor-pointer hover:text-[var(--color-4)] text-[1rem] md:text-[0.9rem]'>
                {item.name}
              </Link>
            ))
          }
        </div>
        <Image
          src={"/svg/logo.svg"}
          width={50}
          height={50}
          alt='Brop Logo'
        />
      </div>


      <div>
        <button className='btn btn--primary'>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Header
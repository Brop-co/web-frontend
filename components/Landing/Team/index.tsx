"use client";

import { team } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Team({}) {
  const [screenWidth, setScreenWidth] = React.useState<number | null>(null);

  React.useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  return (
    <div
      id="our-brand"
      className="w-full p-10 pl-0 pr-0 bg-transparent text-[var(--white)] h-auto flex flex-col items-center justify-center"
    >
      <div>
        <Image
          src="/svg/meet_experts.svg"
          width={300}
          height={300}
          alt="Brop Inc, Meets experts from Brop"
          className=""
        />
      </div>
      <div className="w-full mt-10">
        <Swiper
          slidesPerView={
            screenWidth && screenWidth > 1000
              ? 3
              : screenWidth && screenWidth > 600
              ? 2
              : screenWidth === null
              ? 3
              : 1
          }
          modules={[Pagination]}
          pagination={{ dynamicBullets: false }}
          className="flex gap-5 w-full"
        >
          {team.map((member, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide w-full bg-[#070728] p-5 ml-2 rounded-xl mb-10 flex "
            >
              <div className="flex flex-col items-center justify-between gap-5 w-full cursor-pointer group">
                <Image
                  src={member.image}
                  width={200}
                  height={200}
                  alt={`Brop Inc, Brop's ${member.name}, ${member.role}`}
                  className="group-hover:scale-125 transition-all duration-500"
                />

                <div className="flex flex-col gap-2 w-full items-center">
                  <h1 className="uppercase font-extrabold text-[2em] text-[grey] group-hover:text-white duration-200 transition-all">
                    {member.name}
                  </h1>
                  <div className="w-full left-0 group bottom-0 p-5 relative font-extrabold uppercase">
                    <h1 className="text-[2.2em] items-center justify-start gap-3 flex transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0">
                      {member.name}
                    </h1>
                    <h1 className="text-[2.2em] items-center justify-start gap-3 flex transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible absolute top-0">
                      {member.name}
                    </h1>
                  </div>

                  <h3 className="capitalize text-[1.2em] text-[grey]">
                    {member.role}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Team;

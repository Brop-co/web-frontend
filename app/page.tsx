import Header from "@/components/Landing/Header";
import Hero from "@/components/Landing/Hero";
import OurProjects from "@/components/Landing/Projects";
import WhatWeDo from "@/components/Landing/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="vector--bg">
        <Image
          src="/svg/vector.svg"
          width={100}
          height={100}
          alt="vector background"
          className="absolute w-full -z-40"
        />
        <Header />
        <Hero />
      </div>
      <WhatWeDo />
      <OurProjects />
    </>
  );
}

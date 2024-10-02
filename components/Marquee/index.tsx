import React from 'react'


function Marquee({}) {
  return (
      <div className="w-full bg-[var(--color-2)] p-5 overflow-hidden relative group">
          <div className="moving-text whitespace-nowrap">
              <h1 className="uppercase text-[2rem] font-extrabold text-[var(--background)] inline-block animate-moving">
                  let&apos;s start a project &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project &nbsp;
              </h1>
              <h1 className="uppercase text-[2rem] font-extrabold text-[var(--background)] inline-block animate-moving">
                  &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project
              </h1> <h1 className="uppercase text-[2rem] font-extrabold text-[var(--background)] inline-block animate-moving">
                  &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project
              </h1> <h1 className="uppercase text-[2rem] font-extrabold text-[var(--background)] inline-block animate-moving">
                  &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project
              </h1> <h1 className="uppercase text-[2rem] font-extrabold text-[var(--background)] inline-block animate-moving">
                  &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project
              </h1> <h1 className="uppercase text-[2rem] font-extrabold text-[var(--background)] inline-block animate-moving">
                  &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project &nbsp; let&apos;s start a project
              </h1>
          </div>

          <div className="absolute w-full top-0 left-0 h-full z-50 flex items-center justify-center backdrop-blur-sm bg-transparent opacity-0 duration-200 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 transition-all ease-in-out">
              <button className="btn btn--primary">
                  Write to Us
              </button>
          </div>
      </div>

  )
}

export default Marquee
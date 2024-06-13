import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import VerticalTabs from './VerticalTabs'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-4 pt-20 mt-10 md:mt-0 pb-30 md:px-30 bg-[#1F2937]">
      <main className="w-full bg-slate-800 flex justify-center items-center">
        <div className='w-full flex flex-col gap-2'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-widest uppercase'>Projects</h6>
            <h1 className='text-white text-3xl md:text-[36px] font-bold'>Latest Works</h1>
            {/* <div className='flex flex-col md:flex-row justify-center gap-15 items-center mt-5'>

            </div> */}
            <VerticalTabs/>
        </div>
      </main>
    </div>
  )
}

export default Projects
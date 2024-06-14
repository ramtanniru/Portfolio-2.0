import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import VerticalTabs from './VerticalTabs'
import HorizontalTabs from './HorizontalTabs'

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start px-4 pt-20 mt-10 md:mt-0 pb-20 md:px-30 bg-[#1F2937]">
      <main className="w-full flex justify-start items-start">
        <div className='w-full flex flex-col gap-2'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-widest uppercase'>Projects</h6>
            <h1 className='text-white text-3xl md:text-[36px] font-bold'>Latest Works</h1>
            <div className='mt-5 hidden md:block'>
                <VerticalTabs/>
            </div>
            <div className='mt-5 flex md:hidden'>
                <HorizontalTabs/>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Projects
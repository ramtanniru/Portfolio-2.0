import React from 'react'
import { certifications, codingPlatforms } from '@/utils/data'
import Card3 from './Card3'
import Card4 from './Card4'

const Coding = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 mt-10 md:mt-0 pb-30 md:px-30">
      <main className="w-full flex flex-col justify-between items-center gap-25">
        <div className='w-full flex flex-col gap-2'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-widest uppercase'>Coding</h6>
            <h1 className='text-[#1F2937] dark:text-white text-3xl md:text-[36px] font-bold'>Programming Platforms</h1>
            <div className='flex flex-col md:flex-row justify-center gap-15 items-center mt-5'>
                {
                    codingPlatforms.map((obj)=>(
                        <Card3 name={obj.name} src={obj.src} link={obj.link} key={obj}/>
                    ))
                }
            </div>
        </div>
        <div className='w-full flex flex-col gap-2'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-widest uppercase'>Industrial</h6>
            <h1 className='text-[#1F2937] dark:text-white text-3xl md:text-[36px] font-bold'>Certifications</h1>
            <div className='w-full flex flex-col md:flex-row justify-between gap-15 items-center mt-5'>
                {
                    certifications.map((obj)=>(
                        <Card4 name={obj.name} src={obj.src} link={obj.link} key={obj}/>
                    ))
                }
            </div>
        </div>
      </main>
    </div>
  )
}

export default Coding
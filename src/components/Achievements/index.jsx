import { awards } from '@/utils/data'
import React from 'react'
import Card6 from './Card6'

const Achievements = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-10 mt-10 md:mt-0 pb-10 md:px-30">
      <main className="w-full flex flex-col justify-between items-center gap-25">
      <div className='w-full flex flex-col gap-2'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-widest uppercase'>Awards and</h6>
            <h1 className='text-[#1F2937] dark:text-white text-3xl md:text-[36px] font-bold'>Achievements</h1>
            <div className='flex flex-col justify-center gap-5 items-center mt-5'>
                {awards.map((key=>(
                        <Card6 name={key.name} prize={key.prize} src={key.src} clubIcon={key.clubIcon} date={key.date} />
                )))}
            </div>
        </div>
      </main>
    </div>
  )
}

export default Achievements
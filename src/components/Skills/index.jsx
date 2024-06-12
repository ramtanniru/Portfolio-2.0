import React from 'react'
import { services, skills } from '../../../data'
import Card2 from './Card2'

const Skills = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <main className="flex flex-col gap-15 items-center text-start my-0 mx-7 md:mb-50 md:mx-30">
        <div className='flex flex-col gap-1'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-[1.68px]'>SKILLS</h6>
            <h1 className='text-[#1F2937] dark:text-white text-3xl md:text-[36px] font-bold'>What I Know</h1>
            <ul className='flex flex-col md:flex-row columns-3 gap-15 mt-2'>
                {Object.keys(skills).map(key=>(
                    <li className='flex flex-col w-full md:w-1/3 gap-3 bg-white dark:bg-black shadow-solid-5 dark:shadow-2xl px-4 py-5 rounded-lg mt-3' key={key}>
                        <div className='font-semibold text-[#1F2937] dark:text-white'>{key}</div>
                        <div className='flex flex-wrap gap-5'>
                            {skills[key].map(i=>(
                                <div className='p-2 text-[#1F2937] dark:text-[#ffffff] bg-[#FFE8C8] dark:bg-[#14131a] rounded-md'>
                                    {i}
                                </div>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <div className='flex flex-col'>
            <h6 className='text-[#F37B22] dark:text-white text-[14px] tracking-[1.68px]'>SERVICES</h6>
            <h1 className='text-[#1F2937] dark:text-white text-3xl md:text-[36px] font-bold'>How I Can Help You With</h1>
            <ul className='flex flex-col md:flex-row gap-10 mt-3'>
                {/* {services.map(key=>(
                    <li className='flex flex-col w-full md:w-1/4 gap-3 bg-white dark:bg-black shadow-solid-5 dark:shadow-2xl px-4 py-5 rounded-lg mt-3' key={key}>
                        <div className='font-semibold text-[#1F2937] dark:text-white'>{key.name}</div>
                        <div className='flex flex-wrap gap-5'>
                            <div className='text-[#1F2937] dark:text-[#ffffff] rounded-md'>
                              {key.description}
                            </div>
                        </div>
                    </li>
                ))} */}
                {
                    services.map(key=>(
                        <Card2 services={key}/>
                    ))
                }
            </ul>
        </div>
      </main>
    </div>
  )
}

export default Skills
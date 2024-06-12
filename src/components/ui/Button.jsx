import React from 'react'
import Image from 'next/image';

const Button = ({text}) => {
  return (
    <button className="flex flex-row items-center justify-center gap-3 p-4 bg-black dark:bg-[#E5E7EB;] text-white dark:text-[#1F2937] rounded-md">
        <p>{text}</p>
        <div className='relative aspect-auto'>
            <Image src='/images/icons/arrow-light.svg' height={16} width={16} alt='arrow' className='dark:hidden'/>
            <Image src='/images/icons/arrow-dark.svg' height={16} width={16} alt='arrow' className='dark:block hidden'/>
        </div>
    </button>
  )
}

export default Button
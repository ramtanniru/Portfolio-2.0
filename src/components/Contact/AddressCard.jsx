import Image from 'next/image'
import React from 'react'

const AddressCard = ({type,src,data,link}) => {
  return (
    <a className='w-full h-[200px] border border-orange-300 hover:bg-[#F3D1BF] flex flex-col gap-5 p-10' href={link}>
        <div className='flex flex-row justify-start gap-10 items-center'>
            <div className='bg-orange-500 rounded-full p-5'>
                <Image src={src} height={24} width={24} alt='phone'/>
            </div>
            <p className='uppercase text-orange-600'>{type}</p>
        </div>
        <p className='text-[#391400]'>{data}</p>
    </a>
  )
}

export default AddressCard
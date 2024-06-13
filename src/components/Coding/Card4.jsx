import React from 'react'
import Image from 'next/image'

const Card4 = ({name,src,link}) => {
    const style = {
        backgroundImage : `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  return (
    <a className="w-full md:w-1/2 animate_top z-40 rounded-md border shadow-solid-3 transition-all overflow-hidden hover:shadow-solid-4"
    href={link}
    >
        <div className='h-[250px] w-full flex items-end justify-start' style={style}>
            <div className='p-2 px-5 bg-white w-full'>
                <p className='font-bold text-xl md:text-2xl text-black'>{name}</p>
            </div>
        </div>
    </a>
  )
}

export default Card4
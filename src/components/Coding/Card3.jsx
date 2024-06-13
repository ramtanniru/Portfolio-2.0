import React from 'react'
import Image from 'next/image'

const Card3 = ({name,src,link}) => {
    const style = {
        backgroundImage : `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
  return (
    <a className="w-full md:w-1/3 animate_top z-40 rounded-md overflow-hidden border shadow-solid-3 transition-all hover:shadow-solid-4"
    href={link}
    >
        <div className='h-[250px] w-full flex items-end justify-start p-2 px-4' style={style}>
            <p className='font-bold text-xl md:text-2xl text-white'>{name}</p>
        </div>
    </a>
  )
}

export default Card3
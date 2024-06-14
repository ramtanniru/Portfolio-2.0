import React from 'react';
import Image from 'next/image';

const Card6 = ({name,prize,src,clubIcon,date}) => {
    return (
        <div className='w-full flex flex-col justify-between items-center gap-5'>
            <div className='w-full flex flex-wrap gap-5 md:flex-row justify-between items-center'>
                <Image src={src} width={100} height={60} className='rounded-md bg-orange-500 overflow-hidden'/>
                <p className=''>{prize} <span> Winner</span></p>
                <p className=''>{date}</p>
                <p className=''>{name}</p>
                <Image src={clubIcon} width={80} height={80} className='rounded-full bg-orange-500 overflow-hidden'/>
            </div>
            <div className='w-full h-[1px] bg-orange-500'></div>
        </div>
    )
};

export default Card6;
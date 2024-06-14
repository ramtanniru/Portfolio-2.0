import React from 'react'
import Button from '../ui/Button'
import { contact } from '@/utils/data'
import AddressCard from './AddressCard'

const Contact = () => {
    const style = {
        backgroundImage: `url(images/assets/map.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    // const handleSubmit = () => {
        
    // }
  return (
    <div className="min-h-screen flex flex-col gap-20 mb-20 md:mt-10 md:mb-40 items-center justify-center">
      <main className="h-[700px] w-full flex flex-col justify-center items-start gap-25 px-4 pt-20 mt-10 md:mt-0 pb-30 md:px-30" style={style}>
        <form className='shadow-xl w-full md:w-[450px] rounded-md bg-white p-10 flex flex-col justify-between gap-5 items-start' >
            <p className='font-bold text-3xl md:text-3xl'>Get In Touch</p>
            <input className='w-full p-2 border border-orange-200 rounded-md' placeholder='Your email'></input>
            <input className='w-full p-2 border border-orange-200 rounded-md' placeholder='Subject'></input>
            <textarea className='w-full p-2 border border-orange-200 rounded-md' placeholder='Message'></textarea>
            <div className='w-full flex flex-row items-center justify-end'>
                <Button text={'Submit now'}/>
            </div>
        </form>
      </main>
      <div className='w-full px-10 md:px-50 flex flex-col md:flex-row justify-center items-center'>
        {contact.map(key => (
            <AddressCard data={key.data} link={key.link} src={key.src} type={key.type} key={key}/>
        ))}
      </div>
    </div>
  )
}

export default Contact
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-20 mt-10 md:mt-0 pb-30 md:px-10 bg-[#1F2937]">
      <main className="w-full bg-slate-800 flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-10 relative bg-[#1f2937] rounded-md">
          <div className="md:w-[148px] w-[100px] h-[100px] md:h-[148px] left-[50px] md:left-[100px] z-40 top-0 absolute">
            <Image src='/images/assets/gift.svg' alt="Gift Icon" height={200} width={200} />
          </div>
          <div className="bg-[#FFF9EF] flex flex-col md:flex-row justify-between items-start md:items-center relative px-6 pt-20 pb-10 md:px-20 md:py-20 w-full rounded-md mt-10 md:mt-20 space-y-6 md:space-y-0">
            <div className="flex flex-col items-start justify-center gap-3">
              <p className="uppercase text-[#EF6D58] text-[14px] tracking-widest">Get Started</p>
              <p className="text-black font-bold text-3xl md:text-[32px] leading-snug">I Help Companies <br />Move Faster</p>
              <div className="mt-3">
                <Button text={"Hire Me"} />
              </div>
            </div>
            <div className="text-[#391400A3] text-base md:text-lg md:w-1/3 md:text-center md:text-left">
              Put themselves in the merchant's shoes. It is meant to partner on the long run.
            </div>
            <div className="flex justify-center items-baseline">
              <Image src='/images/assets/cards.svg' alt="Cards Icon" height={250} width={300} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GetStarted;
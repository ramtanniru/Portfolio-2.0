import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Card2 = ({services}) => {
  const { icon, name, link, description } = services;

  return (
    <div className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-8">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {name}
        </h3>
        <p>{description}</p>
        <a href={link}>Read more</a>
    </div>
  );
};

export default Card2;

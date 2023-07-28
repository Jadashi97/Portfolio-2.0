"use client"; // This is a client component 👈🏽
import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col  relative h-screen text-center md:text-left md:flex-row 
            max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.profilePic).url()}
                alt='aboutme'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            ></motion.img>

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Lets break the <span className='underline decoration-[#F7AB0A]/50'>ICE</span>
                </h4>
                <p className="text-lg">{pageInfo?.backgroundInformation}</p>
                {/* <p className='textbase'>

                    I go by Daniel. You might also know me as Lokose! I have been coding for over 3 years now.
                    As a Full Stack developer, I have worked with two startups and a local health care business to help
                    build & scale their companies. I have horned my craft to deliver REAL VALUE by developing
                    web Apps that target solving problems within my local community!
                </p> */}
            </div>
        </motion.div >
    )
};
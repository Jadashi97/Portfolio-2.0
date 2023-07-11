"use client";
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Nyarji Daniel Jada",
            "A sports/coffee/beer lover",
            "~I focus on developing apps that 🎯target solving problems within my Community!~"
        ],
        loop: true,
        delaySpeed: 2500,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-42 w-36 mx-auto  object-contain'
                src="/myPic.jpeg"
                alt={'my-pic'}
                width={800}
                height={700}
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-400 pb-5 tracking-[15px]'>
                    FullStack developer👨🏾‍💻
                </h2>
                <h1 className='text-3xl lg:text-4xl font-semibold px-20'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='orange' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
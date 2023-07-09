"use client";
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "~Hi, I'm Nyarji Daniel Jada~",
            "~👨🏾‍💻A FullStack/Frontend developer~",
            "~I focus on developing practical apps that  🎯target solving problems within my Community!~"
        ],
        loop: true,
        delaySpeed: 2500,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='relative rounded-full h-38 w-36 mx-auto  object-contain'
                src="/myPic.jpeg"
                alt={'my-pic'}
                width={700}
                height={700}
            />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='orange' />
            </h1>
        </div>
    );
}

export default Hero;
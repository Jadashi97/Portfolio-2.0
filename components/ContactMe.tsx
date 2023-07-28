/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";
import { motion } from "framer-motion";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
}

type Props = {
    pageInfo: PageInfo;
};

export default function ContactMe({ pageInfo }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:lojuan247@gmail.com?subject=${formData.subject}&
        body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl 
            px-18 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact Me
            </h3>
            <div className='flex flex-col space-y-8'>
                <h4 className='text-4xl pt-20 font font-semibold text-center'>
                    Let's
                    <span className=' decoration-[#F7AB0A]/50 underline'> Link </span>
                    Up!
                </h4>
                <div className='space-y-8'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className="text-2xl">{pageInfo.phoneNumber}</p>
                        {/* <p className='text-2xl'>+6124030012</p> */}
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        {/* <p className='text-2xl'>lojuan247@gmail.com</p> */}
                        <a className="text-2xl" href={`mailto:${pageInfo.email}`}>
                            {pageInfo.email}
                        </a>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        {/* <p className='text-2xl'>Minneapolis, Minnesota</p> */}
                        <p className="text-2xl">{pageInfo.address}</p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex spa""ce-x-2'>
                        <input
                            {...register("name")}
                            placeholder='Name'
                            className='contactInput'
                            type="text"
                        />
                        <input
                            {...register("email")}
                            placeholder='Email'
                            className='contactInput'
                            type="email"
                        />
                    </div>
                    <input
                        {...register("subject")}
                        placeholder='Subject'
                        className='contactInput'
                        type="text"
                    />
                    <textarea
                        {...register("message")}
                        placeholder='Message'
                        className='contactInput'
                    />
                    <button
                        type='submit'
                        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

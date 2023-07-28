/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    experience: Experience;
}

export default function ExperienceCards({ experience }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
        md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
        transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                // src="/image2.jpeg"
                src={urlFor(experience.companyImage).url()}
                alt='logo'
                width={300}
                height={300}
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map((technology) => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                        />
                    ))}
                    {/* <img
                        className='h-8 w-8 rounded-full'
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAACeCAMAAAAxDI7xAAAAn1BMVEX////auS3/2Drs7Oz7+e7lz4DYthnuyjX/2jrYtRLeyHLs7/PZuCXt8Pf/1Brm38H/88javUT/6Zz/1iv/3mPcwlrq597i0JD48tz/+OL+/fn69uf/4XLhvzDoxTP30jf/9tj/2knu4K3kzG/z6cP/5o//3Ff/5IPbvDro1Yrx5Lf27c7iyWbu8v//9ND/77jp5NPt3qH966vk2K3fxFNAu6BIAAAJB0lEQVR4nO2da3uqOBRGwSIVRauiVcFpFW94qVbr//9ts+MFiAokhEp2D++nec487Zys2SRZ2VwUpUiRIkWKFCnyL8bW8kzeo49Lv1rOL67MaNaGnluMpcxk+p6p5hVjb+c9/Jg43RzJuDKT0SZ6fmRWeY8+LtrSyI2MOc179HGxe/mRUdd5jz4utpsbGbNVkIkgc+znPfrYTHObgc2uk/fgY7PObdXWJ5KT8URG9/H5ypnP/3wyZbnJ9FsiRfNa4c7H9WfllgMgcxQjU+JMxa8Zoyc3GWcjMgWnIOP/rNxyAGSE9ECEjC45Ga0ssqHhJlMp+T9rSq1NQEZID/jJfPpgPKm1CTbB+9zISC0HRA+eOs+EyEguB4qyeuqqXXn1yXRlJzMVACNCRnY5IHogUDT8ZPwtsOxyILgJFiIj9xYYyIickfOTCYRS6s4BSV9ED/jJ+D8qPxkhPRAgY7p5jzwpHN0Dr9oLcpqeCBlr0WbKbA5gAjKq5HLA0z0wW29fdT9V40Km0WT7Dw2GFiY5IHrAejUBmfrLNTVuMqMORUbuzgGJ7bKuTYJktnMrvAU+Sk9GWTGCESXTHFNkNrLLAYceCJOh5UB+MmvWM3JBMrsStQWuyi4HQIZVDwTJHCxccvA0MvaJTCAHkvdUSJj1QJBM28KlTRx6IEZGm8HSFJCRXw5I9+ApZJyFFe4ceNLLAZT58ilkTnLgkzFRkGHVA3EypZAcSK9NkH2Ga1PkPek2PjlQFJcNDBOZQycq8xK1BZa+c0CyYjwjZyEzsyJDk0GgTSBOjHrAQqYdf6IXbIGl76mQsG6CMyWDQA6ADGP3IFMyS/m3wOx6kAGZYAvcy224HGHVA2EylVJAZp/bcDniVJ9PRkWgTbA7YxSnDMmgkAN2cRIng0wOmPUgSzIo5IBZD7Ikg0IOCBmmohEng6qnQsIoThmSwSEHIE5seiBOJtRTwSAHzOKUJZkyBjlgvu1KlEzoORVzmdtgueJsnkOmhEybmB/aTkfmempFywEKbWLWAz4yFyLj+Xy4mLUPp9uKkMkBZJnh1XQ92px3TkR2ze1AsxVtQd9WhIVMjwUMIxkgcgYyGji2vwI5Q2Q3XF2yz4zMiBDR7Ls1edCheyo4tsCgB0wP4Ip04gZ0t0nyR7WDrJi6B0Jkbm5Fw7EFZu2riJAZkeUq1FPBsQVm1QMRMlt6C1z99SFlFLbnVUTINC1qo4dEDljf6SRAxt41MMoB/MUnzyWDRQ4gv06m3QjJgeqh6KmcUn4qGTzaBOLEAEaEjDZrIOypkDDpgQiZIU45YNQDTjK2FmznnBttwiIHpHuQKRl7MGru2u2B/wfOzU16WOQA9IClr8J0B6Mz2jYP7WFnbDXGW/+Pb7Xp+SNMG6bnVRLI2APCZNGZl85HV1Zn5P/+wZiSg0k+o0wTJj2IIrNVNHLxzIbzcck/9CVkgqtpROTAJ6Oi0SZYOwTIWIsZXDwnKPTR+DAgs6XIYOmpkNgs4hRB5nwaft9ECZNpUltgRHKgKCwdp2gyD2Mt/LX5pE2fyG64uqSaDIafjL822weaDB45uBUnw3jUgOIlMwvItMNyoMr+HicqvRAZs/v9s9Hv6XCT8ffANq1NHh45oMXJ7L5/fdW+l0ddNzMis2iEN3oeHjmgH2cHMrWXl3q9/v5TbammaaYk0/bJaLQ2tbCcj5OEX/l6JkNG//X18tbbXOlwkCGL+Hzn/3btRptyHCh3wt898MmQ1L9q7z/lLqGjs5GxStZ4Pmw3Q9aogTaFtsCItAlkOIoMgVCvQ+lUu6qXSIZs+QiVm4nEKVnhLTAibYL/qzFkznBq3z+971oMmTOV2W50f8QwQCsHsHocY8lcS+clisyFyvbxwQstlDiexvDTTSRzwykgY1mN8XB2aA4il5wttQXG8BB7KJMHaxMbGWseS4WEFkq5v41xl3LqmmnsEs8uaaE0MckBdUMaL5lt4i+ntUnFJAfU8yq8ZJK7KrOwHKgqnvNxktUvkqG1SfUwyYGiTENkWm/gBQlwuGqGvBIiINN6wnAyTD8odhABdfPzHQ+Hq2bmlByg0ibYwKtUdMPwym8vX/UoOqxk7FF7blEbPR2VNsEI1LsYhrFxv+mtLxcZe3QYWo3G6Y0Qoe+poJIDSOsezbV03mv3lZNAxtYGu8X4TKV0QwaXHCjK8REZMukYhgmlc6LBRgaoNNsdK8BCk5H7w3kPEtNxMqF0WuWf7/eXml89kW/mGWwPwwpF5UwmuEhxyYGiJDzoD6WjTnpvJzoRZE5UFmOr8aAvFyaDSw5AD5Kf5NEN81j+eYMrC2rnhgyhMuuUHlG5JYPpfJyE7T1gAMfb9H5gUg6RsQfN3awzftjDvSej45ID0APmV0sDnVbV7fpv2561h+PS7cQSTUbFJQfkq8mMZAgc0zjP1+czvbhiuZIJaVPeI+WNk+abPKzvrq9g7amQaE8io6PqHJDYaT6VwUwm0CajnPdIuZPmw5RpyGDTpl8mg1gOFCXN91XSkMEmB4l6kBkZXOfjJGm+zs5IpoJZDhQlzZe2k8lUAEvp8zW4Rw+dHCjKNHMyFYACVD6oHzHzHid/+pmSIZ9FLn2Gi+UCBp0cZEnm9LXoz9tiOUdH1lMhSaMHD8hcauXjtliuZJB1Dkhs8VX7OrH8F4FFRSkHiqIaOq87hcmcLqHXh5fQNeRAGVvngGS6r7b0h3ePJ5O5TCzRtXI+8eouXXzbGYU80LZeLbsmR+mcyJyvobhL6Ny4muzXfXybGT+as3ar3uMHDx6ROU24H7HFAlj07nLVd7Adc97F1vrT5ZHpunqFmSW2Vs7dGHft3L/GCGmAzn4CpZNwXSVQAbrH5dTR/gqVa2xnWj6yXlcPi2Wz7/+ZWrmN3Xc3ZmLp3IW0e6FY8v7b/3Y01lnHx6JO9vhOYVKm70684HmemGvIVI/LNeK1OU002Ot4ajQd+Dfeser+M8VCBWad8tFT74uH/EFr0vv7M0tcnNVy0qKuLPjn1qbsrv/qKsQRbe2enwUjWxYTLiEolgLLJXYf/BOmndZk6f5rE25yoHTcoliKFClSpEiRIkWyy/9bORRzjA7E8gAAAABJRU5ErkJggg=='
                    />
                    <img
                        className='h-8 w-8 rounded-full'
                        src='data:image/png;base64,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'
                    />
                    <img
                        className='h-8 w-8 rounded-full'
                        src='data:image/png;base64,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'
                    /> */}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}
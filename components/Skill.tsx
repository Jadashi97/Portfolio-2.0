import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAB9CAMAAACSwq/9AAAAeFBMVEX////zc2jwSTnza1/zb2TzcWbyaFz92NT5qaPwPivwRjbzbWH+8fDwQC7/+/rwQzLvNiD1fXP0eG7+9vX6wLz96+r6uLP95uT8x8P2hn3xTT793935pJ370M75s674g3n1j4fyYFPvMBjyVEX2mpPvKgzyWk3vJACeILkfAAAF7klEQVR4nO2c6XarOgxGCzZmMPNMwQwNTd//DS8kaUuIGXtaIi775znNWvqWZFnCll9eDg4ODg4ODg4ODp6bIGWxH4Z5Q+
                jHLA3MrS36NXSmlIkjUERQC0FYcIqyDuWtDfv3mJFfEEKxJAldJAljREgZ78rLOqsRwcIglAgZ07e28l/hlxgNa726GeHS34OHTZagEcd+g1ERe1tb+1OCbCyKe4JJGW1t789gCZkrtgW5oCPax7Nde3Mwrbe2eTWmUi0T20KKYGu71+EpiwL5E5qkW1u+inxq9xkAOxC34LBap7bxL4W3IXl0rdpGbw1Or/IDuQLNtzZ/Iex1RE3TGGAsjf0BhdUmeYU95DiEXSdJksIR0HB1iV1Q5QZTDZ4UTKQ6ZGkUBUGUyrGSkKHsTUCFMzIs4j6IRUms33nNkzOBv8YlB1D5nL6L2rkvl5aM86dBJnBDGil/bvVqalUU+7mKhPzqwYxdnl5A7vWIJYra3bLEhOfaKwE3ZRH/Dy3+EexVa+Seu2rdsUJYdzh6sfBn9v4QpYnlJpo7Gmg8+gPZ5ezCFZBoNsuLXK36SlYkm/hJyNmQoOxFgWC1ckXr073YmSwaksdwlty/MPbnRNVVrna6uRdNZx3G641hNL6pqIliJ5xxMb0KTed6ttAFSG6WbfGGhlq9NJtRALNM6ZON57dngb19ydVwo1eCYfZavuXe9MLq5pbyHcyNXhG5DtBvizORDbGj1zgX4D7FLCI9aR29onWqgdRH64iI1ZXbOhhQN7cYvTDEezTbUva7gGtV7KPZJ4XtdA3nfe9eBKuvrgKjLFxIL1d9CbZUq8pkHdRHxjkIPPdeFdv2KcnjdFdxnb8NyL1GtaqdizrcT2CbKjeavxVrhmG9VmUY7SOwFXtU7qdm+
                /3VyVkEPrKDXqUxEtm2WhVKDHxXDh+33hHJqnhOYHeJ9Yxw7ko23j9qGW5Ue3iZ3gbbLmKwqSsiC+L5hqo5YD8FRNJyvaL1VkK8iNKiF/b49svFrqAmLT1Th6rJEQwRbHcsE3XmBtxBU2uwGStbI1hNoC7glyg/2YsFq+XWZq8nCImqWsuylg12/bZEmXtWVWOBZA1qfr5ipmHmqO+z49pAwLuGZmOKWEY+3m1Dm+FmG8hp9hRp7lQnSzWm/PwBt2HoYcph7VRNqzvmZXvqhgMomsjOC3FkMWun3bj3E1POKs0a2KQsGKf3C5EVQeRGtVFubdrvoLNa5DRPFgW/Fw0RZKcHD2snsL3+NJ5y7gtWYVdWE6S1dZ+m7XBrk34V2T/dfe9R4U7IzcGv4qRbX6oJ2DZ/DiGiStbxr1HsWq6CBJx1Tg8N9+nrKk/mMO9sUy+pIKBM+WqLAcgNCvLIvKG+6HKJGyvlZ35Wpy8Gb41ZcyZlyKwNNL5c8pWcsLq5Vy2fXu5LyJsrSOb8srj+Epf+7XgJQgso84b76IzmhlVft/KTa3q2IbRED9NhF/dOVvv69/18179cANes4WGc5yHjzfWhySvc+feax8rl3p1WQbitElUcuZPDJn5nGAGXSpucDefp96GWhDvFSJQx433UXfJOfm6i2QCQqV46OaeXroZPbj2F3iU4HKJ28UJYurfqiKe38rkO9pjQW+40Kw3Rqv7a8JXEQ4PmpAjTfsqK4vLhWZxm8driO4RtqMUsh6bMMXLqPI68q2ZTl/0soY+xIDm+rWkgElVLNPweioRpo6+dvk8SV6J04FUc9gbpUwZvhPFedMvw/1P24QI60fYGstVcUGyD+iwXcUY2l8gNi60VLCPivyAwEyDTjh0Y9wWBmc6F9+jNC5PW6kUgb85FxboXq2i5teXr0Os175GhDF4kX/HC+c8m3sBV+PwfqAYJErpEMIb60twnpl/OewW0QSJOCDWQv9D9gsyqsQhVdjH56sklHX9+TMCYuvl+DuujsHYwonzJFOEkg/+e7R1eGuelhAjpisa0+Qda5mwXUdzHay9TZYmLpcs7IFgqaiVOg335lYvp/Q9EHhwcHBwcHBwcHIDjPz6+W4sif+72AAAAAElFTkSuQmCC'
                className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
                filter group-hover:grayscale transition duration-300 case-in-out'
            />
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-gray-300 h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-108'>100%</p>
                </div>
            </div>
        </div>
    )
}
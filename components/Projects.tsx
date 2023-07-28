/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    // const projects = [1, 2, 3, 4];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-20'>
                {projects.map((project, i) => (
                    <motion.div
                        key={project._id}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                        items-center justify-center p-20 md:p-44 h-screen'
                    >
                        <Link key={project._id} href={project.linkToBuild} >
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0
                                }}
                                transition={{ duration: 1.2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={urlFor(project?.image).url()}
                                // src="https://cdn.pixabay.com/photo/2015/10/31/12/00/cinema-1015320_640.jpg"
                                alt="netflix-clone"
                                className='h-64 w-64'
                            />
                        </Link>
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className="decoration-[#F7AB0A]/50 underline">
                                    Case Study {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                                {/* Netflix {i + 1} / {projects.length} Clone */}
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                {project.summary}
                                {/* Using React, TMDB(database) to work on the frontend and also spark the idea of
                                providing streaming services to my beloved south Sudanese */}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects;
"use client";
import "styles/globals.css";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Link from "next/link";
import Image from "next/image";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};



export default async function Home() {

    const pageInfo = await fetchPageInfo();
    const experiences = await fetchExperiences();
    const skills = await fetchSkills();
    const projects = await fetchProjects();
    const socials = await fetchSocial();


    return (
        // <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">

        //     <Header socials={socials} />
        //     <section id="hero" className="snap-start">
        //         <Hero pageInfo={pageInfo} />
        //     </section>
        //     <section id="about" className="snap-center">
        //         <About pageInfo={pageInfo} />
        //     </section>

        //     {/* Experience Section */}
        //     <section id="experience" className="snap-center">
        //         <WorkExperience experiences={experiences} />
        //     </section>

        //     {/* <About pageInfo={pageInfo} /> */}
        // </div>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
            <p>lokose</p>
            {/* <Header socials={socials} />
            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </section> */}
            {/* <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
            <section id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </section>
            <section id="skills" className="snap-start">
                <Skills skills={skills} />
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={projects} />
            </section>

            <section id="contact" className="snap-start">
                <ContactMe pageInfo={pageInfo} />
            </section> */}

            {/* <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <Image
                            src="./myPic.jpeg"
                            alt=""
                            width={"50"}
                            height={"50"}
                        />
                    </div>
                </footer>
            </Link> */}
        </div>
    );
};


// export const getStaticProps = async () => {
//     // const pageInfo: PageInfo = await fetchPageInfo();
//     // const experiences: Experience[] = await fetchExperiences();
//     // const skills: Skill[] = await fetchSkills();
//     // const projects: Project[] = await fetchProjects();
//     // const socials: Social[] = await fetchSocial();

//     return {
//         props: {
//             pageInfo,
//             experiences,
//             skills,
//             projects,
//             socials,
//         },
//         // Next.js will attempt to re-generate the page:
//         // - When a request comes in
//         // - At most once every 10 seconds
//         revalidate: 10,
//     };
// };

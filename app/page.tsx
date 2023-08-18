// "use client";
import "styles/globals.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
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

    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();


    return (
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
            <Header socials={socials} />
            <div id="hero" className="snap-start">
                <Hero pageInfo={pageInfo} />
            </div>

            <div id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </div>
            <div id="experience" className="snap-center">
                <WorkExperience experiences={experiences} />
            </div>

            <div id="skills" className="snap-start">
                <Skills skills={skills} />
            </div>

            <div id="projects" className="snap-start">
                <Projects projects={projects} />
            </div>

            <div id="contact" className="snap-start">
                <ContactMe pageInfo={pageInfo} />
            </div>
            <Link href="/hero">
                <div className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex items-center justify-center">
                        <Image
                            src="./myPic.jpeg"
                            alt=""
                            width={"5"}
                            height={"5"}
                        />
                    </div>
                </div>
            </Link>
        </div>
    );
};
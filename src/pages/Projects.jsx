import { Link } from "react-router-dom";

import CTA from "../components/CTA.jsx";
import {projects} from "../constants/Constants.js";
import { arrow } from "../assets/icons";

const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
            </h1>

            <p className='text-slate-500 mt-2 leading-relaxed'>
                My projects showcase strong software engineering skills, using custom physics, AI pathfinding, and advanced 3D techniques. 
                They were developed using object-oriented programming (OOP) principles 
                to ensure code scalability and functionality on both the front and back-end. 
                Some projects were completed successfully in groups, demonstrating my strong understanding of collaboration through Git 
                and unit testing to ensure high-quality software deployment. 
            </p>

            {/*Projects Section*/}
            
            <div className='flex flex-wrap my-20 gap-16'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt={project.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.description} </p>
                            <div>
                                {project.videoUrl && (
                                    <video controls loop className='mt-5 w-full project-video' preload='metadata'>
                                        <source src={project.videoUrl} type='video/mp4'/>
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>

                            {project.link && (
                                <div className='mt-5 flex items-center gap-2 font-poppins'>
                                    <Link
                                        to={project.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-semibold text-blue-600'
                                    >
                                        Live Link
                                    </Link>
                                    <img
                                        src={arrow}
                                        alt='arrow'
                                        className='w-4 h-4 object-contain'
                                    />
                                </div>
                            )}
                            
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200'/>

            <CTA/>
        </section>
    );
};

export default Projects;
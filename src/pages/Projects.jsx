import { Link } from "react-router-dom";
import { useState } from "react";

import CTA from "../components/CTA.jsx";
import {projects} from "../constants/Constants.js";
import { arrow } from "../assets/icons";

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [hoveredProject, setHoveredProject] = useState(null);

    // Filter projects if categories exist
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                    Projects
                </span>
            </h1>

            <div className="py-6">
                {/* empty space */}
            </div>

            <div className="story-card mb-12">
                <p className='text-lg leading-relaxed'>
                    My projects showcase <strong className="text-cyan-300">strong software engineering skills</strong>, using custom physics, AI pathfinding, and advanced 3D techniques. 
                    They were developed using <strong className="text-blue-300">object-oriented programming (OOP) principles</strong> 
                    to ensure code scalability and functionality on both the front and back-end.
                </p>
                <br/>
                <p className='text-lg leading-relaxed'>
                    Some projects were completed successfully in groups, demonstrating my strong understanding of <strong className="text-purple-300">collaboration through Git and unit testing</strong> to ensure high-quality software deployment.
                </p>
            </div>

            <div className="visual-break">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            {/*Enhanced Projects Section*/}
            <div className="py-4">
                <h3 className="subhead-text mb-8">Highlights</h3>
                
                <div className='grid md:grid-cols-2 gap-12 mt-8 mb-16'>
                    {filteredProjects.map((project, index) => (
                        <div 
                            className='group relative'
                            key={project.name}
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {/* Enhanced Project Card */}
                            <div className='story-card h-full overflow-hidden'>
                                {/* Project Icon with Enhanced Styling */}
                                <div className='flex justify-between items-start mb-6'>
                                    <div className='block-container w-16 h-16'>
                                        <div className={`btn-back rounded-xl ${project.theme}`} />
                                        <div className='btn-front rounded-xl flex justify-center items-center shadow-lg shadow-blue-300/25 hover:shadow-cyan-500/40 transition-shadow duration-300'>
                                            <img
                                                src={project.iconUrl}
                                                alt={project.name}
                                                className='w-1/2 h-1/2 object-contain'
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Project Number Badge */}
                                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        #{(index + 1).toString().padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className='flex flex-col h-full'>
                                    <h4 className='text-2xl font-poppins font-semibold mb-4 text-cyan-300 group-hover:text-purple-300 transition-colors duration-300'>
                                        {project.name}
                                    </h4>
                                    
                                    <p className='text-gray-100 leading-relaxed mb-6'>
                                        {project.description}
                                    </p>

                                    {/* Video Section with Enhanced Styling */}
                                    {project.videoUrl && (
                                        <div className='mb-6 relative overflow-hidden rounded-lg'>
                                            <video 
                                                controls 
                                                loop 
                                                className='w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300' 
                                                preload='metadata'
                                                poster={project.posterUrl}
                                            >
                                                <source src={project.videoUrl} type='video/mp4'/>
                                                Your browser does not support the video tag.
                                            </video>
                                            
                                            {/* Video Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-lg"></div>
                                        </div>
                                    )}

                                    {/* Tech Stack Tags */}
                                    {project.technologies && (
                                        <div className='flex flex-wrap gap-2 mb-6'>
                                            {project.technologies.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Enhanced Link Section */}
                                    {project.link && (
                                        <div className='mt-6'>
                                            <Link
                                                to={project.link}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group'
                                            >
                                                <span>View Project</span>
                                                <img
                                                    src={arrow}
                                                    alt='arrow'
                                                    className='w-4 h-4 object-contain group-hover:translate-x-1 transition-transform duration-300'
                                                />
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 border-2 border-cyan-500/0 rounded-xl transition-all duration-300 pointer-events-none ${
                                    hoveredProject === index ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' : ''
                                }`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="visual-break">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            {/* Stats Section */}
            <div className="story-card color-accent-blue mt-8 mb-16">
                <h4 className="text-xl font-semibold mb-6 text-center text-cyan-300">Project Highlights</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-blue-500/10 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-300 mb-2">{projects.length}+</div>
                        <p className="text-gray-100 text-sm">Projects Completed</p>
                    </div>
                    <div className="bg-cyan-500/10 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-cyan-300 mb-2">2</div>
                        <p className="text-gray-100 text-sm">Award Nominations</p>
                    </div>
                    <div className="bg-purple-500/10 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-purple-300 mb-2">1</div>
                        <p className="text-gray-100 text-sm">Award Win</p>
                    </div>
                </div>
            </div>

            <div className="visual-break">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            <div className="py-8">
                <hr className='border-slate-200 dark:border-gray-700'/>
            </div>

            <CTA/>
        </section>
    );
};

export default Projects;
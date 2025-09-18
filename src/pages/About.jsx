import React from 'react'
import {skills, experiences} from "../constants/Constants.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA.jsx";

const About = () => {
    return (

        <section className="max-container">

            {/*Introduction*/}

            <h1 className="head-text">
                Hi, I'm <span className="blue-gradient_text font-semibold drop-shadow">Albert</span>
            </h1>

            <div>
                <p>
                    I am a final-year software engineering student with a passion for front-end and
                    back-end programming.
                     I'm eager to add value to the right company that will grant me an opportunity. <br/> 
                    
                    <br/> I have a love for videogames and music -
                    I see the creative processes in these fields reflected in software engineering, making it an
                    exciting endeavor.
                    
                </p>
            </div>

            {/*Skills section*/}

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">
                    My Skills
                    <div className="mt-16 flex flex-wrap gap-12">
                        {skills.map((skill) => (
                            <div className='block-container w-20 h-20' key={skill.name}>
                                <div className='btn-back rounded-xl'/>
                                <div className='btn-front rounded-xl flex justify-center items-center'>
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className='w-1/2 h-1/2 object-contain'
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </h3>
            </div>

            {/*Work Experience*/}

            <div className='py-16'>
                <h3 className='subhead-text'>Work Experience</h3>
                <div className='mt-5 flex flex-col gap-3 text-black'>
                    <p>
                        I bring a unique background from my time at J.P. Morgan, one of the largest investment banks in
                        the
                        world, where I developed strong interpersonal and problem-solving skills.
                        Discovering my true calling in software development, I transitioned from finance to software
                        engineering.<br/>

                        <br/> I recently had the opportunity to take on a lead developer role for a student project, which was a very worthwhile experience.
                    </p>
                </div>

                {/*Timeline*/}

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience, index) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{background: experience.iconBg}}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className='w-[90%] h-[90%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                            >
                                <div>
                                    <h3 className='text-black text-xl font-poppins font-semibold'>
                                        {experience.title}
                                    </h3>
                                    <p
                                        className='text-black-500 font-medium text-base'
                                        style={{margin: 0}}
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className='my-5 list-disc ml-5 space-y-2'>
                                    {experience.points.map((point, index) => (
                                        <li
                                            key={`experience-point-${index}`}
                                            className='text-black/50 font-normal pl-1 text-sm'
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <a
                    href="public/Albert Nguyen Resume.pdf"
                    download
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Download My Resume
                </a>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Education</h3>
                <div className='mt-5 flex flex-col gap-3 text-black'>
                    <p>
                        Final-year student currently studying a Bachelor's of Software Engineering at the University of Technology Sydney (UTS). 
                        Included on the Dean's List of Engineering (2023, 2025), for maintaining a High Distinction WAM and academic excellence.
                    </p>
                </div>

                {/*Timeline*/}

                <div className='mt-12 flex'>
                </div>
            </div>

            <hr className='border-slate-200'/>

            <CTA/>

        </section>
    )
}

export default About
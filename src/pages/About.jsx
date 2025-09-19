import React, { useState } from 'react'
import {skills, experiences} from "../constants/Constants.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from "../components/CTA.jsx";

const About = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [expandedSections, setExpandedSections] = useState({
        sustainability: false,
        intercultural: false,
        sustainabilityFull: false,
        interculturalFull: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <section className="max-container">
            {/*Introduction*/}
            <h1 className="head-text">
                Hi, I'm <span className="blue-gradient_text font-semibold drop-shadow">Albert!</span>
            </h1>

            <div className="story-card mb-12">
                <p className="text-lg leading-relaxed">
                    My journey into software engineering began with a <strong className="text-cyan-300">curiosity for how complex systems power the world around us</strong> – from the algorithms behind smart devices to the code that connects satellites to ground control.
                </p>
                <br/>
                <p className="text-lg leading-relaxed">
                    This curiosity evolved into a passion, leading me to pursue a degree in Software Engineering at UTS, where I've applied myself both academically and practically. At <strong className="text-blue-300">ANT61</strong>, I contributed to a Commonwealth-funded satellite servicing project, developing ROS2 robotic control systems and full-stack web tools using React, GraphQL, and AWS.
                </p>
            </div>

            <div className="pull-quote">
                "I'm driven by a desire to build meaningful, high-impact software – whether it's empowering communication through sign language translation apps, optimising real-time systems, or creating award-nominated games that resonate with players."
            </div>

            <div className="visual-break">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            </div>

            {/*Skills section*/}
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl'/>
                            <div className='btn-front rounded-xl flex justify-center items-center shadow-lg shadow-blue-300/25 hover:shadow-cyan-500/40 transition-shadow duration-300'>
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="visual-break">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>

            {/*Tabbed Content Section*/}
            <div className="py-16">
                <h3 className="subhead-text mb-8">Professional Journey</h3>
                
                <div className="flex flex-wrap gap-4 mb-8">
                    <button 
                        className={`tab-button ${activeTab === 'overview' ? 'tab-button-active' : 'tab-button-inactive'}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'experience' ? 'tab-button-active' : 'tab-button-inactive'}`}
                        onClick={() => setActiveTab('experience')}
                    >
                        Work Experience
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'education' ? 'tab-button-active' : 'tab-button-inactive'}`}
                        onClick={() => setActiveTab('education')}
                    >
                        Education
                    </button>
                </div>

                {activeTab === 'overview' && (
                    <div className="story-card color-accent-blue p-6">
                        <h4 className="text-xl font-semibold mb-4 text-cyan-300">Professional Background</h4>
                        <div className="space-y-4 text-gray-100">
                            <p>
                                I bring a <strong>unique background</strong> from my time at J.P. Morgan, one of the largest investment banks in the world, where I developed strong interpersonal and problem-solving skills.
                            </p>
                            <p>
                                Discovering my true calling in software development, I transitioned from finance to software engineering, contributing to a live satellite communication system at ANT61.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'experience' && (
                    <div>
                        <div className="mt-8 flex justify-center">
                            <a
                                href="public/Albert Nguyen Resume.pdf"
                                download
                                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Download My Resume
                            </a>
                        </div>
                        
                        <div className='mt-12 flex'>
                            <VerticalTimeline>
                                {experiences.map((experience, index) => (
                                    <VerticalTimelineElement
                                        key={experience.company_name}
                                        date={experience.date}
                                        iconStyle={{
                                            background: experience.iconBg,
                                            boxShadow: `0 0 20px ${experience.iconBg}40`
                                        }}
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
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                                            background: "rgba(255,255,255,0.95)",
                                            backdropFilter: "blur(10px)"
                                        }}
                                    >
                                        <div>
                                            <h3 className='text-black text-xl font-poppins font-semibold'>
                                                {experience.title}
                                            </h3>
                                            <p className='text-black-500 font-medium text-base' style={{margin: 0}}>
                                                {experience.company_name}
                                            </p>
                                        </div>

                                        <ul className='my-5 list-disc ml-5 space-y-2'>
                                            {experience.points.map((point, index) => (
                                                <li
                                                    key={`experience-point-${index}`}
                                                    className='text-black/70 font-normal pl-1 text-sm leading-relaxed'
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
                )}

                {activeTab === 'education' && (
                    <div className="story-card color-accent-purple p-6">
                        <h4 className="text-xl font-semibold mb-4 text-purple-300">Academic Excellence</h4>
                        <div className="space-y-4 text-gray-100">
                            <p>
                                <strong>Bachelor of Software Engineering</strong><br/>
                                University of Technology Sydney (UTS)
                            </p>
                            <div className="bg-purple-500/20 p-4 rounded-lg">
                                <p className="text-purple-200">
                                    🏆 <strong>Dean's List of Engineering</strong> (2023, 2025)<br/>
                                    Maintaining High Distinction WAM and academic excellence
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="visual-break">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>

            {/*Progressive Disclosure Sections*/}
            <div className='py-16'>
                <h3 className='subhead-text mb-8'>Engineering Competencies</h3>
                
                {/*Sustainability Section*/}
                <div className="story-card color-accent-cyan mb-8">
                    <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('sustainability')}
                    >
                        <h4 className="text-xl font-semibold text-cyan-300">
                            Sustainable Systems Design 🌱
                        </h4>
                        <span className="text-2xl text-cyan-300">
                            {expandedSections.sustainability ? '−' : '+'}
                        </span>
                    </div>
                    
                    <div className={`expandable-content ${
                        expandedSections.sustainability ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="pt-6 space-y-4 text-gray-100">
                            <p className="text-lg">
                                <strong>Project:</strong> Sign Language Translation System with Word Sense Disambiguation
                            </p>
                            
                            <div className="pull-quote text-base">
                                "I made the deliberate choice to build and train my own smaller model from scratch rather than using energy-intensive LLM APIs like ChatGPT."
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-cyan-500/10 p-4 rounded-lg">
                                    <h5 className="font-semibold text-cyan-300 mb-2">Environmental Impact</h5>
                                    <p className="text-sm">Reduced energy consumption from multiple watt-hours per query to minimal local processing</p>
                                </div>
                                <div className="bg-cyan-500/10 p-4 rounded-lg">
                                    <h5 className="font-semibold text-cyan-300 mb-2">Social Sustainability</h5>
                                    <p className="text-sm">Enabled offline access for underserved communities with limited internet or outdated hardware</p>
                                </div>
                            </div>

                            <p>
                                This experience taught me that <strong className="text-cyan-300">sustainability in engineering is multi-dimensional</strong> – encompassing environmental, social, and economic factors that must be balanced for truly viable systems.
                            </p>

                            {/* Read the Full Story Button */}
                            <div className="mt-6 border-t border-cyan-500/30 pt-4">
                                <button
                                    onClick={() => toggleSection('sustainabilityFull')}
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-cyan-200 font-medium transition-colors"
                                >
                                    <span>📖 Read the Full Story</span>
                                    <span className="text-lg">
                                        {expandedSections.sustainabilityFull ? '⬆️' : '⬇️'}
                                    </span>
                                </button>

                                <div className={`expandable-content mt-4 ${
                                    expandedSections.sustainabilityFull ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="bg-slate-800/30 p-6 rounded-lg space-y-4 text-sm leading-relaxed">
                                        <p>
                                            During my Engineering Capstone project, I developed a sign language translation system that could handle ambiguous words by asking users for clarification. In natural language, many words have multiple meanings depending on context – for example, the word "bat" could refer to an animal or a piece of sports equipment. This challenge is known as word sense disambiguation (WSD), and it's crucial for ensuring accurate translations between English and Auslan (Australian Sign Language).
                                        </p>
                                        <p>
                                            Initially, I considered using a large language model (LLM) API like ChatGPT to perform this disambiguation. However, I made the deliberate choice to build and train my own smaller model from scratch. My goal was twofold: to improve real-time performance and to ensure the system's long-term sustainability. Large-scale LLMs consume substantial energy – for example, a single query to an LLM like GPT-3 can require multiple watt-hours of power, which adds up significantly across thousands of queries.
                                        </p>
                                        <p>
                                            I felt strongly about this decision because accessibility and inclusion were at the heart of my project. My system was designed to support the Deaf community, many of whom face barriers in communication and education. Creating a lightweight model that could be deployed on local devices without constant server access made the tool more sustainable in both environmental and social terms.
                                        </p>
                                        <p>
                                            My background belief was that sustainability was often framed purely in environmental terms. However, this experience broadened my understanding. I recognised that social sustainability – designing for inclusion, equity, and long-term accessibility – is just as critical. I initially underestimated the trade-offs in power consumption and latency that come with large external APIs.
                                        </p>
                                        <p>
                                            One of the key difficulties I encountered was striking the right balance between accuracy and model efficiency. Developing a smaller model meant I had to optimise training data, refine preprocessing techniques, and evaluate trade-offs between model complexity and interpretability. It challenged me to think critically and make principled decisions that aligned with my ethical goals.
                                        </p>
                                        <p>
                                            Reflecting on this, I drew on the principles of sustainable engineering that go beyond energy efficiency – including resilience, scalability, and fairness. According to the Engineers Australia Stage 1 Competency Standards, engineers must "develop sustainable solutions through the adoption of appropriate materials, methods, and technologies."
                                        </p>
                                        <p>
                                            From this experience, I learned that sustainability in engineering is multi-dimensional. Moving forward, I will approach system design not only with performance in mind but also with a focus on ethical scalability, social impact, and energy efficiency. I now see sustainability as a core design principle, not an afterthought.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Intercultural Section*/}
                <div className="story-card color-accent-blue">
                    <div 
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('intercultural')}
                    >
                        <h4 className="text-xl font-semibold text-blue-300">
                            Global Professional Practice 🌍
                        </h4>
                        <span className="text-2xl text-blue-300">
                            {expandedSections.intercultural ? '−' : '+'}
                        </span>
                    </div>
                    
                    <div className={`expandable-content ${
                        expandedSections.intercultural ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="pt-6 space-y-4 text-gray-100">
                            <p className="text-lg">
                                <strong>Challenge:</strong> Navigating cultural miscommunication in game development collaboration
                            </p>

                            <div className="space-y-3">
                                <div className="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-400">
                                    <h5 className="font-semibold text-blue-300">The Situation</h5>
                                    <p className="text-sm mt-2">Constructive feedback was misinterpreted as personal criticism, leading to emotional conflict mid-project</p>
                                </div>
                                
                                <div className="bg-green-500/10 p-4 rounded-lg border-l-4 border-green-400">
                                    <h5 className="font-semibold text-green-300">The Response</h5>
                                    <p className="text-sm mt-2">Practiced emotional regulation, active listening, and created psychological safety to transform confrontation into collaboration</p>
                                </div>
                                
                                <div className="bg-purple-500/10 p-4 rounded-lg border-l-4 border-purple-400">
                                    <h5 className="font-semibold text-purple-300">The Learning</h5>
                                    <p className="text-sm mt-2">Professional communication requires emotional intelligence and cultural competence beyond just clarity</p>
                                </div>
                            </div>

                            <div className="pull-quote text-base">
                                "These are not just communication skills, but essential tools for global engineering leadership."
                            </div>

                            {/* Read the Full Story Button */}
                            <div className="mt-6 border-t border-blue-500/30 pt-4">
                                <button
                                    onClick={() => toggleSection('interculturalFull')}
                                    className="inline-flex items-center gap-2 text-purple-400 hover:text-blue-200 font-medium transition-colors"
                                >
                                    <span>📖 Read the Full Story</span>
                                    <span className="text-lg">
                                        {expandedSections.interculturalFull ? '⬆️' : '⬇️'}
                                    </span>
                                </button>

                                <div className={`expandable-content mt-4 ${
                                    expandedSections.interculturalFull ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="bg-slate-800/30 p-6 rounded-lg space-y-4 text-sm leading-relaxed">
                                        <p>
                                            In one of my university game development assignments, I collaborated with a partner to co-create a new game. Initially, everything was progressing well – we exchanged creative ideas, offered each other constructive feedback, and maintained a steady workflow. However, midway through the semester, things unexpectedly shifted.
                                        </p>
                                        <p>
                                            I provided feedback on one of my partner's features, in the same constructive tone we had used earlier, but his reaction was unexpectedly defensive. He called me, audibly upset, and seemed to interpret my feedback as personal criticism. I was initially surprised by his strong emotional response and wasn't sure how to de-escalate the situation.
                                        </p>
                                        <p>
                                            However, I reminded myself that reacting emotionally wouldn't help. I stayed composed and focused on listening. By asking clarifying questions, I was able to better understand his perspective. It became apparent that he hadn't fully read the feedback I sent. Ironically, he began voicing concerns that were already acknowledged or addressed in my original message.
                                        </p>
                                        <p>
                                            Once we slowed things down and walked through each point together, he began to open up, and I noticed our ideas had more alignment than conflict. Prior to this, I believed that clear communication and constructive tone would always prevent misunderstandings. This situation challenged that assumption.
                                        </p>
                                        <p>
                                            I realised that cultural or interpersonal differences – including varying communication styles, stress responses, or past experiences – can heavily influence how feedback is received, even if intentions are positive. The difficulty in this situation wasn't just the conflict itself, but navigating the emotional intensity while maintaining professionalism.
                                        </p>
                                        <p>
                                            I had to practice emotional regulation and empathy, even though I initially felt blindsided. By giving him space to express himself and reaffirming our shared goals, I helped turn the conversation from confrontation into collaboration. I even learned things from his perspective that improved our project in the end.
                                        </p>
                                        <p>
                                            This situation reflects key aspects of Engineers Australia's guidelines on communication and teamwork in diverse professional environments. It reinforced the importance of cultural competence and adaptability – vital traits in global engineering practice, where diverse teams are the norm.
                                        </p>
                                        <p>
                                            Looking back, I learned that professional communication goes beyond clarity – it requires emotional intelligence, patience, and a willingness to bridge misunderstanding with empathy. In future cross-cultural or emotionally tense situations, I'll strive to create psychological safety, clarify intent, and respond with curiosity instead of defensiveness.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <a
                    href="public/Cover Letter.pdf"
                    download
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                    Download My Cover Letter
                </a>
            </div>

            <div className="py-16">
                {/* empty div for spacing */}   
            </div>

            <hr className='border-slate-200 dark:border-gray-700'/>

            <CTA/>
        </section>
    )
}

export default About
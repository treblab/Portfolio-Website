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
                </h3>
            </div>

            {/*Work Experience*/}

            <div className='py-16'>
                <h3 className='subhead-text'>Work Experience</h3>
                <div className='mt-5 flex flex-col gap-3 text-white'>
                    <p>
                        I bring a unique background from my time at J.P. Morgan, one of the largest investment banks in
                        the
                        world, where I developed strong interpersonal and problem-solving skills.
                        Discovering my true calling in software development, I transitioned from finance to software
                        engineering.<br/>

                        <br/> In my most recent internship at ANT61, I contributed to a live satellite communication system,
                        working on telemetry visualisation tools and deploying serverless AWS Lambda functions. This
                        experience
                        solidified my passion for software engineering and my desire to create impactful solutions.
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
                <div className='mt-5 flex flex-col gap-3 dark:text-white'>
                    <p>
                        Final-year student currently studying a Bachelor's of Software Engineering at the University of Technology Sydney (UTS). 
                        Included on the Dean's List of Engineering (2023, 2025), for maintaining a High Distinction WAM and academic excellence.
                    </p>
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Apply principles of sustainability to create viable systems </h3>
                <div className='mt-5 flex flex-col gap-3 dark:text-white'>
                    <p>
                        During my Engineering Capstone project, I developed a sign language translation system that
                        could handle ambiguous words by asking users for clarification. In natural language, many
                        words have multiple meanings depending on context – for example, the word "bat" could refer to
                        an animal or a piece of sports equipment. This challenge is known as word sense
                        disambiguation (WSD), and it’s crucial for ensuring accurate translations between English and
                        Auslan (Australian Sign Language). Initially, I considered using a large language model (LLM) API
                        like ChatGPT to perform this disambiguation. However, I made the deliberate choice to build
                        and train my own smaller model from scratch. My goal was twofold: to improve real-time
                        performance and to ensure the system’s long-term sustainability. Large-scale LLMs consume
                        substantial energy – for example, a single query to an LLM like GPT-3 can require multiple watthours of power, which adds up significantly across thousands of queries. For a system intended
                        for frequent, real-time use, especially in educational or public settings, I felt it was my
                        responsibility to explore more energy-efficient alternatives.
                        <br/><br/>
                        I felt strongly about this decision because accessibility and inclusion were at the heart of my
                        project. My system was designed to support the Deaf community, many of whom face barriers
                        in communication and education. Creating a lightweight model that could be deployed on local
                        devices without constant server access made the tool more sustainable in both environmental
                        and social terms. It ensured the solution could be scaled and used by underserved
                        communities, including those with limited internet access or outdated hardware.
                        <br/><br/>
                        My background belief was that sustainability was often framed purely in environmental terms.
                        However, this experience broadened my understanding. I recognised that social sustainability –
                        designing for inclusion, equity, and long-term accessibility – is just as critical. I initially
                        underestimated the trade-offs in power consumption and latency that come with large external
                        APIs, and how that could impact both the environment and the end user.
                        <br/><br/>
                        One of the key difficulties I encountered was striking the right balance between accuracy and
                        model efficiency. Developing a smaller model meant I had to optimise training data, refine
                        preprocessing techniques, and evaluate trade-offs between model complexity and
                        interpretability. It challenged me to think critically and make principled decisions that aligned
                        with my ethical goals, not just technical performance.
                        <br/><br/>
                        Reflecting on this, I drew on the principles of sustainable engineering that go beyond energy
                        efficiency – including resilience, scalability, and fairness. According to the Engineers Australia
                        Stage 1 Competency Standards, engineers must "develop sustainable solutions through the
                        adoption of appropriate materials, methods, and technologies." My decision to reduce
                        dependency on external APIs and empower users to shape their own translation experience
                        supported this goal.
                        <br/><br/>
                        From this experience, I learned that sustainability in engineering is multi-dimensional. Moving
                        forward, I will approach system design not only with performance in mind but also with a focus
                        on ethical scalability, social impact, and energy efficiency. I now see sustainability as a core
                        design principle, not an afterthought.
                    </p>
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Professional Practice within intercultural and global contexts </h3>
                <div className='mt-5 flex flex-col gap-3 dark:text-white'>
                    <p>
                        In one of my university game development assignments, I collaborated with a partner to cocreate a new game. Initially, everything was progressing well – we exchanged creative ideas,
                        offered each other constructive feedback, and maintained a steady workflow. However, midway
                        through the semester, things unexpectedly shifted. I provided feedback on one of my partner's
                        features, in the same constructive tone we had used earlier, but his reaction was unexpectedly
                        defensive. He called me, audibly upset, and seemed to interpret my feedback as personal
                        criticism.
                    </p>
                    <p>
                        I was initially surprised by his strong emotional response and wasn't sure how to de-escalate
                        the situation. However, I reminded myself that reacting emotionally wouldn't help. I stayed
                        composed and focused on listening. By asking clarifying questions, I was able to better
                        understand his perspective. It became apparent that he hadn't fully read the feedback I sent.
                        Ironically, he began voicing concerns that were already acknowledged or addressed in my
                        original message. Once we slowed things down and walked through each point together, he
                        began to open up, and I noticed our ideas had more alignment than conflict.
                    </p>
                    <p>
                        Prior to this, I believed that clear communication and constructive tone would always prevent
                        misunderstandings. This situation challenged that assumption. I realised that cultural or
                        interpersonal differences – including varying communication styles, stress responses, or past
                        experiences – can heavily influence how feedback is received, even if intentions are positive.
                        The difficulty in this situation wasn't just the conflict itself, but navigating the emotional
                        intensity while maintaining professionalism. I had to practice emotional regulation and
                        empathy, even though I initially felt blindsided. By giving him space to express himself and
                        reaffirming our shared goals, I helped turn the conversation from confrontation into
                        collaboration. I even learned things from his perspective that improved our project in the end.
                    </p>
                    <p>
                        This situation reflects key aspects of Engineers Australia's guidelines on communication and
                        teamwork in diverse professional environments. It reinforced the importance of cultural
                        competence and adaptability – vital traits in global engineering practice, where diverse teams
                        are the norm.
                    </p>
                    <p>
                        Looking back, I learned that professional communication goes beyond clarity – it requires
                        emotional intelligence, patience, and a willingness to bridge misunderstanding with empathy. In
                        future cross-cultural or emotionally tense situations, I'll strive to create psychological safety,
                        clarify intent, and respond with curiosity instead of defensiveness. These are not just
                        communication skills, but essential tools for global engineering leadership.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <a
                    href="public/Cover Letter.pdf"
                    download
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Download My Cover Letter
                </a>
            </div>

            <div className="py-16">
                {/* empty div for spacing */}   
            </div>

            <hr className='border-slate-200'/>

            <CTA/>

        </section>
    )
}

export default About
import { meta, shopify, starbucks, tesla, packserv, jpmorgan} from "../assets/images";
import {
    car,
    contact,
    css,
    c,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    unity,
    java,
    pacman,
    jellyfish,
    pigeon,
    planet
} from "../assets/icons";

import { dove, fishTank, planetVid } from "../videos"

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Lead Developer",
        company_name: "PackServ",
        icon: packserv,
        iconBg: "LightBlue",
        date: "Aug 2023 - Nov 2023",
        points: [
            "Student Project for UTS Software Development Studio.",
            "Led both front-end and back-end development using the WordPress CMS, enhancing site functionality and user experience.",
            "Implementation of Chatbot to assist website visitors, significantly improving customer service.",
            "Implementation of an AI content writing assistant to aid the marketing team in writing sales copy.",
        ],
    },
    {
        title: "Data Analyst",
        company_name: "J.P. Morgan",
        icon: jpmorgan,
        iconBg: "SteelBlue",
        date: "Jun 2022 - Apr 2023",
        points: [
            "Created automation scripts to enhance data quality check workflows",
            "Leveraged SQL for data manipulation and to improve the efficiency of financial reporting processes.",
            "Communication with internal global stakeholders to resolve operational issues.",
        ],
    },
    {
        title: "Financial Analyst",
        company_name: "J.P. Morgan",
        icon: jpmorgan,
        iconBg: "SteelBlue",
        date: "Mar 2020 - Jun 2022",
        points: [
            "Gained experience in a highly analytical and data-intensive environment, demonstrating strong analytical and problem-solving skills.",
            "Showcased attention to detail and the ability to resolve complex issues, akin to debugging and optimising code.",
            "Developed skills in conveying technical information clearly, essential for cross-functional team collaboration.",
            "Created detailed business documentation, crucial for maintaining clear and concise code and technical specifications.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    // {
    //     name: 'GitHub',
    //     iconUrl: github,
    //     link: 'https://github.com/YourGitHubUsername',
    // },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/albertnguyen1',
    }
];

export const projects = [
    {
        iconUrl: pigeon,
        theme: 'btn-back-red',
        name: 'Original 2D Platformer',
        description: 'Nominated for the 2024 UTS Student Games Showcase, this Unity-based game features a custom physics system for movement and collision logic. ' +
            'Click the link below to play!',
        link: 'https://physwiz.itch.io/thedoveofmylife',
        videoUrl: dove
    },
    {
        iconUrl: jellyfish,
        theme: 'btn-back-blue',
        name: '3D Javascript Fish Tank',
        description: 'A web-based 3D fish tank created using HTML, JavaScript, and Three.js, featuring procedural generation and custom shaders for a realistic ocean ambience.',
        videoUrl: fishTank
    },
    {
        iconUrl: planet,
        theme: 'btn-back-pink',
        name: '3D Customisable Planet',
        description: 'A customisable planet built with JavaScript and Three.js, utilizing shaders rendered through WebGL. Ray marching algorithms were used for dynamic terrain generation.',
        videoUrl: planetVid
    },
    {
        iconUrl: pacman,
        theme: 'btn-back-yellow',
        name: 'Pacman Clone',
        description: 'This project, developed from scratch using Unity with C#, includes advanced game mechanics like AI pathfinding and state management.',
    }
];
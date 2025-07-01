
import './Projects.css'
import './ProjectCard.css'
import LiquidGlass from 'liquid-glass-react';
import { Laptop, Code, Paintbrush2, Paintbrush } from 'lucide-react';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import ProjectCard from './ProjectCard.js';
import { SiJavascript } from '@icons-pack/react-simple-icons';
const projectsSoftware = [
    {
        id: 'prj-s1',
        title: 'Hanapp',
        date: 2023,
        content: 'Primitive room scheduling system for automating room request and approval. Submitted for Database Management course.',
        image: '/images/hanappv1.jpg',
        gradient1: 'rgb(43, 43, 50) 30%',
        gradient2: 'rgb(24, 25, 30) 100%',
        icon: ['mysql', 'javascript', 'vuejs'],
        tags: ["Education"],
        skills: ["Programming", "Academics"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/hrvy-ngl-893/hanappv1', of: 'Backend' },
        ]
    },
    {
        id: 'prj-s2',
        title: 'Hanapp V2',
        date: 2024,
        content: 'Complete room scheduling system for automating room request and approval. Submitted for Software Design course.',
        image: '/images/hanappv2.png',
        gradient1: 'rgb(90, 87, 74) 30%',
        gradient2: 'rgb(64, 62, 53) 100%',
        icon: ['mysql', 'javascript', 'react', 'docker', 'figma'],
        tags: ["Education"],
        skills: ["Programming", "Academics"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/hrvy-ngl-893/hanapp_v2', of: 'Backend' },
            { type: 'GitHub', url: 'https://github.com/hekseydis/hanappv2-website', of: 'Frontend' },
        ]
    },
    {
        id: 'prj-s3',
        title: 'LRY Marketing Dashboard',
        date: 2024,
        content: 'Full-stack software solution for SEO business management and content tracking for an Australia-based company.',
        image: '/images/lry.png',
        gradient1: 'rgb(87, 67, 109) 30%',
        gradient2: 'rgb(19, 23, 35) 100%',
        icon: ['mysql', 'javascript', 'react', 'nextjs', 'docker'],
        tags: ['Job'],
        skills: ["Programming"],
        color: 'white',
        links: [
            { type: 'View', url: 'https://hub.lrymarketing.com.au', of: 'Website' }
        ]
    },
    {
        id: 'prj-s4',
        title: 'SolAR',
        date: 2025,
        content: 'Augmented Reality app for simulating solar panel installation based on user\'s parameters. Won <b>third place</b> in the inaugural C2 Design Challenge competition of T.I.P. TechnoCoRe.',
        image: '/images/solAR.jpg',
        gradient1: 'rgb(113, 129, 140) 30%',
        gradient2: 'rgb(39, 43, 46) 100%',
        icon: ['swift', 'kotlin'],
        tags: ['Competition'],
        skills: ["Programming", "Speaking"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/hrvy-ngl-893/solAR', of: 'Swift' },
            { type: 'GitHub', url: 'https://github.com/jmsabt/arTesting.git', of: 'Kotlin' },
        ]
    },
    {
        id: 'prj-s5',
        title: 'RiceFlow',
        date: 2025,
        content: '.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        icon: ['swift'],
        tags: ['Competition'],
        skills: ["Programming", "Speaking"],
        color: 'white',
        links: [
        ]
    },
    {
        id: 'prj-s6',
        title: 'Spatial Capsule',
        date: 2025,
        content: '.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        icon: ['swift'],
        tags: ['Competition'],
        skills: ["Programming"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/hrvy-ngl-893/SpatialCapsule', of: 'Swift' }
        ]
    },
    {
        id: 'prj-s7',
        title: 'Metro Mania',
        date: 2025,
        content: '.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        icon: ['swift'],
        tags: ['Competition'],
        skills: ["Programming"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/hrvy-ngl-893/metro-mania', of: 'Swift' }
        ]
    },
    {
        id: 'prj-s8',
        title: 'Personal Portfolio',
        date: 2025,
        content: '.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        icon: ['react'],
        tags: ['Education'],
        skills: ["Programming"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/hrvy-ngl-893/portfolio-frontend/settings', of: 'Frontend' }
        ]
    },
    {
        id: 'prj-s9',
        title: 'Chatbox Burner',
        date: 2025,
        content: '.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        icon: ['mysql', 'javascript', 'react', 'python', 'django', 'docker'],
        tags: ['Education'],
        skills: ["Programming"],
        color: 'white',
        links: [
            { type: 'GitHub', url: 'https://github.com/jmsabt/chatbox-burner', of: 'Fullstack' }
        ]
    },
]

const projectsHardware = [{
    id: 'prj-9',
    title: 'Maze-solving Robot',
    date: 2024,
    content: 'Created a maze-solving robot using Arduino UNO with a suite of ultrasonic sensors in collaboration with Irish Roxas.',
    image: '/images/inari.JPG',
    gradient1: 'rgba(50, 50, 50, 1) 70%',
    gradient2: 'rgb(35, 35, 35) 100%',
    icon: ['arduino'],
    tags: ["Education"],
    skills: ["Photography", "Speaking"],
    color: 'white',
},]

const projectsPublication = [
    {
        id: 'prj-p1',
        title: 'ICETSIS 2024',
        date: 2021,
        content: 'Fingerprint-enabled student locker system research published in IEEE.',
        image: '/images/clouds.jpg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        skills: ["Academics", "Writing"],
        color: 'white',
    },
    {
        id: 'prj-p2',
        title: 'ARAW 2025',
        date: 2021,
        content: 'Research pending acceptance and publication in PUP\'s annual journal on exploring LRT-2 Express Line using a data science approach.',
        image: '/images/train.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        skills: ["Academics", "Writing"],
        color: 'white',
    },
]

const projectsArt = [
    {
        id: 'prj-d1',
        title: 'Calligraphy',
        date: 2021,
        content: '.',
        image: '/images/calligraphy.jpeg',
        gradient1: 'rgb(164, 164, 164) 0%',
        gradient2: 'rgb(106, 104, 98) 100%',
        lucide: [Paintbrush],
        skills: ["Art"],
        color: 'white',
    },
    {
        id: 'prj-d2',
        title: 'Photography',
        date: 2021,
        content: '.',
        image: '/images/overpass.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },
    {
        id: 'prj-d3',
        title: 'UI/UX',
        date: 2025,
        content: '.',
        image: '/images/inari.JPG',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },
    {
        id: 'prj-d4',
        title: 'Graphic Design',
        date: 2025,
        content: '.',
        image: '/images/cubao.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },
]

function Projects({ theme }) {
    return (
        <>
            <div className="projects-container">
                <div className='projects-content'>
                    <div className='projects-toolbar'>

                    </div>
                    <div>
                        <h2 className='prj-h1' style={{ color: `${theme === 'light' ? 'black' : 'white'}` }}>Software Development</h2>
                        <div className='projects-card-container'>
                            {projectsSoftware.map((card, id) => (
                                <div key={card.id} id={card.id}>
                                    <ProjectCard
                                        title={card.title}
                                        content={card.content}
                                        date={card.date}
                                        image={card.image}
                                        gradient1={card.gradient1}
                                        gradient2={card.gradient2}
                                        icon={card.icon}
                                        lucide={card.lucide}
                                        skills={card.skills}
                                        tags={card.tags}
                                        color={card.color}
                                        theme={theme}
                                        links={card.links}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='prj-h1' style={{ color: `${theme === 'light' ? 'black' : 'white'}` }}>Hardware Inventions</h2>
                        <div className='projects-card-container'>
                            {projectsHardware.map((card, id) => (
                                <div key={card.id} id={card.id}>
                                    <ProjectCard
                                        title={card.title}
                                        content={card.content}
                                        date={card.date}
                                        image={card.image}
                                        gradient1={card.gradient1}
                                        gradient2={card.gradient2}
                                        icon={card.icon}
                                        lucide={card.lucide}
                                        skills={card.skills}
                                        tags={card.tags}
                                        color={card.color}
                                        theme={theme}
                                        link={card.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='prj-h1' style={{ color: `${theme === 'light' ? 'black' : 'white'}` }}>Publications</h2>
                        <div className='projects-card-container'>
                            {projectsPublication.map((card, id) => (
                                <div key={card.id} id={card.id}>
                                    <ProjectCard
                                        title={card.title}
                                        content={card.content}
                                        date={card.date}
                                        image={card.image}
                                        gradient1={card.gradient1}
                                        gradient2={card.gradient2}
                                        icon={card.icon}
                                        lucide={card.lucide}
                                        skills={card.skills}
                                        tags={card.tags}
                                        color={card.color}
                                        theme={theme}
                                        link={card.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className='prj-h1' style={{ color: `${theme === 'light' ? 'black' : 'white'}` }}>Design</h2>
                        <div className='projects-card-container'>
                            {projectsArt.map((card, id) => (
                                <div key={card.id} id={card.id}>
                                    <ProjectCard
                                        title={card.title}
                                        content={card.content}
                                        date={card.date}
                                        image={card.image}
                                        gradient1={card.gradient1}
                                        gradient2={card.gradient2}
                                        icon={card.icon}
                                        lucide={card.lucide}
                                        skills={card.skills}
                                        tags={card.tags}
                                        color={card.color}
                                        theme={theme}
                                        link={card.link}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <LiquidGlass
                style={{
                    top: '6%',
                    left: '85px',
                    position: 'fixed',
                    display: 'inline',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    zIndex: 10,
                    backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: '60px',

                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.05}
                saturation={140}
                aberrationIntensity={4}
                cornerRadius={60}
                padding="8px"

                className='header-title'>
                <h2 style={{ color: `${theme === 'light' ? 'black' : 'white'}`, textAlign: 'left', fontSize: '24px', margin: '4px 8px' }}>Projects</h2>
            </LiquidGlass>
        </>
    );
}
export default Projects;
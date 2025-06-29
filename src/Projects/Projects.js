
import './Projects.css'
import './ProjectCard.css'
import LiquidGlass from 'liquid-glass-react';
import { Laptop, Code } from 'lucide-react';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import ProjectCard from './ProjectCard.js';
import { SiJavascript } from '@icons-pack/react-simple-icons';
const projectsSoftware = [
    {
        id: 'prj-1',
        title: 'Hanapp',
        date: 2023,
        content: 'Primitive room scheduling system for automating room request and approval. Submitted for Database Management course.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        icon: ['javascript'],
        skills: ["Programming", "Academics"],
        color: 'white',
        links: [
            {type: 'Github', url: 'https://github.com/hrvy-ngl-893/hanappv1'},
        ]
    },
    {
        id: 'prj-2',
        title: 'Hanapp V2',
        date: 2024,
        content: 'Complete room scheduling system for automating room request and approval. Submitted for Software Design course.',
        image: '/images/inari.JPG',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        skills: ["Programming", "Speaking"],
        color: 'white',
    },
    {
        id: 'prj-3',
        title: 'thre',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/inari.JPG',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },
]

const projectsHardware = [    {
        id: 'prj-9',
        title: 'thre',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/inari.JPG',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },]

const projectsPublication = [
        {
        id: 'prj-14',
        title: 'thre',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/inari.JPG',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },
]

const projectsArt = [
        {
        id: 'prj-20',
        title: 'thre',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/inari.JPG',
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
                        <h2 className='prj-h1' style={{ color: `${theme === 'light' ? 'black' : 'white'}` }}>Art</h2>
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
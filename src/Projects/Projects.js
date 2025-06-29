
import './Projects.css'
import LiquidGlass from 'liquid-glass-react';
import { Laptop, Code } from 'lucide-react';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import ProjectCard from './ProjectCard.js';
const projects = [
    {
        id: 'prj-1',
        title: 'Engineer',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/sunset.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    },
    {
        id: 'prj-2',
        title: 'Engineer',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/inari.JPG',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Photography", "Speaking"],
        color: 'white',
    }
]
function Projects({ theme }) {
    const [sortOption, setSortOption] = useState('id');
    const [tagFilters, setTagFilters] = useState([]);

    const filteredAndSortedCards = useMemo(() => {
        let filtered = [...projects];

        // FILTERING
        if (tagFilters.length > 0) {
            filtered = filtered.filter(card =>
                card.tags?.some(tag => tagFilters.includes(tag))
            );
        }

        // SORTING
        switch (sortOption) {
            case 'title':
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'date':
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            default:
                filtered.sort((a, b) => a.id.localeCompare(b.id));
        }

        return filtered;
    }, [sortOption, tagFilters]);
    return (
        <>
            <div className="projects-container">
                <div className='projects-toolbar'>

                </div>

                <div className='projects-card-container'>

                    {projects.map((card, id) => (
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
                <h1 style={{ color: `${theme === 'light' ? 'black' : 'white'}`, textAlign: 'left', fontSize: '24px', margin: '4px 8px' }}>Projects</h1>
            </LiquidGlass>
        </>
    );
}
export default Projects;
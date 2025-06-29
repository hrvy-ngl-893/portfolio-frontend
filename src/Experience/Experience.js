import { BookMarked, Code, Laptop, Scale, School } from 'lucide-react';
import './Experience.css'
import './ExperienceCardContent.css'
import React, { useRef, useEffect, useState, useMemo } from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceFilter from './ExperienceFilter';
import LiquidGlass from 'liquid-glass-react';

const cards = [
    {
        id: 'card-1',
        title: 'SSC President',
        content: 'Served T.I.P. Manila\'s students as the chief executive of the Supreme Student Council for A.Y. 2024-2025.',
        date: 2024,
        image: '/images/gavel.png',
        gradient1: 'rgb(141, 135, 129) 100%',
        gradient2: 'rgba(105, 94, 83,1) 100%',
        lucide: [School, Scale],
        tags: ["Leadership", "Certification"],
        skills: ["Interpersonal", "Speaking"],
        color: 'white',
        link: 'http://www.google.com'
    },
    {
        id: 'card-2',
        title: 'Full-stack Developer',
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        date: 2021,
        image: '/images/cubao.jpeg',
        gradient1: 'rgb(255, 240, 227) 70%',
        gradient2: 'rgb(255, 221, 198) 100%',
        lucide: [Laptop, Code],
        tags: ["Job"],
        skills: ["Programming", "Research"],
        color: 'white',
    },
    {
        id: 'card-3',
        title: 'Engineer',
        date: 2021,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/lucban.jpeg',
        // gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Music", "Art", "Writing"],
        color: 'white',
    },
    {
        id: 'card-4',
        title: 'Engineer',
        date: 2001,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/manila.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Interpersonal", "Speaking"],
        color: 'white',
    },
    {
        id: 'card-5',
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
        id: 'card-6',
        title: 'Engineer',
        date: 2029,
        content: 'Hands-on in robotics, embedded systems, and innovation.',
        image: '/images/overpass.jpeg',
        gradient1: 'rgba(50, 50, 50, 1) 70%',
        gradient2: 'rgba(10, 10, 10, 1) 100%',
        lucide: [Laptop, Code],
        tags: ["Certification"],
        skills: ["Design", "Academics"],
        color: 'white',
    },
];


function Experience({ theme }) {
    const [sortOption, setSortOption] = useState('id');
    const [tagFilters, setTagFilters] = useState([]);

    const filteredAndSortedCards = useMemo(() => {
        let filtered = [...cards];

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
        <div class="exp-container">
            <div className='exp-toolbar'>
                <LiquidGlass
                    style={{
                        top: '6%',
                        left: '100px',
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
                    <h1 style={{ color: `${theme === 'light' ? 'black' : 'white'}`, textAlign: 'left', fontSize: '24px', margin: '4px 8px' }}>Experience</h1>
                </LiquidGlass>
            </div>

            <div className='exp-card-container'>

                {filteredAndSortedCards.map((card) => (
                    <div key={card.id} id={card.id}>
                        <ExperienceCard
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
            <ExperienceFilter
                sortOption={sortOption}
                setSortOption={setSortOption}
                tagFilters={tagFilters}
                setTagFilters={setTagFilters}
                theme={theme}
            />
        </div>

    );
}
export default Experience;
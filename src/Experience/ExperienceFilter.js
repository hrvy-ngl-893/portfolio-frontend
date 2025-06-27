
import { useEffect, useState, useRef } from 'react';
import LiquidGlass from 'liquid-glass-react'

import './ExperienceFilter.css';

import { Filter, Moon, Sun } from 'lucide-react';

const Tags = {
    Seminar: "Seminar",
    Event: "Event",
    Leadership: "Leadership",
    Volunteer: "Volunteer",
    Competition: "Competition",
    Education: "Education",
    Certification: "Certification",
    Job: "Job",
}

const Skills = {
    Programming: 'Programming',
    Leadership: 'Leadership',
    Research: 'Research',
    Interpersonal: 'Interpersonal',
    Speaking: 'Speaking',
    Music: 'Music',
    Art: 'Art',
    Writing: 'Writing',
    Photography: 'Photography',
    Design: 'Design',
    Academics: 'Academics'
}



function ExperienceFilter({ sortOption, setSortOption, tagFilters, setTagFilters, theme }) {
    const [showFilter, setShowFilter] = useState(false)
    const toggleFilter = () => {
        setShowFilter(prev => prev === false ? true : false);
    };

    const handleSortChange = (e) => setSortOption(e.target.value);

    const handleTagChange = (tag) => {
        if (tagFilters.includes(tag)) {
            setTagFilters(tagFilters.filter(t => t !== tag));
        } else {
            setTagFilters([...tagFilters, tag]);
        }
    };

    const dummy = () => console.log();

    return (
        <>
            <div onClick={toggleFilter} >

                {!showFilter ?
                    <LiquidGlass
                        style={{
                            top: '5%',
                            left: 'calc(100% - 40px)',
                            transform: 'translate(-50%, 0%)',
                            transformOrigin: 'center',
                            position: 'fixed',
                            display: 'flex',
                            zIndex: 10,
                            background: 'rgba(0,0,0,0.03)',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '32px',
                        }}

                        elasticity={0.5}
                        displacementScale={30}
                        blurAmount={0.1}
                        saturation={140}
                        aberrationIntensity={3}
                        cornerRadius={32}
                        padding="6px 8px"

                        className={`filter-glass`}>

                        <Filter size={14} style={{ cursor: 'pointer' }} />

                    </LiquidGlass>
                    : <></>
                }
            </div>

            <div className='filter-options' >
                {showFilter ?
                    <LiquidGlass
                        style={{
                            top: '16.9%',
                            left: 'calc(100% - 130px)',
                            transform: 'translate(-50%, 0%)',
                            transformOrigin: 'center',
                            position: 'fixed',
                            display: 'flex',
                            zIndex: 10,
                            background: 'rgba(0,0,0,0.03)',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: '32px',
                            backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'}`
                        }}
                        onClick={dummy}
                        elasticity={0.5}
                        displacementScale={-10}
                        blurAmount={0.1}
                        saturation={140}
                        aberrationIntensity={3}
                        cornerRadius={24}
                        padding="12px"

                        className={`filter-glass`}>
                        <div className='sort-label'>
                            <label>
                                Sort:
                                <select value={sortOption} onChange={handleSortChange}>
                                    <option value="id" className='select-default'>Default</option>
                                    <option value="title">Alphabetical</option>
                                    <option value="date">By Date</option>
                                </select>
                            </label>
                            <div className='filter-icon' onClick={toggleFilter}>
                                <Filter  size={14} style={{  cursor: 'pointer', verticalAlign: 'middle' }} />
                            </div>
                        </div>
                        
                        
                        <div className='filter-tags-container'>
                            <span>Filter Tags:</span>
                            {Object.values(Tags).map(tag => (
                                <label key={tag} style={{ display: 'block' }}>
                                    <input
                                        className='filter-options'
                                        type="checkbox"
                                        checked={tagFilters.includes(tag)}
                                        onChange={() => handleTagChange(tag)}
                                    />
                                    {tag}
                                </label>
                            ))}
                        </div>

                    </LiquidGlass>
                    : <></>}
            </div>
        </>
    );
}

export default ExperienceFilter;
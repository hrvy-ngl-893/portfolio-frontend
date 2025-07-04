import './Experience.css';
import './ExperienceCard.css';
import React, { useMemo, useState, useEffect } from 'react';
import ViewButton from '../Components/ViewButton';

import {
    GraduationCap,
    Briefcase,
    Award,
    BookOpen,
    Users,
    Code,
    Calendar,
    CheckCircle,
    Code2,
    HandHelping,
    Microscope,
    MessageCircle,
    Mic,
    Music,
    Brush,
    Pencil,
    Camera,
    Palette,
    BookPlus,
    Eye
} from 'lucide-react';

const TagIcons = {
    Seminar: BookOpen,
    Event: Calendar,
    Leadership: HandHelping,
    Volunteer: Users,
    Competition: Award,
    Education: GraduationCap,
    Certification: CheckCircle,
    Job: Briefcase,

};

const SkillIcons = {
    Programming: Code2,           
    Research: Microscope,        
    Interpersonal: MessageCircle, 
    Speaking: Mic,        
    Music: Music,               
    Art: Brush,                 
    Writing: Pencil,            
    Photography: Camera,        
    Design: Palette,            
    Academics: BookPlus,        
};


function ExperienceCard({ title, content, date, image, gradient1, gradient2, icon = [], lucide = [], tags = [], skills = [], color, isActive, theme, link }) {
    
    
    return (
        <div className="exp-card">
            <div className="card-overlay"
                style={{
                    background: `linear-gradient(to bottom,  ${gradient1}, ${gradient2}`
                }} />
            <div className="card-image-mask"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="card-content" style={{ color: color }}>
                {link && (
                    <div className='card-link'>

                        <div className='link-spacer' />


                        <a href={link} target='_blank'><Eye style={{width:'16px',verticalAlign: 'middle',
                            marginRight: '4px',}}/>View</a>

                    </div>)}
                <div className='card-spacer' />
                <div className="card-icons">
                    {icon.map((i, index) => (
                        <i
                            key={index}
                            className={`devicon-${i}-plain`}
                            style={{ marginRight: '8px' }}
                        />
                    ))}

                    {lucide.map((IconComponent, index) => (
                        <IconComponent key={index} className="lucide-icon" style={{filter: `drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))`}}/>
                    ))}
                </div>
                <h1 className='card-h1'>{title}</h1>
                <span className='card-subtitle'>EXPERIENCE DETAILS</span>
                <div className="card-tags">
                    <span className='tag date'>{date}</span>
                    {tags.map((t, index) => {
                        const TagIcon = TagIcons[t];
                        return (
                            <span key={index} className={`tag ${t}`}>
                                {TagIcon && <TagIcon size={12} style={{ marginRight: '4px', marginBottom: '2px', verticalAlign: 'middle' }} />}
                                {t}
                            </span>
                        );
                    })}
                </div>
                <span className='card-subtitle'>SKILLS USED</span>
                <div className="card-tags">
                    {skills.map((s, index) => {
                        const SkillIcon = SkillIcons[s];
                        return (
                            <span key={index} className={`tag ${s}`}>
                                {SkillIcons && <SkillIcon size={12} style={{ marginRight: '4px', marginBottom: '2px', verticalAlign: 'middle' }} />}
                                {s}
                            </span>
                        );
                    })}
                </div>
                <p className='card-p'>{content}</p>
            </div>
        </div>

    );
}
export default ExperienceCard;

/*
    const themedGradient = useMemo(() => {
        return theme === 'light'
            ? 'rgb(255, 255, 255) 70%'
            : '#121212 70%';
    }, [theme]);

    const themedGradient2 = useMemo(() => {
        return theme === 'light'
            ? 'rgb(225, 225, 225) 100%'
            : 'rgb(20, 20, 20) 100%';
    }, [theme]);


    const themedColor = useMemo(() => {
        return theme === 'light'
            ? 'black'
            : 'white';
    }, [theme]);

*/
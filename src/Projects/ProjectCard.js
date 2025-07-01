import React from "react";
import { useState } from "react";
import './Projects.css';
import './ProjectCard.css';
import GithubButton from '../Components/GithubButton.js'
import ViewButton from '../Components/ViewButton.js'
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

function ProjectCard({ title, content, date, image, gradient1, gradient2, icon = [], lucide = [], tags = [], skills = [], color, theme, links = [] }) {
    return (
        <div className="prj-card">
            <div className="card-overlay"
                style={{
                    background: `linear-gradient(to bottom,  ${gradient1}, ${gradient2}`
                }} />
            
            <div className="card-image-mask"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="card-content" style={{ color: color }}>
                {links.length > 0 && (
                    <div className="card-links">
                        <div className="link-spacer" />

                        {links.map((link, index) => {
                            if (link.type === 'GitHub') {
                                return <GithubButton key={index} link={link.url} of={link.of} theme={theme} />;
                            } else if (link.type === 'View') {
                                return <ViewButton key={index} link={link.url} of={link.of} theme={theme} />;
                            }
                            // } else if (link.type === 'Figma') {
                            //     return <FigmaButton key={index} link={link.url} theme={theme} />;
                            // }
                            return null; 
                        })}
                    </div>
                )}
                <div className='card-spacer' />
                <div className="card-icons">
                    {icon.map((i, index) => (
                        <i
                            key={index}
                            className={`devicon-${i}-plain`}
                            style={{ marginRight: '8px', fontSize: '2rem' }}
                        />
                    ))}

                    {lucide.map((IconComponent, index) => (
                        <IconComponent key={index} className="lucide-icon"  style={{filter: `drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))`}}/>
                    ))}
                </div>
                <h1 className='card-h1'>{title}</h1>
            
                <span className='card-subtitle'>PROJECT DETAILS</span>
                <div className="card-tags">
                    
                    <span className='tag date' style={{ display: `${date !== null ? 'block' : 'none' }`}}>{date}</span>
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
                <p className='card-p' dangerouslySetInnerHTML={{ __html: content }}/>
            </div>
        </div>

    );
}
export default ProjectCard;

import LiquidGlass from "liquid-glass-react";

import './Resources.css'
import TopBarLinks from '../Navigation/TopBarLinks'
import { useState } from "react";
import PDFViewer from '../Components/PDFViewer.js'
import { File, Frame, FrameIcon, Globe, GraduationCap, UserSquare } from "lucide-react";
import ResourceTile from "./ResourceTile.js";

const resourceTiles = [
    {
        id: 'rsc-1',
        title: 'Resume',
        date: 2025,
        content: 'Hire me, please.',
        image: '/images/hanappv2.png',
        gradient1: 'rgb(90, 87, 74) 30%',
        gradient2: 'rgb(64, 62, 53) 100%',
        lucide: [File],
        skills: ["Programming", "Academics"],
        color: 'white',
        links: [
            { type: 'View', url: '/pdf/PDF.pdf', of: 'Document' },
        ]
    },
    {
        id: 'rsc-2',
        title: 'Curriculum Vitae',
        date: 2024,
        content: 'Something to read.',
        image: '/images/hanappv2.png',
        gradient1: 'rgb(90, 87, 74) 30%',
        gradient2: 'rgb(64, 62, 53) 100%',
        lucide: [GraduationCap],
        tags: ["Education"],
        skills: ["Programming", "Academics"],
        color: 'white',
        links: [
            { type: 'View', url: '/pdf/curriculumviae.pdf', of: 'Document' },
        ]
    },
    {
        id: 'rsc-3',
        title: 'Photo',
        date: 2024,
        content: 'Use for professional purposes or on inviataions. Crop as needed. Do not distort.',
        image: '/images/hanappv2.png',
        gradient1: 'rgb(90, 87, 74) 30%',
        gradient2: 'rgb(64, 62, 53) 100%',
        lucide: [UserSquare],
        tags: ["Education"],
        skills: ["Programming", "Academics"],
        color: 'white',
        links: [
            { type: 'View', url: '/images/portrait.jpeg', of: 'Photo' },
        ]
    },
    {
        id: 'rsc-4',
        title: 'Photo',
        date: 2024,
        content: 'Use for invitations.',
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
        id: 'rsc-5',
        title: 'Contact Card',
        date: 2024,
        content: 'Contact Cardooo.',
        image: '/images/wave.jpeg',
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
]

function Resources({ theme }) {

    return (
        <>
            <div className="resources-container">
                <div className="resources-tile-container">
                    {resourceTiles.map((card, id) => (
                        <div key={card.id} id={card.id}>
                            <ResourceTile
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
                    <div className="card-spacer"/>
                </div>
                
            </div>


            <LiquidGlass
                style={{
                    top: '6%',
                    left: '95px',
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
                <h1 style={{ color: `${theme === 'light' ? 'black' : 'white'}`, textAlign: 'left', fontSize: '24px', margin: '4px 8px' }}>Resources</h1>
            </LiquidGlass>

            {/* <PDFViewer file={selectedFile}/> */}

            <TopBarLinks theme={theme} />
        </>
    );
}
export default Resources;
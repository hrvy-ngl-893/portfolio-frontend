import './Experience.css';
import React, { useMemo } from 'react';

function ExperienceCard({ title, content, image, gradient1, gradient2, icon = [], lucide = [], color }) {
    return (
        <>
            <div className="exp-card">
                <div className="card-overlay"
                    style={{
                        background: `linear-gradient(to bottom,  ${gradient1}, ${gradient2}`
                    }} />
                <div className="card-image-mask"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="card-content" style={{ color: color }}>
                    <div className="card-icons">
                        {icon.map((i, index) => (
                            <i
                                key={index}
                                className={`devicon-${i}-plain`}
                                style={{ marginRight: '8px' }}
                            />
                        ))}
                    </div>
                    <div className="card-icons">
                        {lucide.map((IconComponent, index) => (
                            <IconComponent key={index} className="lucide-icon" />
                        ))}

                    </div>
                    <h1 className='card-h1'>{title}</h1>
                    <p className='card-p'>{content}</p>
                </div>
            </div>
        </>
    );
}
export default ExperienceCard;
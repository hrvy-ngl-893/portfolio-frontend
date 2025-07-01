import './Main.css';
import React, { useMemo } from 'react';


function MainMediumTile({ title, content, image, gradient1, gradient2, icon = [], lucide = [], color }) {


    return (
    <>
    <div className="tile medium">
        <div className="tile-overlay"
                    style={{
                        background: `linear-gradient(to bottom,  ${gradient1}, ${gradient2}`
                    }} />
                <div className="tile-image-mask"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <div className="tile-content" style={{ color: color }}>
                    <div className="tile-icons">
                        {icon.map((i, index) => (
                            <i
                                key={index}
                                className={`devicon-${i}-plain`}
                                style={{ marginRight: '8px' }}
                            />
                        ))}
                    </div>
                    <div className="tile-icons">
                        {lucide.map((IconComponent, index) => (
                            <IconComponent key={index} className="lucide-icon" style={{filter: `drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))`}}/>
                        ))}

                    </div>
                    <h1 className='tile-h1'>{title}</h1>
                    <p className='tile-p'>{content}</p>
                </div>
    </div>
    </>
    );
}
export default MainMediumTile;
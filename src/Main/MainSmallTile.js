import './Main.css';
import React, { useMemo } from 'react';


function MainSmallTile({ title, content, image, gradient1, gradient2, icon = [], lucide = [], color }) {
    function capitalizeFirstLetter(string) {
        if (string === 'amazonwebservices') {
        return 'Amazon Web Services';
        } if (string === 'javascript') {
        return 'JavaScript';
        } else {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
    return (
        <>
            <div className="tile small">
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
                                style={{ marginRight: '8px', position: 'relative',}}
                            >
                                <span className="tooltiptext">{capitalizeFirstLetter(i)}</span>
                            </i>
                        ))}
                    </div>
                    <div className="tile-icons">
                        {lucide.map((IconComponent, index) => (
                            <IconComponent key={index} className="lucide-icon" style={{ filter: `drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))` }} />
                        ))}

                    </div>
                    <h1 className='tile-h1'>{title}</h1>
                    <p className='tile-p'>{content}</p>
                </div>
            </div>
        </>
    );
}
export default MainSmallTile;
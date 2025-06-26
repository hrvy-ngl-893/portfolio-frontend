import './Main.css';
import React, { useMemo } from 'react';


function MainSmallTile({ title, content, image, gradient1, gradient2, icon = [], color }) {
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
                                style={{ marginRight: '8px' }}
                            />
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
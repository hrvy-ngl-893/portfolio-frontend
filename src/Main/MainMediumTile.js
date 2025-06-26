import './Main.css';
import React, { useMemo } from 'react';


function MainMediumTile({title, content, image}) {


    return (
    <>
    <div className="tile medium" style={{backgroundImage: `url(${image})`}}>
        <div className="tile-overlay" >
            <div className="tile-content">
                <div className='medium-spacer'></div>
                <h1 className='tile-h1'>{title}</h1>
                <p className='tile-p'>{content}</p>
            </div>
        </div>
    </div>
    </>
    );
}
export default MainMediumTile;
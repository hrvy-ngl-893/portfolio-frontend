import './Main.css';
import React, { useMemo } from 'react';

function MainSmallTile({title, content, image, backgroundColor}) {


    return (
    <>
    <div className="tile small" style={{backgroundImage: `url(${image})`}}>

        <h1 className='tile-h1'>{title}</h1>
        <p className='tile-p'>{content}</p>
    </div>
    </>
    );
}
export default MainSmallTile;
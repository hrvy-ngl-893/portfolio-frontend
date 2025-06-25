import './Main.css';

import React, { useMemo } from 'react';
import MainMediumTile from './MainMediumTile';
import MainSmallTile from './MainSmallTile';
function Main() {
    return (
    <>
    <div className='main-container'>
        <div className="main-tile-container">
            <div className="tile large" style={{backgroundImage: `url(/images/arlegui.jpeg)`}}>
                <span className='large-title'>Harvy Angelo D. Tan</span>
            </div>

        <MainSmallTile
          title="Small Title 1" 
          content="This is the first tile's content." 
          image="/images/800x600.png" 
        />
        <MainSmallTile
          title="Small Title 2" 
          content="This is the first tile's content." 
          image="/images/800x600.png" 
        />
        <MainMediumTile
          title="Tile Title 1" 
          content="This is the first tile's content." 
          image="/images/800x600.png" 
        />
            <MainMediumTile />
        </div>
    </div>
    </>
    );
}
export default Main;
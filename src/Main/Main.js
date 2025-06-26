import './Main.css';

import React, { useMemo } from 'react';
import MainMediumTile from './MainMediumTile';
import MainSmallTile from './MainSmallTile';

function Main() {
    return (
        <>
            <div className='main-container'>
                <div className="main-tile-container">
                    <div className="tile large" >
                        <div className="tile-overlay"
                            style={{
                                background: `linear-gradient(to bottom,  #a9a297 70%, #908f8c 100%);`
                            }} />
                        <div
                            className="tile-image-mask"
                            style={{ backgroundImage: `url(/images/arlegui.jpeg)` }}
                        />
                        <div className="tile-content">
                            <h1 className='tile-h1'>Hello, World</h1>
                            <p className='tile-p'>My name is Harvy Angelo D. Tan. Welcome to my portfolio.</p>
                        </div>

                    </div>

                    <MainSmallTile
                        title="Developer"
                        content="Proficient in."
                        image="/images/arlegui.jpeg"
                        gradient1="#a4a4a4 70%"
                        gradient2="#525252 100%"
                        icon={['swift', 'python', 'javascript']}
                        color='white'
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
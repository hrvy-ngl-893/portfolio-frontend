import './Main.css';

import React, { useMemo } from 'react';
import MainMediumTile from './MainMediumTile';
import MainSmallTile from './MainSmallTile';
import { Book, Globe, BookUser, Paintbrush, Pen, Camera, Mail, Piano, PianoIcon, Computer, Laptop, BookMarked } from 'lucide-react';
function Main() {
    return (
        <>
            <div className='main-container'>
                <div className="main-tile-container">
                    <div className="tile large" >
                        <div className="tile-overlay"
                            style={{
                                background: `linear-gradient(to bottom,rgb(93, 35, 35) 60%,rgb(43, 23, 23) 100%)`
                            }} 
                        />
                        <div
                            className="tile-image-mask"
                            style={{ backgroundImage: `url(/images/walk.JPG)` }}
                        />
                        <div className="tile-content" style={{ color: 'white' }}>
                            <div className="tile-icons">
                                <Globe className="lucide-icon" />
                            </div>
                            <h1 className='tile-h1'>Hello, World</h1>
                            <p className='tile-p'>My name is <b>Harvy Angelo D. Tan</b>. Welcome to my <b>portfolio</b>.</p>
                        </div>

                    </div>

                    <MainSmallTile
                        title="Developer"
                        content="Computer Engineering undergraduate proficient in Swift, Python, and JavaScript."
                        image="/images/code.jpeg"
                        gradient1="#23395d 70%"
                        gradient2="#17202b 100%"
                        icon={['swift', 'python', 'javascript']}
                        color='white'
                    />
                    <MainSmallTile
                        title="Scholar"
                        content="Involved in research, hackathons, and a DOST scholar."
                        image="/images/arlegui.jpeg"
                        gradient1="rgba(130, 119, 108, 1) 70%"
                        gradient2="rgba(105, 94, 83,1) 100%"
                        lucide={[BookMarked, Laptop]}
                        color='white'
                    />
                    <MainMediumTile
                        title="Creative"
                        content="I like to make things on the side. Mostly photography and digital graphics. Music production and writing sometimes."
                        image="/images/calligraphy.jpeg"
                        gradient1="rgba(255, 250, 240, 1) 0%"
                        gradient2="rgba(176, 171, 160, 1) 100%"
                        lucide={[Pen, Camera, PianoIcon]}
                        color='white'

                    />
                    <MainMediumTile
                        title="Contact Me!"
                        content={<a href='mailto:harvyangelo.tan@gmail.com' style={{ color: 'white' }}><Mail style={{width: '20px', height: '15px', justifyContent: 'center', marginRight: '4px'}}></Mail>harvyangelo.tan@gmail.com</a>}
                        image="/images/unmei.jpg"
                        gradient1="rgba(142, 237, 140, 1) 0%"
                        gradient2="rgba(118, 156, 117, 1) 100%"
                        lucide={[BookUser]}
                        color='white' />
                </div>
            </div>
        </>
    );
}
export default Main;
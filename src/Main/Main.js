import './Main.css';

import React, { useMemo } from 'react';
import MainMediumTile from './MainMediumTile';
import MainSmallTile from './MainSmallTile';
import LiquidGlass from 'liquid-glass-react';
import { Book, Globe, BookUser, Pen, Camera, Mail, PianoIcon, Laptop, BookMarked } from 'lucide-react';
import TopBarLinks from '../Navigation/TopBarLinks';
function Main({theme}) {
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
                                <Globe className="lucide-icon" style={{filter: `drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))`}} />
                            </div>
                            <h1 className='tile-h1'>Hello, World</h1>
                            <p className='tile-p'>My name is <b>Harvy Angelo D. Tan</b>. Welcome to my <b>portfolio</b>.</p>
                        </div>

                    </div>

                    <MainSmallTile
                        title="Developer"
                        content="Proficient in Swift, Python, and JavaScript with professional experience, side projects, and competition-winning projects."
                        image="/images/code.jpeg"
                        gradient1="#23395d 70%"
                        gradient2="#17202b 100%"
                        icon={['swift', 'python', 'javascript', 'amazonwebservices', 'arduino', 'docker']}
                        color='white'
                    />
                    <MainSmallTile
                        title="Scholar"
                        content="A DOST Scholar involved in research, hackathons, and undergraduate studies taking up BS Computer Engineering at T.I.P. Manila."
                        image="/images/slc.jpeg"
                        gradient1="rgb(224, 211, 136) 70%"
                        gradient2="rgb(122, 102, 47) 100%"
                        lucide={[BookMarked, Laptop]}
                        color='white'
                    />
                    <MainMediumTile
                        title="Creative"
                        content="I like to make things on the side. Mostly photography and digital graphics. Music production and writing sometimes. I also like to do Japanese Calligraphy."
                        image="/images/calligraphy.jpeg"
                        gradient1="rgba(255, 250, 240, 1) 0%"
                        gradient2="rgba(176, 171, 160, 1) 100%"
                        lucide={[Pen, Camera, PianoIcon]}
                        color='white'

                    />
                    <MainMediumTile
                        title="Contact Me!"
                        content={<a href='mailto:harvyangelo.tan@gmail.com' style={{ color: 'white' }}><Mail style={{ width: '20px', height: '15px', justifyContent: 'center', marginRight: '4px' }}></Mail>harvyangelo.tan@gmail.com</a>}
                        image="/images/unmei.jpg"
                        gradient1="rgba(142, 237, 140, 1) 0%"
                        gradient2="rgba(118, 156, 117, 1) 100%"
                        lucide={[BookUser]}
                        color='white' />
                </div>
            </div>
            <LiquidGlass
                    style={{
                        top: '6%',
                        left: '70px',
                        position: 'fixed',
                        display: 'inline',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        zIndex: 100,
                        backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                        borderRadius: '60px',

                    }}

                    elasticity={0.5}
                    displacementScale={20}
                    blurAmount={0.05}
                    saturation={140}
                    aberrationIntensity={4}
                    cornerRadius={30}
                    padding="8px"

                    className='header-title'>
                    <h1 style={{ color: `${theme === 'light' ? 'black' : 'white'}`, textAlign: 'left', fontSize: '24px', margin: '4px 8px' }}>Home</h1>
                </LiquidGlass>
                <TopBarLinks theme={theme}/>
        </>
    );
}
export default Main;
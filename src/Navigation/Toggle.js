
import { useEffect, useState, useRef } from 'react';
import LiquidGlass from 'liquid-glass-react'

import './Toggle.css';

import { Moon, Sun } from 'lucide-react';


function Toggle({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            <LiquidGlass
                style={{
                    position: 'fixed',
                    top: 'calc(100% - 50px)',
                    left: '50px',
                    zIndex: 10,
                    backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '32px',
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.1}
                saturation={140}
                aberrationIntensity={3}
                cornerRadius={32}
                padding="16px"

                className={`toggle-glass`}>

                {theme === 'dark'
                    ? <Moon style={{ color: `${theme === 'light' ? 'black' : 'white'}` }} />
                    : <Sun style={{ color: `${theme === 'light' ? 'black' : 'white'}` }} />}
            </LiquidGlass>
        </div>
    );
}

export default Toggle;
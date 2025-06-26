
import { useEffect, useState, useRef } from 'react';
import LiquidGlass from 'liquid-glass-react'

import './Toggle.css';

import { Moon, Sun } from 'lucide-react';


function BottomToggle({ theme, setTheme }) {
    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
    <div onClick={toggleTheme} >
        <LiquidGlass
            style={{

                top: '92%',
                left: 'calc(100% - 40px)',
                transform: 'translate(-50%, 0%)',
                transformOrigin: 'center',
                position: 'fixed',
                display: 'flex',
                zIndex: 10,
                background: 'rgba(0,0,0,0.03)',
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
                ? <Sun style={{ color: 'white', cursor: 'pointer' }} />
                : <Moon style={{ color: 'white', cursor: 'pointer' }} />}
        </LiquidGlass>
    </div>
    );
}

export default BottomToggle;
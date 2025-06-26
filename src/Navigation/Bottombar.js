import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import LiquidGlass from 'liquid-glass-react'
import { Tooltip } from 'react-tippy';

import './Bottombar.css';

import { House, Briefcase, FileStack, Newspaper, SquareMenu } from 'lucide-react';

const navItems = [
    { path: '/', icon: <House size={24} />, label: 'Harvy Angelo D. Tan' },
    { path: '/projects', icon: <Briefcase size={24} />, label: 'Projects' },
    { path: '/experience', icon: <FileStack size={24} />, label: 'Experience' },
    { path: '/blog', icon: <Newspaper size={24} />, label: 'Blog' },
    { path: '/resources', icon: <SquareMenu size={24} />, label: 'Resources' },
];

function Bottombar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [showLabel, setShowLabel] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(false);
        }, 1000);
        console.log('set False');
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='bruh'>
            <LiquidGlass
                style={{
                    top: '90%',
                    left: '50%',
                    float: 'left',
                    position: 'fixed',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    width: '252px',

                    background: 'rgba(0,0,0,0.03)',
                    borderRadius: '60px',
                    // border: '2px solid rgba(255,255,255,0.5)',
                    boxShadow: '0px 0px 0px rgba(0,0,0,0.1)'
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.05}
                saturation={140}
                aberrationIntensity={4}
                cornerRadius={60}
                padding="2px"

                className={`bottombar-glass`}>

                {navItems.map((item) => (
                    item.path && (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? "nav-item2 active2" : "nav-item2"
                            }
                        >
                            
                            {/* <Tooltip
                                title={item.label}
                                position="top"
                                className=''
                                distance={800}
                                interactiveBorder={4}
                                duration={700}
                                animation='perspective'
                            > */}
                                <span className="icon2"
                                >{item.icon}</span>
                            {/* </Tooltip> */}


                        </NavLink>
                    )
                ))}
            </LiquidGlass>
        </div>
    );
}

export default Bottombar;
import { NavLink,  } from 'react-router-dom';
import LiquidGlass from 'liquid-glass-react'

import './Bottombar.css';

import { House, Briefcase, FileStack, SquareMenu } from 'lucide-react';

const navItems = [
    { path: '/', icon: <House size={24} />, label: 'Harvy Angelo D. Tan' },
    { path: '/projects', icon: <Briefcase size={24} />, label: 'Projects' },
    { path: '/experience', icon: <FileStack size={24} />, label: 'Experience' },
    { path: '/resources', icon: <SquareMenu size={24} />, label: 'Resources' },
];

function Bottombar() {

    return (
        <div className='bottom-bar-container'>
            <LiquidGlass
                style={{
                    top: '92%',
                    left: '48%',
                    transform: 'translate(-50%, 0%)',
                    transformOrigin: 'center',
                    position: 'fixed',
                    display: 'inline',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.03)',
                    borderRadius: '60px',
                    width: '206px'
                    // boxShadow: '0px 0px 0px rgba(0,0,0,0.1)'
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.05}
                saturation={140}
                aberrationIntensity={4}
                cornerRadius={60}

                className='bottom-bar'>

                {navItems.map((item) => (
                    item.path && (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? "btm-nav-item btm-active" : "btm-nav-item"
                            }
                        >
                            {item.icon}



                        </NavLink>
                    )
                ))}
            </LiquidGlass>
        </div>
    );
}

export default Bottombar;
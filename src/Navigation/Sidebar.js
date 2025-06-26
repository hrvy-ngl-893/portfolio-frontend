import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import LiquidGlass from 'liquid-glass-react'
import { Tooltip } from 'react-tippy';

import './Sidebar.css';

import { House, Briefcase, FileStack, Newspaper, SquareMenu } from 'lucide-react';

const navItems = [
    { path: '/', icon: <House size={36}/>, label: 'Harvy Angelo D. Tan' },
    { path: '/projects', icon: <Briefcase size={36}/>, label: 'Projects' },
    { path: '/experience', icon: <FileStack size={36}/>, label: 'Experience' },
    { path: '/resources', icon: <SquareMenu size={36}/>, label: 'Resources' },
];

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const [showLabel, setShowLabel] = useState(true);
   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExpanded(false);
        }, 1000);
        console.log('set False');
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='two-container'
        onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <LiquidGlass
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '70px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.03)',
                    borderRadius: '32px',
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.1}
                saturation={140}
                aberrationIntensity={3}
                cornerRadius={32}
                padding="8px"

                className={`sidebar-glass`}>

                {navItems.map((item) => (
                    item.path && (
                        
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive ? "nav-item active" : "nav-item"
                            }
                        >
                         <Tooltip
                            title={item.label}
                            position="right"
                            distance={300}
                            interactiveBorder={4}
                            duration={700}
                            animation='perspective'
                        >
                        <span className="icon"
                        style = {{
                            width: '24px',
                            height: '24px'
                        }}
                        >{item.icon}</span>

                        </Tooltip>
                        </NavLink>
                    )
                ))}
            </LiquidGlass>
        </div>
    );
}

export default Sidebar;
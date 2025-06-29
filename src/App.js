import './App.css'
import Main from './Main/Main.js';
import './App.css';
import 'devicon';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Navigation/Sidebar.js';
import Bottombar from './Navigation/Bottombar.js';
import Toggle from './Navigation/Toggle.js';
import BottomToggle from './Navigation/BottomToggle.js';
import Projects from './Projects/Projects.js'
import Experience from './Experience/Experience.js'
import Resources from './Resources/Resources.js'

import useIsMobile from './hooks/useIsMobile';

function App() {
    const isMobile = useIsMobile();

    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path='/' element={<Main theme={theme} />} />
                    <Route path='/projects' element={<Projects theme={theme}  />} />
                    <Route path='/experience' element={<Experience theme={theme} />} />
                    <Route path='/resources' element={<Resources theme={theme}  />} />
                </Routes>
            </div>
            {isMobile ? <> <Bottombar theme={theme} /><BottomToggle theme={theme} setTheme={setTheme} /> </> :
            
            <Sidebar theme={theme} />}
            {isMobile ? <> </> : <Toggle theme={theme} setTheme={setTheme} />}
            
        </BrowserRouter>

    );
}

export default App;

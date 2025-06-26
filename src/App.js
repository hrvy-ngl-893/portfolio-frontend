import './App.css'
import Main from './Main/Main.js';
import './App.css';
import 'devicon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Navigation/Sidebar.js';
import Bottombar from './Navigation/Bottombar.js';

import Projects from './Projects/Projects.js'
import Experience from './Experience/Experience.js'
import Blog from './Blog/Blog.js'
import Resources from './Resources/Resources.js'

import useIsMobile from './hooks/useIsMobile';

function App() {

    const isMobile = useIsMobile();

  return (
    <BrowserRouter>

        <div className="app"> 
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/resources' element={<Resources />} />
          </Routes>
        
      </div>
{isMobile ? <Bottombar /> : <Sidebar />}
    </BrowserRouter>
    
  );
}

export default App;

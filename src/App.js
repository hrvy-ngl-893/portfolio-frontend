import './App.css'
import Main from './Main/Main.js';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Navigation/Sidebar.js';


import Projects from './Projects/Projects.js'
import Experience from './Experience/Experience.js'
import Blog from './Blog/Blog.js'
import Resources from './Resources/Resources.js'

function App() {
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
      <Sidebar/>
    </BrowserRouter>
    
  );
}

export default App;

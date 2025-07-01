import LiquidGlass from "liquid-glass-react";

import './Resources.css'
import TopBarLinks from '../Navigation/TopBarLinks'
import { useState } from "react";
import PDFViewer from '../Components/PDFViewer.js'

function Resources({theme}) {
    const [selectedFile, setSelectedFile] = useState(null)
    return (
        <>
            {/* <div className="resources-container">
                <a href="/pdf/Identifying Express Stops for Manila LRT-Line 2.pdf" target='_blank'>Sooo</a>
            </div> */}
            <LiquidGlass
                style={{
                    top: '6%',
                    left: '95px',
                    position: 'fixed',
                    display: 'inline',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    zIndex: 10,
                    backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: '60px',

                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.05}
                saturation={140}
                aberrationIntensity={4}
                cornerRadius={60}
                padding="8px"

                className='header-title'>
                <h1 style={{ color: `${theme === 'light' ? 'black' : 'white'}`, textAlign: 'left', fontSize: '24px', margin: '4px 8px' }}>Resources</h1>
            </LiquidGlass>
                
                {/* <PDFViewer file={selectedFile}/> */}

            <TopBarLinks theme={theme}/>
        </>
    );
}
export default Resources;
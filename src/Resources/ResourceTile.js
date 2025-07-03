import LiquidGlass from "liquid-glass-react";

import './Resources.css'
import TopBarLinks from '../Navigation/TopBarLinks'
import { useState } from "react";
import PDFViewer from '../Components/PDFViewer.js'
import { Globe } from "lucide-react";
import GithubButton from "../Components/GithubButton.js";
import ViewButton from "../Components/ViewButton.js";

function ResourceTile({ title, content, image, gradient1, gradient2, icon = [], lucide = [], tags = [], color, theme, links = [] }) {
    const [selectedFile, setSelectedFile] = useState(null)
    return (
        <>
            <div className="resources-tile" style={{ color: color }}>
                <div className="card-overlay"
                    style={{
                        background: `linear-gradient(to bottom,  ${gradient1}, ${gradient2}`
                    }} />

                <div className="card-image-mask"
                    style={{ backgroundImage: `url(${image})` }}
                />

                <div className="resource-tile-content">
                    {links.length > 0 && (
                        <div className="card-links">
                            <div className="link-spacer" />

                            {links.map((link, index) => {
                                if (link.type === 'GitHub') {
                                    return <GithubButton key={index} link={link.url} of={link.of} theme={theme} />;
                                } else if (link.type === 'View') {
                                    return <ViewButton key={index} link={link.url} of={link.of} theme={theme} />;
                                }
                                // } else if (link.type === 'Figma') {
                                //     return <FigmaButton key={index} link={link.url} theme={theme} />;
                                // }
                                return null;
                            })}
                        </div>
                    )}
                    <div className='card-spacer' />
                    <div className="card-icons">
                        {icon.map((i, index) => (
                            <i
                                key={index}
                                className={`devicon-${i}-plain`}
                                style={{ marginRight: '8px' }}
                            />
                        ))}

                        {lucide.map((IconComponent, index) => (
                            <IconComponent key={index} className="lucide-icon" style={{ filter: `drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5))` }} />
                        ))}
                    </div>
                    <h1 className='card-h1'>{title}</h1>
                    <p className='card-p' dangerouslySetInnerHTML={{ __html: content }} />
                </div>
            </div>
        </>
    );
}

export default ResourceTile;
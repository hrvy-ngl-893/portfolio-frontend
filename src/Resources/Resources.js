
import LiquidGlass from "liquid-glass-react";

import './Resources.css'
function Resources() {
    return (
    <div className="resources-container">
                <LiquidGlass
                    className="resource-glass"
                    displacementScale={-30}
                    blurAmount={0.2}
                    saturation={140}
                    aberrationIntensity={5}
                    elasticity={0.4}
                    cornerRadius={32}
                    mode="standard"
                    overLight={false}
                >
        <span>
            Resources
        </span>
</LiquidGlass>
        <h1>Kono kuni</h1>
    </div>
    );
}
export default Resources;
import LiquidGlass from "liquid-glass-react";
import { SiGithub, SiFacebook } from '@icons-pack/react-simple-icons';
import LinkedIn from "./LinkedIn";
function TopBarLinks({ theme }) {
    return (
        <>
            <LiquidGlass
                style={{
                    position: 'fixed',
                    top: '6%',
                    left: 'calc(100% - 104px)',
                    zIndex: 10,
                    backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.0)'}`,
                    borderRadius: '32px',
                    cursor: 'pointer'
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.1}
                saturation={140}
                aberrationIntensity={3}
                cornerRadius={32}
                padding="11px 11px"
            >
                <a href="https://fb.com/hrvy983" target='_blank'>
                <SiFacebook 
                    className={`devicon-facebook-plain`}
                    style={{
                        fontSize: '24px',
                        alignContent: 'center',
                        color: `${theme === 'light' ? 'black' : 'white'}`,
                    }}
                />
                </a>
            </LiquidGlass>
            <LiquidGlass
                style={{
                    position: 'fixed',
                    top: '6%',
                    left: 'calc(100% - 164px)',
                    zIndex: 10,
                    backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.0)'}`,
                    borderRadius: '32px',
                    cursor: 'pointer'
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.1}
                saturation={140}
                aberrationIntensity={3}
                cornerRadius={32}
                padding="11px 11px"
            >
                <a href="https://github.com/hrvy-ngl-893" target='_blank'>
                <SiGithub 
                    className={`devicon-github-plain`}
                    style={{
                        fontSize: '24px',
                        alignContent: 'center',
                        color: `${theme === 'light' ? 'black' : 'white'}`,
                    }}
                />
                </a>
                </LiquidGlass>
            <LiquidGlass
                style={{
                    position: 'fixed',
                    top: '6%',
                    left: 'calc(100% - 44px)',
                    zIndex: 10,
                    backgroundColor: `${theme === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.0)'}`,
                    borderRadius: '32px',
                    cursor: 'pointer'
                }}

                elasticity={0.5}
                displacementScale={30}
                blurAmount={0.1}
                saturation={140}
                aberrationIntensity={3}
                cornerRadius={32}
                padding="11px 11px"
            >
                <a href="https://www.linkedin.com/in/harvy-angelo-tan-3535aa1a9/" target='_blank'>
                <LinkedIn 
                    className={`devicon-linkedin-plain`}
                    style={{
                        fontSize: '24px',
                        alignContent: 'center',
                    }}
                    theme={theme}
                />
                </a>
            </LiquidGlass>

        </>
    );
}

export default TopBarLinks;
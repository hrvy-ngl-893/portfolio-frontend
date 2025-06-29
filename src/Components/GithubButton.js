
import './Components.css'
import { SiGithub } from "@icons-pack/react-simple-icons";
function GithubButton({ link, theme }) {
    return (
        <>
            <div className="custom-button"
                style={{
                    alignItems: 'middle',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    textDecoration: 'none',
                    borderRadius: '32px',
                    color:'white !important',
                    border: 'solid 1px rgba(255,255,255,0.5)'
                }}
            >
                <a href={link} target="_blank" style={{color: 'white'}}>
                    <SiGithub
                        style={{
                            width: '16px',
                            alignContent: 'center',
                            color: `white`,
                            verticalAlign: 'middle',
                            marginRight: '4px'
                        }}
                    />

                    <span style={{verticalAlign: 'middle',textDecoration: 'none'}}>Github</span>
                </a>
            </div>
        </>
    );
};

export default GithubButton;
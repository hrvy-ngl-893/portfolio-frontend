
import './Components.css'
import { SiGithub } from "@icons-pack/react-simple-icons";
function GithubButton({ link, of, theme }) {
    return (
        <>
            <div className="custom-button"
                style={{
                    alignItems: 'middle',
                    padding: '8px 12px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
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
                            flexShrink: 0,
                        }}
                        className='button-icon'
                    />
                    <div className='stacked-btn-text'>
                    <span style={{verticalAlign: 'center',textDecoration: 'none',textAlign:'center',}} className='button-title'>GitHub</span>
                    <span style={{verticalAlign: 'center',textDecoration: 'none',textAlign:'center',}} className='button-subtitle'>{of.toUpperCase()}</span>
                    </div>
                </a>
            </div>
        </>
    );
};

export default GithubButton;
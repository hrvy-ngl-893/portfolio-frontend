import './Experience.css'

import Sidebar from '../Navigation/Sidebar';

function Experience() {
    return (

        <div class="exp-container" style={{backgroundImage: 'url(/images/arlegui.jpeg)'}}>

            <div className='exp-tile-container'>
                <div class="exp-tile">
                    <img src="/images/800x600.png"  />
                </div>
                <div class="exp-tile">
                    <img src="/images/800x600.png"  />
                </div>
                <div class="exp-tile">
                    <img src="/images/800x600.png"  />
                </div>
                <div class="exp-tile">
                    <img src="/images/800x600.png"  />
                </div>
                <div class="exp-tile">
                    <img src="/images/800x600.png"  />
                </div>
            </div>
        </div>

    );
}
export default Experience;
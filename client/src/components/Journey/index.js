import '../css/mainpage.css';
import '../css/scroll.css';
import React from 'react';
import signTurn from '../assets/turn-sign.jpg';
import something from '../assets/something.jpg';
import up from '../assets/up-arrow.jpg';
import container from '../assets/journey-bg.jpg';

function Journey() {
    return (
        <div>
            <div id='container'>
                <img src={container}/>
            </div>
            <a href='#top'><img id='up-arrow' src={up}/></a>
            <div className='site-section'>
                <div id='sites1'>
                    <div id='rocky-mtn' className='card'>
                        <p>Rocky Mountain</p>
                    </div>
                    <div id='glacier' className='card'>
                        <p>Glacier Mountain</p>
                    </div>
                    <div id='teton' className='card'>
                        <p>Teton</p>
                    </div>
                    <div id='yosemite' className='card'>
                        <p>Yosemite</p>
                    </div>
                </div>
                <div id='destinations'>
                    <img src={signTurn} alt={signTurn}/>
                </div>
                <div className='site-section'>
                    <div id='sites2'>
                        <div id='arches' className='card'>
                            <p>Arches</p>
                        </div>
                        <div id='bryce' className='card'>
                            <p>Bryce</p>
                        </div>
                        <div id='zion' className='card'>
                            <p>Zion</p>                       
                        </div>
                        <div id='grand-canyon' className='card'>
                            <p>Grand Canyon</p>
                        </div>
                    </div>
                </div>
                <div id='something'>
                    <img src={something} alt={something}/>
                </div>
                <div id='sites3'>
                    <div id='yellowstone' className='card'>
                        <p>Yellowstone</p>
                    </div>
                    <div id='sequoia' className='card'>
                        <p>Sequoia</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Journey;
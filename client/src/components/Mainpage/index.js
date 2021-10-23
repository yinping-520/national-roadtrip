import '../css/mainpage.css';
import '../css/scroll.css';
import React from 'react';
import something from '../assets/something.jpg';
import up from '../assets/up-arrow.jpg';
import container from '../assets/pine.jpg';
import { Link } from 'react-router-dom';

function Mainpage() {
    return (
        <div>
            <div id='container'>
                <img src={container} />
                <h1 id="main-text">your
                    <span id="destin-span">{/*space needed*/} <Link to="/destinations">
                        destination
                    </Link></span> is calling...</h1>
                <h2 id="main-text2">...let's hit the <span className='span2'>road</span></h2>
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
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
                    <p>...<span className='span2'>adventure</span> is around every corner</p>
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
                    <img src={something} />
                </div>
                <div id='sites3'>
                    <div id='yellowstone' className='card'>
                        <p>Yellowstone</p>
                    </div>
                    <div id='sequoia' className='card'>
                        <p>Sequoia</p>
                    </div>
                    <div id='smokey' className='card'>
                        <p>Smokey Mountains</p>
                    </div>
                    <div id='olympic' className='card'>
                        <p>Olympic</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Mainpage;
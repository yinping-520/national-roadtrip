import '../css/destinations.css';
import '../css/scroll.css';
import React from 'react';
import signTurn from '../assets/turn-sign.jpg';
import something from '../assets/something.jpg';
import up from '../assets/up-arrow.jpg';
import container from '../assets/destinations-bg.jpg';

function Destinations() {
    return (
        <div>
            <div id='container'>
                <img src={container} />
                <h1 id='dest-text'>your next <span>adventure</span> is just below...</h1>
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
            <div id='all-destinations'>
                <div id='locs'>
                    <div id='rocky-mtn' className='card-dest'>
                        <p>Rocky Mountain</p>
                    </div>
                    <div id='glacier' className='card-dest'>
                        <p>Glacier Mountain</p>
                    </div>
                    <div id='teton' className='card-dest'>
                        <p>Teton</p>
                    </div>
                    <div id='yosemite' className='card-dest'>
                        <p>Yosemite</p>
                    </div>
                    <div id='arches' className='card-dest'>
                        <p>Arches</p>
                    </div>
                    <div id='bryce' className='card-dest'>
                        <p>Bryce</p>
                    </div>
                    <div id='zion' className='card-dest'>
                        <p>Zion</p>
                    </div>
                    <div id='grand-canyon' className='card-dest'>
                        <p>Grand Canyon</p>
                    </div>
                    <div id='yellowstone' className='card-dest'>
                        <p>Yellowstone</p>
                    </div>
                    <div id='sequoia' className='card-dest'>
                        <p>Sequoia</p>
                    </div>
                    <div id='smokey' className='card-dest'>
                        <p>Smokey Mountains</p>
                    </div>
                    <div id='olympic' className='card-dest'>
                        <p>Olympic</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
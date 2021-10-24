import '../css/destinations.css';
import '../css/scroll.css';
import React from 'react';
import up from '../assets/up-arrow.jpg';
import container from '../assets/destinations-bg.jpg';
import { Link } from 'react-router-dom';

const styles = {
    underlineRemove: {
        textDecoration: 'none',
    }
}

function Destinations() {
    return (
        <div>
            <div id='container'>
                <img src={container} />
                <h1 id='dest-text'>your next <span className='span2'>adventure</span> is a scroll away...</h1>
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
            <div id='all-destinations'>
                <div id='locs'>
                    <Link to="/arches" style={styles.underlineRemove}>
                        <div id='arches' className='card-dest'>
                            <p>Arches</p>
                        </div>
                    </Link>
                    <Link to="/bryce" style={styles.underlineRemove}>
                        <div id='bryce' className='card-dest'>
                            <p>Bryce Canyon</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='glacier' className='card-dest'>
                            <p>Glacier Mountain</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='grand-canyon' className='card-dest'>
                            <p>Grand Canyon</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='olympic' className='card-dest'>
                            <p>Olympic</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='rocky-mtn' className='card-dest'>
                            <p>Rocky Mountain</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='sequoia' className='card-dest'>
                            <p>Sequoia</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='smokey' className='card-dest'>
                            <p>Smokey Mountains</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='teton' className='card-dest'>
                            <p>Teton</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='yellowstone' className='card-dest'>
                            <p>Yellowstone</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='yosemite' className='card-dest'>
                            <p>Yosemite</p>
                        </div>
                    </Link>
                    <Link to="/" style={styles.underlineRemove}>
                        <div id='zion' className='card-dest'>
                            <p>Zion</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
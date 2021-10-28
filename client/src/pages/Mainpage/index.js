import '../../components/css/mainpage.css';
import '../../components/css/scroll.css';
import React from 'react';
import up from '../../components/assets/up-arrow.jpg';
import container from '../../components/assets/pine.jpg';
import { Link } from 'react-router-dom';

const styles = {
    underlineRemove: {
        textDecoration: 'none',
    }
}

function Mainpage({parks}) {
    return (
        <div>
            <div id='container'>
                <img src={container} alt='forest road' />
                <h1 id="main-text">your
                    <span id="destin-span">{/*space needed*/} <Link to="/destinations">
                        destination
                    </Link></span> is calling...</h1>
                <h2 id="main-text2">...let's hit the <span className='span2'>road</span></h2>
            </div>
            <a href='#top'><img id='up-arrow' src={up} alt='up arrow'/></a>
            <div className='site-section'>
                <div id='sites1'>
                    <Link to="/rockymtn" style={styles.underlineRemove}>
                        <div id='rocky-mtn' className='card' alt='mountains'>
                            <p>Rocky Mountain</p>
                        </div>
                    </Link>
                    <Link to="/glacier" style={styles.underlineRemove}>
                        <div id='glacier' className='card' alt='mountains'>
                            <p>Glacier</p>
                        </div>
                    </Link>
                    <Link to="/teton" style={styles.underlineRemove}>
                        <div id='teton' className='card' alt='mountains'>
                            <p>Grand Teton</p>
                        </div>
                    </Link>
                    <Link to="/yosemite" style={styles.underlineRemove}>
                        <div id='yosemite' className='card' alt='mountains'>
                            <p>Yosemite</p>
                        </div>
                    </Link>
                </div>
                <div id='destinations'>
                    <p>...<span className='span2'>adventure</span> is around every corner</p>
                </div>
                <div className='site-section'>
                    <div id='sites2'>
                        <Link to="/arches" style={styles.underlineRemove}>
                            <div id='arches' className='card' alt='canyons'>
                                <p>Arches</p>
                            </div>
                        </Link>
                        <Link to="/bryce" style={styles.underlineRemove}>
                            <div id='bryce' className='card' alt='canyons'>
                                <p>Bryce Canyon</p>
                            </div>
                        </Link>
                        <Link to="/zion" style={styles.underlineRemove}>
                            <div id='zion' className='card' alt='canyons'>
                                <p>Zion</p>
                            </div>
                        </Link>
                        <Link to="/grandcanyon" style={styles.underlineRemove}>
                            <div id='grand-canyon' className='card' alt='canyons'>
                                <p>Grand Canyon</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div id='something'>
                    <p>enough waiting, let's <span className='span2'>go</span>...</p>
                </div>
                <div id='sites3'>
                    <Link to="/yellowstone" style={styles.underlineRemove}>
                        <div id='yellowstone' className='card' alt='geysers'>
                            <p>Yellowstone</p>
                        </div>
                    </Link>
                    <Link to="/sequoia" style={styles.underlineRemove}>
                        <div id='sequoia' className='card' alt='tall forest'>
                            <p>Sequoia</p>
                        </div>
                    </Link>
                    <Link to="/smokey" style={styles.underlineRemove}>
                        <div id='smokey' className='card' alt='mountains'>
                            <p>Smokey Mountains</p>
                        </div>
                    </Link>
                    <Link to="/olympic" style={styles.underlineRemove}>
                        <div id='olympic' className='card' alt='island'>
                            <p>Olympic</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Mainpage;
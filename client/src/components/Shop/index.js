import '../css/shop.css';
import '../css/scroll.css';
import React from 'react';
import up from '../assets/up-arrow.jpg';
import mug from '../assets/mug.jpg';

function Shop() {
    return (
        <div id="shop-page">
            <div id="product-section">
                <a href='#top'><img id='up-arrow' src={up} /></a>
                <div className="product-card">
                    <img id="mug" src={mug} />
                    <div className="prod-info">
                        <p className='item'>MUG</p>
                        <p className='price'>$19.98</p>
                        <button className='buy'>Purchase</button>
                    </div>
                </div>
                <div className="product-card">
                    <img id="mug" src={mug} />
                    <div className="prod-info">
                        <p className='item'>MUG</p>
                        <p className='price'>$19.98</p>
                        <button className='buy'>Purchase</button>
                    </div>
                </div>
                <div className="product-card">
                    <img id="mug" src={mug} />
                    <div className="prod-info">
                        <p className='item'>MUG</p>
                        <p className='price'>$19.98</p>
                        <button className='buy'>Purchase</button>
                    </div>
                </div>
                <div className="product-card">
                    <img id="mug" src={mug} />
                    <div className="prod-info">
                        <p className='item'>MUG</p>
                        <p className='price'>$19.98</p>
                        <button className='buy'>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
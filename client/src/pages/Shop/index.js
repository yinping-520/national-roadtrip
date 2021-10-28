import '../../components/css/shop.css';
import '../../components/css/scroll.css';
import React from 'react';
import up from '../../components/assets/up-arrow.jpg';
import mug from '../../components/assets/mug.jpg';
import hat from '../../components/assets/postcard.jpg';
import stamps from '../../components/assets/stamps.jpg';
import book from '../../components/assets/bird.jpg';

function Shop() {
    return (
        <div id="shop-page">
            <div id="product-section">
                <a href='#top'><img id='up-arrow' src={up} /></a>
                <div className="product-card">
                    <img id="mug" src={mug} alt='coffee mug'/>
                    <div className="prod-info">
                        <div className='prod-name'>
                            <p className='item'>SOUVENIR MUG</p>
                        </div>
                        <div className='price-btn'>
                            <p className='price'>$19.98</p>
                            <button className='buy'>Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img id="mug" src={stamps} alt='collectible stamp book'/>
                    <div className="prod-info">
                        <div className='prod-name'>
                            <p className='item'>STAMP COLLECTION</p>
                        </div>
                        <div className='price-btn'>
                            <p className='price'>$13.98</p>
                            <p></p>
                            <button className='buy'>Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img id="mug" src={hat} alt='ranger hat'/>
                    <div className="prod-info">
                        <div className='prod-name'>
                            <p className='item'>RANGER HAT</p>
                        </div>
                        <div className='price-btn'>
                            <p className='price'>$32.49</p>
                            <button className='buy'>Purchase</button>
                        </div>
                    </div>
                </div>
                <div className="product-card">
                    <img id="mug" src={book} alt='bird watching book'/>
                    <div className="prod-info">
                        <div className='prod-name'>
                            <p className='item'>BIRD BOOK</p>
                        </div>
                        <div className='price-btn'>
                            <p className='price'>$27.79</p>
                            <button className='buy'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
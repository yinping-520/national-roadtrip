import '../css/mainpage.css';
import '../css/scroll.css';
import React from 'react';
import up from '../assets/up-arrow.jpg';

function Shop() {
    return (
        <div>
            <div>
                {/* <img src={container}/> */}
                <h1>Shop</h1>
            </div>
            <a href='#top'><img id='up-arrow' src={up}/></a>
        </div>
    );
};

export default Shop;
import '../css/arches.css';
import '../css/scroll.css';
import React, { useState } from 'react';
import up from '../assets/up-arrow.jpg';
import { SliderDataArches } from '../SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Arches() {
    const [current, setCurrent] = useState(0); // for next & prev slides
    const length = SliderDataArches.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    // set auto interval on page load
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrent(current === length - 1 ? 0 : current + 1);
    //     }, 2500);
    //     return () => clearInterval(interval);
    //   }
    // );

return (
    <div id='center-all'>
        <h1 className='park-name'>Bryce Canyon National Park</h1>
        <div className='slider'>
            <FaArrowAltCircleLeft className='slider-icon left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='slider-icon right-arrow' onClick={nextSlide} />
            {SliderDataArches.map((slide, index) => {
                return (
                    <div className='current-and-index'>
                        <div className={index === current ? 'slide active' : 'slide'} key=
                            {index}>
                            {index === current && (
                                <img src={slide.image} alt='images' className='image' />
                            )}
                        </div>
                        <div className='slider-total'>
                            <img src={slide.image} alt='images' className='image-small' />
                        </div>
                    </div>
                )
            })}
        </div>
        <a href='#top'><img id='up-arrow' src={up} /></a>
    </div>
);
};

export default Arches;
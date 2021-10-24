import '../css/arches.css';
import '../css/scroll.css';
import React, { useState } from 'react';
import up from '../assets/up-arrow.jpg';
import { SliderDataYosemite } from '../SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import watching from '../assets/watching.jpg';

function Yosemite() {
    const [current, setCurrent] = useState(0); // for next & prev slides
    const length = SliderDataYosemite.length;

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
        <div>
            <div id='center-all'>
            <h1 className='park-name'>Yosemite National Park</h1>
            <h2 className='city'>California, USA</h2>
            <div className='slider'>
                <FaArrowAltCircleLeft className='slider-icon left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='slider-icon right-arrow' onClick={nextSlide} />
                {SliderDataYosemite.map((slide, index) => {
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
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
            <div className='activities'>
                <h3 className='activity-header'>Activities</h3>
                <img id='bike' src={watching} />
                <div className='split-act'>
                    <ul className='activity-list'>
                        <div className='act-left'>
                            <li><i class="fas fa-campground"></i> Mountain Biking</li>
                            <li><i class="fas fa-campground"></i> Hiking</li>
                            <li><i class="fas fa-campground"></i> Mossy Caves</li>
                            <li><i class="fas fa-campground"></i> Camping</li>
                            <li><i class="fas fa-campground"></i> Canyoneering</li>
                        </div>
                        <div className='act-right'>
                            <li><i class="fas fa-campground"></i> Astronomy</li>
                            <li><i class="fas fa-campground"></i> ATV Riding</li>
                            <li><i class="fas fa-campground"></i> Rock Climbing</li>
                            <li><i class="fas fa-campground"></i> Skydiving</li>
                            <li><i class="fas fa-campground"></i> Skiing - Winter</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='weather-section'>
                <h4 className='weather-headline'>Seasonal Weather</h4>
                <div className='weather-block'>
                    <p>spring</p>                    
                    <p>summer</p>
                    <p>fall</p>
                    <p>winter</p>
                </div>
            </div>
            <div className='official-link'>
                <a href='#' target='_'>blahblah.com Offical Site</a>
            </div>
        </div>
    )
};

export default Yosemite;
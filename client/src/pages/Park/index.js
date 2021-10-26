import '../../components/css/arches.css';
import '../../components/css/scroll.css';
import React, { useState } from 'react';
import {useQuery} from '@apollo/client';
import { QUERY_PARK_BY_ID } from '../../utils/queries'
import { useParams } from 'react-router-dom';
import up from '../../components/assets/up-arrow.jpg';
import { SliderDataArches } from '../../components/SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import bikingArches from '../../components/assets/biking-arches.jpg';

function Park() {
    const { parkId } = useParams();
    console.log(parkId)

    const {loading, data} = useQuery(QUERY_PARK_BY_ID, {
        variables: {parkId: parkId},
    })
    const activities = data?.park.activities || [];
    const park = data?.park || {};
    console.log(park)

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
    // const {loading, data} = useQuery()

    return (
        <div>
            <div id='center-all'>
            <h1 className='park-name'>Arches National Park</h1>
            <h2 className='city'>Utah, USA</h2>
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
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
            <div className='activities'>
                <h3 className='activity-header'>Activities</h3>
                <img id='bike' src={bikingArches} />
                {activities.map((activity) => (

                <div className='split-act'>
                    <ul className='activity-list'>
                        <div className='act-left'>
                            <li key={activity}><i class="fas fa-campground"></i>{activity}</li>
                       
                        </div>
                        <div className='act-right'>
                        
                        </div>
                    </ul>
                </div>
                ))}
            </div>
            <div className='weather-section'>
                <h4 className='weather-headline'>Seasonal Weather</h4>
                <div className='weather-block'>
                    <p>{park.weatherInfo}</p>   
                </div>
                <p>address:{park.address}</p>          
                <p>park description:{park.description}</p>          
                <p>lat:{park.lat}, long:{park.long}</p>         
            </div>
            <>
                <button>Click me</button>

            </>
            <div className='official-link'>
                <a href='https://www.nps.gov/arch/index.htm' target='_'>insert Offical Site</a>
            </div>
        </div>
    )
};

export default Park;
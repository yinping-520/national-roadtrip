import React from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ITINERARY } from '../../utils/mutations';
import auth from '../../utils/auth';
import Park from '../Park';
import '../../components/css/trips.css';

function Trips() {
    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            id: auth.getProfile().data._id
        }
    });
    if (loading) {
        return (<div>loading</div>)
    }
    const itineraries = data.user.itinerary;
    return (<div>{itineraries.map((itinerary) => {
        return (
            <div className='trips-page'>
                <div className='trip-container'>
                    <div className='trip-name'>{itinerary.name} National Park</div>
                    <ul className='activity-list trip-activities'>
                        {itinerary.activities1.map((activities1, index) => (
                            <li key={index}>
                                {activities1}
                            </li>
                        ))}
                    </ul>
                    <div id={`${itinerary.id}`} className='card-dest trip-pic' alt='pic of national park'>
                        <p>{itinerary.name}</p>
                    </div>
                    <div className='trip-links'>
                        <a href={itinerary.website} target='_'>
                            Official Park Site
                        </a>
                        <a href={itinerary.website} target='_'>
                            Map Your Trip
                        </a>
                        <a href={itinerary.weatherInfo} target='_'>
                            Weather Info
                        </a>
                    </div>
                </div>
            </div>
        )
    })}</div>)
};

export default Trips;
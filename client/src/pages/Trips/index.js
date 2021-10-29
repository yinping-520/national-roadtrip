import React from 'react';
import { QUERY_USER } from '../../utils/queries';
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_ITINERARY } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import auth from '../../utils/auth';
import '../../components/css/trips.css';

function Trips() {
    const [deleteItinerary] = useMutation(DELETE_ITINERARY, {
        update: (cache, result) => {
            try {
                const { itinerary } = cache.readQuery({ query: QUERY_USER });
                cache.writeQuery({
                    query: QUERY_USER,
                    data: { itinerary: [...itinerary, deleteItinerary] },
                })
            } catch (e) {
                console.error(e);
            }
        }
    });
    const { loading, data } = useQuery(QUERY_USER, {
        variables: {
            id: auth.getProfile().data._id
        }
    });
    if (loading) {
        return (<div>loading</div>)
    }
    const itineraries = data.user.itinerary;

    if (!itineraries.length) {
        return (
            <div id='nada'>
                <p>You have not yet added any parks to your trip itinerary, <Link to='/destinations'>go add one</Link>.</p>
            </div>
        )
    } else {
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
                        <div id={`${itinerary.id}`} className='card-dest trip-pic' alt={itinerary.id} style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${itinerary.id}.jpg)`
                        }}>
                            <p>{itinerary.name}</p>
                        </div>
                        <div className='trip-links'>
                            <a href={itinerary.website} target='_'>
                                Official Park Site
                            </a>
                            {/* <a href={itinerary.website} target='_'>
                                Map Your Trip
                            </a> */}
                            <a href={itinerary.weatherInfo} target='_'>
                                Weather Info
                            </a>
                        </div>
                        <div className='btn-section-delete'>
                            <button className='delete-btn'
                                type='button'
                                onClick={async () => {
                                    const { data } = await deleteItinerary({
                                        variables: {
                                            id: itinerary._id,
                                        }
                                    });
                                    window.location.replace('/trips')
                                    console.log('add itinerary response', data)
                                }}
                            >
                                Remove Trip
                            </button>
                        </div>
                    </div>
                </div>
            )
        })}</div>)
    }
};

export default Trips;
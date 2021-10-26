import '../css/destinations.css';
import '../css/scroll.css';
import React from 'react';
import up from '../assets/up-arrow.jpg';
import container from '../assets/destinations-bg.jpg';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {QUERY_PARKS} from '../../utils/queries'



const styles = {
    underlineRemove: {
        textDecoration: 'none',
    }
}

function Destinations() {
    const {loading, data} = useQuery(QUERY_PARKS)
    const parks = data?.parks || [];

    if (loading){
        return <div>Loading ... </div>
    }
    return (
        <div>
            <div id='container2'>
                <img src={container} />
                <h1 id='dest-text'>your next <span className='span2'>adventure</span> is a scroll away...</h1>
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
            <div id='all-destinations'>
                <div id='locs'>
                    {parks && parks.map((park) => (

                    <Link to={`/arches/${park._id}`} style={styles.underlineRemove}>
                        <div id='arches' className='card-dest'>
                            <p>{park.name}</p>
                        </div>
                    </Link>
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Destinations;
import '../../components/css/destinations.css';
import React from 'react';
import up from '../../components/assets/up-arrow.jpg';
import container from '../../components/assets/destinations-bg.jpg';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PARKS } from '../../utils/queries'

const styles = {
    underlineRemove: {
        textDecoration: 'none',
    }
}

function Destinations() {
    const { loading, data } = useQuery(QUERY_PARKS)
    const parks = data?.parks || [];

    if (loading) {
        return <div>Loading ... </div>
    }
    return (
        <div>
            <div id='container2'>
                <img src={container} alt='long road in forest'/>
                <h1 id='dest-text'>your next <span className='span2'>adventure</span> is a scroll away...</h1>
            </div>
            <a href='#top'><img id='up-arrow' src={up} /></a>
            <div id='all-destinations'>
                <div id='locs'>
                    {parks && parks.map((park) => (
                        <Link to={`/${park.id}`} style={styles.underlineRemove}>
                            <div id={`${park.id}`} className='card-dest' alt='pic of national park'>
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
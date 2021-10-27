import { parseAndCheckHttpResponse } from '@apollo/client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { useQueries } from '../../utils/queries';

function Trips() {

    return (
        <div class="container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
    
    // const { parks, addPark, removePark } = useQueries();
    // const [newTrip, setNewTrip] = useState('');

    // return (
    //     <div>
    //         {parks ? (
    //             <>
    //                 <section className='park-list'>
    //                     <table>
    //                         <thead>
    //                             <tr>
    //                                 <th>ID</th>
    //                                 <th>Park Name</th>
    //                                 <th>State</th>
    //                             </tr>
    //                         </thead>

    //                         <tbody>
    //                             {parks.map((parks) => (
    //                                 <tr key={park.id}>
    //                                     <td>{park.id}</td>
    //                                     <td>{park.name}</td>
    //                                     <td>{park.state}</td>
    //                                     <td>
    //                                         <button
    //                                             type='button'
    //                                             onClick={() => removePark(park.id)}
    //                                         >
    //                                             <span role='img'
    //                                                 aria-label='close'>
    //                                                 X
    //                                             </span>
    //                                         </button>
    //                                     </td>
    //                                 </tr>
    //                             ))}
    //                         </tbody>
    //                     </table>
    //                     <div className='add-park'>
    //                         <input
    //                             onChang={() => setNewTrip(e.target.value)} placeholder='Add Next Trip!' type='text' value={newTrip}
    //                         />
    //                         <button
    //                             type='button' onClick={() => {
    //                                 addTrip({ name: newTrip });
    //                                 setNewTrip('');
    //                             }}
    //                         >
    //                             Add Trip
    //                         </button>
    //                     </div>
    //                 </section>
    //             </>
    //         ) : (
    //             <span>MMMmmm...stayin' home?</span>
    //         )}
    //     </div>
    // )
};

export default Trips;
import '../../components/css/arches.css';
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_PARK_BY_ID } from '../../utils/queries';
import { ADD_ITINERARY } from '../../utils/mutations';
import { useParams } from 'react-router-dom'
import up from "../../components/assets/up-arrow.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Auth from '../../utils/auth';

function Park() {
  const { parkId } = useParams();

  const { loading, data } = useQuery(QUERY_PARK_BY_ID, {
    variables: { parkId: parkId },
  });
  const park = data?.park || {};
  const activities1 = park.activities1 || [];
  const activities2 = park.activities2 || [];
  const image = park.images || [];
  const [addItinerary] = useMutation(ADD_ITINERARY);
  const position = [park?.lat, park?.long];

  const [current, setCurrent] = useState(0); // for next & prev slides
  const length = image.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // set auto interval on page load
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent(current === length - 1 ? 0 : current + 1);
  //     }, 2500);
  //     return () => clearInterval(interval);
  //   }
  // );
  // const {loading, data} = useQuery()

  // const { addTrip } = Navbar();

  const renderMap = () => {
    if (loading ) return null; 
    if (!park?.lat || !park?.long) return null;
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{
        height: "400px", width: "900px", backgroundColor: "grey"}} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
          <Popup>
            Click for directions! <br /> <a href={`https://www.google.com/maps/search/?api=1&query=${park?.lat},${park?.long}`} target='_'>Google Maps</a>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }

  return (
    <div>
      <div>
        <div id="center-all">
          <h1 className='park-name'>{park.name}</h1>
          <h2 className='city'>{park.state}</h2>
          <div className="slider">
            <FaArrowAltCircleLeft
              className="slider-icon left-arrow"
              onClick={prevSlide}
            />
            <FaArrowAltCircleRight
              className="slider-icon right-arrow"
              onClick={nextSlide}
            />
            {image.map((slide, index) => {
              return (
                <div key={slide} className="current-and-index">
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img src={slide} alt="national park scenery" className="image" />
                    )}
                  </div>
                  {/* Show all images in slider on page move from left to right */}
                  {/* <div className="slider-total">
                    <img src={slide} alt="images" className="image-small" />
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </div >
      <a href='#top'>
        <img id='up-arrow' alt='up arrow' src={up} />
      </a>
      <div>
        <button className='add-to-trip'
          type='button'
          onClick={async () => {
            await addItinerary({
              variables: {
                id: park._id,
              }
            });
            window.location.replace('/trips')
            if (!Auth.loggedIn()) {
              return (
                window.location.replace('/login')
              )
            }
          }}
        >
          Add to Trip
        </button>
      </div>
      <div className='activities'>
        <h3 className='activity-header'>Activities</h3>
        <div className='bike' id={park.mainActivity} alt='person having fun at the park'></div>
        <div className='split-act'>
          <ul className='activity-list left'>
            {activities1.map((activity, index) => (
              <li key={`${index}-${activity}`}>
                <i className='fas fa-campground'></i> {activity}
              </li>
            ))}
          </ul>
          <ul className='activity-list right'>
            {activities2.map((activity, index) => (
              <li key={`${index}-${activity}`}>
                <i className='fas fa-campground'></i> {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='description'>
        <div className='park-description'>
          <p>{park.description}</p>
        </div>
        <a href={park.website} target='_'>
          Visit the Official Park Site
        </a>
      </div>
      <div className='map-section'>
        <div className='map-frame'>
          {renderMap()}
        </div>
      </div>
      <div className='weather-section'>
        <h4 className='weather-headline'>Weather</h4>
        <div className='weather-block'>
          <iframe title='weather page' src={park.weatherInfo} width='1000px' height='475px'></iframe>
        </div>
      </div>
    </div >
  );
}

export default Park;

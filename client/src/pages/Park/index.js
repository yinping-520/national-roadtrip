import "../../components/css/arches.css";
import "../../components/css/scroll.css";
import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PARK_BY_ID } from "../../utils/queries";
import { ADD_ITINERARY } from "../../utils/mutations";
import { useParams } from 'react-router-dom'
import up from "../../components/assets/up-arrow.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import bikingArches from "../../components/assets/biking-arches.jpg";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Park() {
  const { parkId } = useParams();
  console.log(parkId)

  const { loading, data } = useQuery(QUERY_PARK_BY_ID, {
    variables: { parkId: parkId },
  });
  const park = data?.park || {};
  console.log(park)
  const activities1 = park.activities1 || [];
  const activities2 = park.activities2 || [];
  const image = park.images || [];
  const lat = park.lat;
  const lng = park.long;
  const [addItinerary] = useMutation(ADD_ITINERARY);
  const position = [lat, lng];

  console.log(data);



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

  return (
    <div>
      <div>
        <div id="center-all">
          <h1 className="park-name">{park.name} National Park</h1>
          <h2 className="city">{park.address}</h2>
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
                <div className="current-and-index">
                  <div
                    className={index === current ? "slide active" : "slide"}
                    key={index}
                  >
                    {index === current && (
                      <img src={slide} alt="images" className="image" />
                    )}
                  </div>
                  {/* <div className="slider-total">
                  <img src={slide} alt="images" className="image-small" />
                </div> */}
                </div>
              );
            })}
          </div>
        </div>
        <a href="#top">
          <img id="up-arrow" src={up} />
        </a>
        <div className="activities">
          <h3 className="activity-header">Activities</h3>
          <img id="bike" src={bikingArches} />
          <div className="split-act">
            <ul className="activity-list left">
              {activities1.map((activities1, index) => (
                <li key={index}>
                  <i class="fas fa-campground"></i>
                  {activities1}
                </li>
              ))}
            </ul>
            <ul className="activity-list right">
              {activities2.map((activities2, index) => (
                <li key={index}>
                  <i class="fas fa-campground"></i>
                  {activities2}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='description'>

        </div>
        <div className="weather-section">
          <h4 className="weather-headline">Weather</h4>
          <div className="weather-block">
            <iframe src={park.weatherInfo} width='1000px' height='475px'></iframe>
          </div>
        </div>
        <>
          <button
            type='button'
            onClick={async () => {
              const { data } = await addItinerary({
                variables: {
                  id: park._id,
                }
              });
              console.log('add itinerary response', data)
            }}
          >
            Add to Trip
          </button>
        </>
        <div className="official-link">
          <a href={park.website} target="_">
            Visit the Official Nationals Park Site
          </a>
        </div>
      </div>
      <div>
        {loading? []: <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{
          height: "400px", width: "50%", backgroundColor: "red", marginTop: "80px", marginBottom: '90px'
        }} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>}
      </div>
    </div>
  );
}

export default Park;

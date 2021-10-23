import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Trips() {
    const mapStyles = {
        height: "50vh",
        width: "50%"
    };

    const defaultCenter = {
        lat: 35.2271, lng: -80.8431
    }

    const parks = [
        {
            name: "Rocky Mountain National Park",
            address: "1000 US Hwy 36 Estes Park, CO 80517",
            description: "Rocky Mountain National Park’s 415 square miles encompass and protect spectacular mountain environments. Enjoy Trail Ridge Road – which crests at over 12,000 feet including many overlooks to experience the subalpine and alpine worlds – along with over 300 miles of hiking trails, wildflowers, wildlife, starry nights, and fun times. In a world of superlatives, Rocky is on top!",
            activities: ["Hiking", "Senic Drives", "Wildlife Watching", "Picnicking", "Camping", "Fishing", "Horseback Riding", "Ranger-led Programs", "Visitors Centers"],
            weatherInfo: "https://forecast.weather.gov/MapClick.php?lat=40.3333&lon=-105.7089#.YXLvEBrMJPY",
            website: "https://www.nps.gov/romo/index.htm",
            lat: 40.343182,
            long: -105.688103
        },
        {
            name: "Grand Teton",
            address: "103 Headquarters Loop Moose, WY 83012",
            description: "Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.",
            activities: ["Hiking", "Boating", "Fishing", "Climbing", "Biking", "Scenic Drives", "Wildlife Viewing", "Camping"],
            weatherInfo: "https://forecast.weather.gov/MapClick.php?lat=43.8673&lon=-110.5719#.YXLwdhrMJPY",
            website: "https://www.nps.gov/grte/index.htm",
            lat: 43.8332687,
            long: -110.7007671
        }
    ]
    return (
        <div className='container'>
            <LoadScript
                googleMapsApiKey='AIzaSyDPiiTb2p1wvsmtdn_jKOqtoB6utVuMMnY'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}>
                    {
                        parks.map(item => {
                            return (
                                <Marker key={item.name} position={item.lat, item.long} />
                            )
                        })
                    };
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Trips;
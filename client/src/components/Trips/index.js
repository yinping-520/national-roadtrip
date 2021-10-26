import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


function Trips() {

    const position = [40.343182, -105.688103];

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{
            height: "400px", width: "50%", backgroundColor: "red", marginTop: "80px", marginBottom: '90px'
        }} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>

    );
};

export default Trips;
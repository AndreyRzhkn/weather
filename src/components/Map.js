import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import "./Map.css"

mapboxgl.accessToken = "pk.eyJ1IjoiYXJvemgiLCJhIjoiY2t5MWwzMncxMGNrZTJubGd0YnJlcjYzZSJ9.S9qiGdmXdAY0bdvE9xPoRA"

const Map = (props) => {
  
    const mapContainer = useRef(null);
    useEffect(() => {
        const widt = props.longitude
        const heig = props.latitude
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [widt, heig],
            zoom: 8,
        });
        const marker = new mapboxgl.Marker()
            .setLngLat([widt, heig])
            .addTo(map);
      })
  
    return (
      <div>
        <div className="map" ref={mapContainer} style={{width: 300, height: 300}}/>
      </div>
    );
  };

export default Map
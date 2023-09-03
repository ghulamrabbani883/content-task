import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CountryMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };
  const onEachCountry = (country, layer) => {
    const name = country.properties.ADMIN;
    const active = country.properties.active;
    const deaths = country.properties.deaths;
    const recovered = country.properties.recovered;
    layer.options.fillColor = country.properties.color;
    layer.bindPopup(
      `<b>${name}</b> <br /> Active:- ${active} Deaths:- ${deaths} Recovered:- ${recovered}`
    );
  };
  const [height, setHeight] = useState('');
  const [width, setWIdth] = useState('100vw');

  useEffect(()=>{
    console.log(window.innerWidth)
    if(window.innerWidth < 500){
      setHeight('200px')
    }
    if(window.innerWidth > 500 && window.innerWidth < 768){
      setHeight('350px')
    }
    if(window.innerWidth > 768 && window.innerWidth < 920){
      setHeight('400px')
    }
    if(window.innerWidth > 920 ){
      setHeight('500px')
      setWIdth('60%')
    }
  },[])
  console.log(height)
  return (
    <MapContainer
      style={{ height: height, width: width, overflowX:"hidden"}}
      center={[20, 100]}
      zoom={2}
    >
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      ></GeoJSON>
    </MapContainer>
  );
};

export default CountryMap;

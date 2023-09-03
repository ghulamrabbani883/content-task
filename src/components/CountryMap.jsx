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
  
  return (
    <MapContainer
      style={{ height: "500px", width: "100%"}}
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

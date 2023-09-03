import React, { useEffect, useState } from "react";
import CountryMap from "./CountryMap.jsx";
import LineMap from "./LineMap.tsx";
import geoJSON from "../assets/cond.json";
import axios from "axios";

const MapPage = () => {
  const [countries, setCountries] = useState([]);
  const [matchedCountries, setMatchedCountries] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    setCountries(data);
  };
  const matchData = () => {
    for (let i = 0; i < countries.length; i++) {
      let featureCountry = geoJSON.features[i];
      let covidCountry = countries.find(
        (country) =>
          country.countryInfo.iso3 === featureCountry.properties.ISO_A3
      );
      featureCountry.properties.active = covidCountry?.active;
      featureCountry.properties.deaths = covidCountry?.deaths;
      featureCountry.properties.recovered = covidCountry?.recovered;
      setMatchedCountries((prev) => {
        return [...prev, featureCountry];
      });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    matchData();
  }, [countries]);

  return (
    <div className="w-full px-4 md:px-5 lm:px-8 ls:px-8 py-20 lg:py-24 flex flex-col gap-20 justify-center items-center">
      <div className="w-full h-full flex flex-col items-center gap-5">
        <h2 className="text-2xl ls:text-3xl font-semibold text-primary">Covid Cases Fluctuations Chart</h2>
        <LineMap />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl ls:text-3xl font-semibold text-primary">Covid Cases Details Contry Wise</h2>
        {matchedCountries.length > 0 ? (
          <CountryMap countries={matchedCountries} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MapPage;

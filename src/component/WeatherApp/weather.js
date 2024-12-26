import React, { useState, useEffect } from "react";
import Temp from "./Temp";
import "./style.css";


const Weather = () => {

  const [searchVal, setSearchVal] = useState("Patna");
  const [tempInfo, setTempInfo] = useState({});

  const weatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=7ac064016f9d72b106d2b68b4331523a`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myWeather = { temp, humidity, pressure, weathermood, name, speed, country, sunset };
      setTempInfo(myWeather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherInfo();
  }, []);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="search-container w-100 d-flex justify-content-center mb-4">
        <form className="d-flex w-50" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter location"
            aria-label="Search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button className="btn btn-outline-success" type="button" onClick={weatherInfo}>
            Search
          </button>
        </form>
      </div>

      <Temp tempInfo={tempInfo} />
    </div>
  );
};

export default Weather;

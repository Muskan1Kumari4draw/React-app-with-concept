import React, { useEffect, useState } from "react";
import { WiDaySunny, WiRain, WiCloudy, WiWindy } from "react-icons/wi";
import { BsCloudFog2 } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { CiCloudSun } from "react-icons/ci";

const Temp = ({ tempInfo }) => {
  const [weatherIcon, setWeatherIcon] = useState(() => WiDaySunny); // Set a default icon component

  const { temp, humidity, pressure, weathermood, name, speed, country, sunset } = tempInfo;

  useEffect(() => {
    // Check the `weathermood` value and set the corresponding icon component
    switch (weathermood) {
      case "Clouds":
        setWeatherIcon(() => CiCloudSun);
        break;
      case "Haze":
        setWeatherIcon(() => BsCloudFog2);
        break;
      case "Clear":
        setWeatherIcon(() => WiDaySunny);
        break;
      case "Rain":
        setWeatherIcon(() => WiRain);
        break;
      default:
        setWeatherIcon(() => WiCloudy);
    }
  }, [weathermood]);

  // Format sunset time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <div className="card text-center weather-card w-75">
      <div className="card-body">
        <h5 className="card-title">{name ? `${name}, ${country}` : "Location Not Found"}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{new Date().toLocaleDateString()}</h6>

        <div className="weather-main d-flex justify-content-between align-items-center my-4">
          <div className="temp-container">
            {/* Render the icon dynamically */}
            {React.createElement(weatherIcon, { size: 145, color: "#ffdd59" })}
            <h1 className="display-4 mb-0">{temp}°C</h1>
            <h3 className="card-text">{weathermood}</h3>
          </div>
          <div className="date-container text-center">
            <SlCalender size={128} color="#ffdd59" />
            <p className="mb-0">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>

        <div className="weather-details d-flex justify-content-around mt-4">
          <div className="detail-item">
            <WiDaySunny size={32} color="#007BFF" />
            <p>Sunset: {sunsetTime}</p>
          </div>
          <div className="detail-item">
            <WiRain size={32} color="#007BFF" />
            <p>Humidity: {humidity}%</p>
          </div>
          <div className="detail-item">
            <WiWindy size={32} color="#007BFF" />
            <p>Wind: {speed} km/h</p>
          </div>
          <div className="detail-item">
            <WiCloudy size={32} color="#007BFF" />
            <p>Pressure: {pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;

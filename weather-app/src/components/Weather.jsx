import "./weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

import clearsky from "../assets/clearsky.png";
import clearskyn from "../assets/clearskyn.png";
import cloudday from "../assets/cloudday.png";
import cloudnight from "../assets/cloudynight.png";
import clouds from "../assets/clouds.png";
import cloudsn from "../assets/cloudsn.png";
import cloudy from "../assets/cloudy.png";
import cloudyn from "../assets/cloudyn.png";
import rain from "../assets/rain.png";
import rainn from "../assets/rainn.png";
import heavyrain from "../assets/heavyrain.png";
import heavyrainn from "../assets/heavyrainn.png";
import snowy from "../assets/snowy.png";
import snowyn from "../assets/snowyn.png";
import fog from "../assets/fog.png";
import fogn from "../assets/fogn.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import { useEffect, useRef, useState } from "react";

function Weather() {
  const Inputref = useRef();
  const [weatherdata, setWeatherdata] = useState(false);
  const [isCelsius, setIsCelsius] = useState(false);
  const [originalTemperature, setOriginalTemperature] = useState(null);

  const allicons = {
    "01d": clearsky,
    "01n": clearskyn,
    "02d": cloudday,
    "02n": cloudnight,
    "03d": clouds,
    "03n": cloudsn,
    "04d": cloudy,
    "04n": cloudyn,
    "09d": rain,
    "09n": rainn,
    "010d": heavyrain,
    "010n": heavyrainn,
    "013d": snowy,
    "013n": snowyn,
    "50d": fog,
    "50n": fogn,
  };
  const search = async (city) => {
    if (city === "") {
      alert("Enter city name");
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_APP_ID
      }&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert(data.message);
      }
      console.log(data);
      const icon = allicons[data.weather[0].icon] || cloudday;
      const description = data.weather[0].description;

      setWeatherdata({
        humidity: data.main.humidity,
        wind: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,

        description: description,
        icon: icon,
      });
      setOriginalTemperature(Math.floor(data.main.temp));
    } catch (error) {
      setWeatherdata(false);
      console.error("Error in fetching data", error);
    }
  };

  const toggleUnit = () => {
    if (originalTemperature !== null) {
      setWeatherdata((prev) => ({
        ...prev,
        temperature: isCelsius
          ? Math.floor((originalTemperature * 9) / 5 + 32)
          : originalTemperature,
      }));
    }
    setIsCelsius(!isCelsius);
  };
  useEffect(() => {
    search("hyderabad");
  }, []);
  return (
    <div className="weather">
      <div className="searchbar">
        <input
          ref={Inputref}
          className="input-style"
          type="text"
          placeholder="Search here..."
        />
        <FontAwesomeIcon
          className="searchin"
          icon={faSearchengin}
          onClick={() => search(Inputref.current.value)}
        />
      </div>
      <img src={weatherdata.icon} alt=" " className="weather-icon" />
      <p className="description">{weatherdata.description}</p>
      <div className="tempcf">
        <p className="temparature">{weatherdata.temperature}</p>
        <button className="togglebtn" onClick={toggleUnit}>
          °{isCelsius ? "C" : "F"}
        </button>
      </div>
      <p className="location">{weatherdata.location}</p>
      <div className="weather-data">
        <div className="col">
          <img className="pnghumidity" src={humidity} alt="humidity" />
          <p className="humidity">{weatherdata.humidity}%</p>
          <span>humadity</span>
        </div>
        <div className="col1">
          <img className="pngwind" src={wind} alt="wind" />
          <p>{weatherdata.wind}</p>
          <span>Wind speed</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;

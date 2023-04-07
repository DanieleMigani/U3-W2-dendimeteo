import React, { useState, useEffect } from "react";
import { Row, Col, /*Image,*/ Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

import { FaTemperatureHigh, FaTemperatureLow, FaWind } from "react-icons/fa";
import { TbArrowsUp, TbArrowsDown } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import Icone from "./Icone.jsx";

const MyWeather = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cityName, setCityName] = useState("Milano");

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=a2a5fc347444173afe3c429ef185a7b1`
      );
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      }
      setIsLoading(false);
    };
    fetchWeather();
  }, [cityName]);

  const handleSearch = (value) => {
    setCityName(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="my-3">
        <SearchBar placeholder="hello" onSearch={handleSearch} />
      </div>

      <Container className="my-5">
        <Row className="row_big">
          <Col sm={12} md={8} className="Col_01">
            <div>
              <h4>Weather in</h4>
              <h2>{cityName}</h2>
              <h5>Country: {weather.sys.country}</h5>
              <h5>Sky: {weather.weather[0].description}</h5>
            </div>

            <h1>
              {weather.main.temp} <h4>°C</h4>
            </h1>

            <div>
              <Icone tempo={weather.weather[0].icon} />
            
            </div>
          </Col>
        </Row>
        <Row sm={12} md={3} className=" Details p-4 ">
          <h4>Details</h4>
          <div className="information">
            <h5>
              <FaTemperatureHigh /> {weather.main.temp_max} °C <TbArrowsUp />
            </h5>
            <h5>
              <FaTemperatureLow /> {weather.main.temp_min} °C <TbArrowsDown />
            </h5>

            <h5>
              <WiHumidity /> {weather.main.humidity} %
            </h5>

            <h5>
              <FaWind /> {weather.wind.speed} km/h
            </h5>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default MyWeather;

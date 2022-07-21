// import Search from "./search";
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Left(props){

    const [cityName, setCityName] = useState(props.city_name);
	const [currentWeather, setCurrentWeather] = useState(props.weather_data);

	useEffect(() => {
		if (
		    typeof props.weather_data === 'object' &&
		    !Array.isArray(props.weather_data) &&
		    props.weather_data !== null
		) {
			setCityName(props.city_name);
			setCurrentWeather(props.weather_data);
		}
	},[props.weather_data]);

    return(
        <div className="left">
            {/* <Search></Search> */}
            <div className="in-left-text">
                <img src={require('../img/img1.png')} alt="cloud" className="cloud"/>
                <h2>{cityName}</h2>
                <h1>{currentWeather.feels_like.toFixed()}<sup>o</sup>C</h1>
                <p>{getTime(currentWeather.dt)}</p>
                <p>{currentWeather.weather[0].description}</p>
                <p>Clouds {currentWeather.clouds}%</p>
            </div>
            <div className="in-left-img">
                <img src={require("../img/bg.webp")} alt="lofi" className="lofi"/>
                <h4>{cityName}</h4>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        weather_data: state.weather_data.current,
        city_name: state.city_data.name
    }
}

function getTime(time) {
    var date = new Date(time*1000);
    var day = date.getDay();
    const options = { weekday: 'long'};
    var day = new Intl.DateTimeFormat('en-US', options).format(date);

    return day+", "+date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}
export default connect(mapStateToProps)(Left);
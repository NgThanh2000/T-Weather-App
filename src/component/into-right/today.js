import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
// import {img2} from './img2.png'
function Today(props){

	const [dailyWeather, setDailyWeather] = useState(props.weather_data.daily[0]);
	const [todayVisibility, setTodayVisibility] = useState(props.weather_data.current.visibility);

	useEffect(() => {
		if( typeof props.weather_data === 'object' && !Array.isArray(props.weather_data) && props.weather_data !== null) 
		{
			setDailyWeather(props.weather_data.daily[0]);
			setTodayVisibility(props.weather_data.current.visibility);
		}
	}, [props.weather_data])

    return(
       <div className="today">
            <div className="row phone_screen">
			<div className="box">
				<h6>UV index</h6>
				<div className="box-in">
					<img src={require('./imgnot/img2.png')}  alt="imgnot" className="imgnot"/>
					<h2>{dailyWeather.uvi}</h2>
				</div>
			</div>
			<div className="box">
				<h6>Wind Status</h6>
				<div className="box-in">
					<img src={require('./imgnot/img3.png')}  alt="imgnot" className="imgnot"/>
					<h2>{dailyWeather.wind_speed} km/h</h2>
				</div>	
			</div>
			<div className="box phone_screen">
				<h6>Sunrise & Sunset</h6>
				<div className="box-in">
					<div className="sun">
						<img src={require('./imgnot/img4.png')}  alt="imgnot" className="imgnot"/>
						<h3><small>{getTime(dailyWeather.sunrise)}</small></h3>
					</div>
					<div className="sun">
						<img src={require('./imgnot/img5.png')}  alt="imgnot" className="imgnot fix"/>
						<h3><small>{getTime(dailyWeather.sunset)} </small></h3>
					</div>				
				</div>
			</div>
			<div className="box">
				<h6>Humidity</h6>
				<div className="box-in">
					<img src={require('./imgnot/img6.png')}  alt="imgnot" className="imgnot"/>
					<h2>{dailyWeather.humidity} %</h2>
				</div>
			</div>
			<div className="box">
				<h6>Visibility</h6>
				<div className="box-in">
					<img src={require('./imgnot/img7.png')}  alt="imgnot" className="imgnot"/>
					<h2>{todayVisibility/1000} km</h2>
				</div>				
			</div>
			<div className="box">
				<h6>Pressure</h6>
				<div className="box-in">
					<img src={require('./imgnot/img8.png')}  alt="imgnot" className="imgnot"/>
					<h2>{dailyWeather.pressure}</h2>
				</div>
				
			</div>
	        </div>
       </div>
    )
}

const mapStateToProps = (state) => {
	return {
		weather_data : state.weather_data
	};
};
function getTime(time) {
    var date = new Date(time*1000);

    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

export default connect(mapStateToProps)(Today);
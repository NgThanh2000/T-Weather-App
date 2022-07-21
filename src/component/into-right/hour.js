import {useState, useEffect} from 'react'
import { connect } from "react-redux";
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';

function Hour(props){

    const [time, setTime] = useState([]);
    const [temp, setTemp] = useState([]);
    const [feellike, setFeellike] = useState([]);

    useEffect(() => {
        if(Array.isArray(props.hourly_weather) && props.hourly_weather !== null){
            var dataTime = [];
            var dataTemp = [];
            var dataFeellike = [];
            
            props.hourly_weather.map((item, index) => {
                if(index <= 24){
                    dataTime.push(getTime(item.dt));
                    dataTemp.push(item.temp);
                    dataFeellike.push(item.feels_like);
                }
            });
            setTime(dataTime);
            setTemp(dataTemp);
            setFeellike(dataFeellike);
            
        }
    },[props.hourly_weather])

    // console.log(props.hourly_weather)
    return(
       <div className="hour">
           <Line
                data={{
                    labels: time,
                    datasets: [
                        {
                            data: temp,
                            label: "Temp (0C)",
                            borderColor: "#3BBA9E",
                            fill: false
                        },
                        {
                            data: feellike,
                            label: "Feel Like (0C)",
                            borderColor: "#8D5CA1",
                            fill: false
                        }
                    ]
                }}
                options={{
                    title:{
                        display: false,
                        text: "Hourly Temp"
                    }
                }}
            />
       </div>
    )
}

function getTime(time) {
    var date = new Date(time*1000);

    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}

const mapStateToProps = (state) => {
    return {
        hourly_weather : state.weather_data.hourly
    };
}
export default connect(mapStateToProps)(Hour);
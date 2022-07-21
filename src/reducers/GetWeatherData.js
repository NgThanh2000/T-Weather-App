import { GET_WEATHER_DATA, } from "../const/index";

const GetWeatherData = (state =[], action) =>{
    switch(action.type){
        case GET_WEATHER_DATA:
            state = action.data;
            return state;
        default:
            return state;
    }
}
export default GetWeatherData;
import { API_KEY } from '../const/apiKey';
import axios from 'axios';

export const getCityDataApi = (cityName) => {
    var url = 'http://api.openweathermap.org/geo/1.0/direct?q='+cityName+',VN&limit=5&appid='+API_KEY;

    console.log(url);
    return axios.get(url);
}
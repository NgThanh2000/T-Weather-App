import { API_KEY} from '../const/apiKey';

import axios from 'axios';

export const getWeatherDataApi = (cityData) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+cityData.lat+'&lon='+cityData.lon+'&units=metric&appid='+API_KEY;

    console.log(url);
    return axios.get(url)
}
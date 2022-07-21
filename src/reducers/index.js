import ChooseCity from './ChooseCity';
import GetListCity from './GetListCity';
import GetWeatherData from './GetWeatherData';
import SearchKeyWords from './SearchKeyWords';

import {combineReducers} from 'redux';

export default combineReducers({
    city_data: ChooseCity,
    weather_data: GetWeatherData,
    list_city: GetListCity,
    search_keywords: SearchKeyWords,
})
// tươg tac ng dùng ,api hoặc gọi from
//action
import { GET_LIST_CITY, GET_WEATHER_DATA, SEARCH_KEYWORDS, CHOOSE_CITY, REFESH } from '../const/index';

export const actionSearchKeyWords = (data) => {
    return{
        type: SEARCH_KEYWORDS,
        data
    }
}

export const actionChooseCity = (data) => {
    return{
        type: CHOOSE_CITY,
        data
    }
}

export const actionGetListCity =(data) =>{
    return{
        type:GET_LIST_CITY,
        data
    }
}

export const actionGetWeatherData =(data) =>{
    return{
        type:GET_WEATHER_DATA,
        data
    }
}

export const actionRefesh =(data) =>{
    return{
        type:REFESH,
        data
    }
}
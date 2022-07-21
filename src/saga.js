//import redux saga
import {put, call, takeEvery, all} from 'redux-saga/effects';
//hằng số 
import {CHOOSE_CITY, SEARCH_KEYWORDS, REFESH} from './const/index'
//import api
import { getWeatherDataApi } from './api/weatherApi';
import { getCityDataApi } from './api/geoApi';
// act
import { actionGetWeatherData, actionGetListCity } from './actions/index';


//Sử dụng Generator function ES6
function* getWeatherData(action){
    try{
        //call api getWeatherDataApi
        const data = yield call(getWeatherDataApi, action.data);

        //put sử dụng để phát đi một action cùng với tham số truyền vào
        //trong lần đầu tiên mà action tên getWeatherDataApi được phát đi thì phương thức sẽ kết thúc
        yield put(actionGetWeatherData(data.data));
    }
    catch(error){
        yield put(actionGetWeatherData, error);
    }
};

function* getListCity(action){
    try{
        const data = yield call(getCityDataApi, action.data);
        yield put(actionGetListCity(data.data));
    }
    catch(error){
        yield put(actionGetListCity(error));
    }
};

// refresh sử dụng takeEvery chịu trách nhiệm lắng nghe việc phát đi action REFESH đồng thời thực thi func getWeatherData
// mỗi khi được gọi
function* refresh() {
    yield takeEvery(REFESH, getWeatherData)
}
function* getWeatherDataSaga() {
    yield takeEvery(CHOOSE_CITY, getWeatherData)
};

function* getListCitySaga(){
    yield takeEvery(SEARCH_KEYWORDS, getListCity)
};


//sử dụng nhiều saga cùng bắt đầu tại một thời điểm 
//rootSaga chịu trách nhiệm thực thi nhiệm vụ này. Sử dụng helper call và truyền vào một mảng các saga cần thực hiện
//đây là lúc các generator function hoạt động dộc lập, song song nhau, như các luồng riềng biệt
export default function* rootSaga() {
    yield all([
        getWeatherDataSaga(),
        getListCitySaga(),
        refresh(),
    ])
}
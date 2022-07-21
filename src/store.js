import {createStore, applyMiddleware} from 'redux';

// import reducers đây là file tổng hợp các reducer 
import Reducers from './reducers/index';

// import saga
// Phương thức createSagaMiddleware phần trung gian để kết nối store và saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

//tạo store nhận giá trị là reducer sau đó import vào Provider(hàm của redux) để tất cả các component bên trong app 
//có thể sử dụng hàm connect để gọi đến store
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

//phương thức run của createSagaMiddleware 
sagaMiddleware.run(rootSaga);
export default store;






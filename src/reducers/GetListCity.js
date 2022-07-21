
import { GET_LIST_CITY } from "../const/index";

const ListCity = (state = [], action) => {
    if (action.type === GET_LIST_CITY) {
        state = action.data;
        // data ở đây là url dữu liệu các thành phố 
    }
    
    return state;
};

export default ListCity;
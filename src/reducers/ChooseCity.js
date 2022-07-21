import { CHOOSE_CITY } from "../const/index";

const ChooseCity = (state =[], action) => {
    switch (action.type) {
        case CHOOSE_CITY:
            state = action.data;
            return state;
        default:
            return state;
    }
}
export default ChooseCity;
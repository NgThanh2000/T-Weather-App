import { SEARCH_KEYWORDS } from "../const/index";

const SearchKeyWords = (state =[], action) => {
    switch (action.type) {
        case SEARCH_KEYWORDS:
            state = action.data;
            return state;
        default:
            return state;
    }
}
export default SearchKeyWords;
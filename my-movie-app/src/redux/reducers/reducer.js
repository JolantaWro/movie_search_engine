import {combineReducers} from "redux";
import {DATA_ERROR, DATA_FETCHED, DATA_FETCHING} from "../actions/actions";

const initialState = {
    loading: false,
    error: "",
    movie: [{

    }]
}

function reducerMovies (state=initialState, action) {
    switch (action.type){
        case DATA_FETCHING:
            return {
                ...state,
                loading: true
            }
        case DATA_FETCHED:
            return {
                loading: false,
                movie: action.payload,
                error: null
            }
        case DATA_ERROR:
            return {
                loading: false,
                movie: null,
                error: action.payload
            }
        default:
            return state
    }
}


const rootReducer = combineReducers({
    movies: reducerMovies
});

export default rootReducer;
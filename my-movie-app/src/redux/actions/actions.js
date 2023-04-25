import {getMovieData} from "../../api/movies";

const DATA_FETCHING = "DATA_FETCHING";
const DATA_FETCHED = "DATA_FETCHED";
const DATA_ERROR = "DATA_ERROR";

const startFetching = () => ({
    type: DATA_FETCHING
});

const dataFetched = (value) => ({
    type: DATA_FETCHED,
    payload: value

});

const dataError = (value) => ({
    type: DATA_ERROR,
    payload: value
});

const fetchAsyncData = (value) => {
    return async function(dispatch) {
        dispatch(startFetching());
        try{
            const data = await getMovieData()
            const movies = await data.json()
            console.log(movies)
            if(movies.response) {
                console.log(movies.search)
                dispatch(dataFetched(movies.search))
            //     dispatch(dataFetched([movies]))
            // } else {
            //     dispatch(dataError("Błędy"))
            }
        }
        catch (error) {
            dispatch(dataError(error.message))
        }
    }
}

export { DATA_FETCHING, DATA_FETCHED, DATA_ERROR, startFetching, dataFetched, dataError, fetchAsyncData }
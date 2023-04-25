import React from 'react';
import Movie from "../components/Movie/Movie";
import Search from "../components/Movie/Search";
import {fetchAsyncData} from "../redux/actions/actions";
import {connect} from "react-redux";

const MovieContainer = ({loading, error, movies, moviesAsync}) => {

    const handleSubmit = () => {
        // moviesAsync()
    }
    moviesAsync()

    return (
        <div>
            <Search onSubmit={handleSubmit}/>
            {loading && "Pobieram..."}
            {error && <h3>{error}</h3>}
            <Movie movies={movies} />
        </div>
    );
};

const mapStateToProps = state => ({
    loading: state.movies.loading,
    error: state.movies.error,
    movies: state.movies.company
});

const mapDispatchToProps = dispatch => ({
    moviesAsync: () => dispatch(fetchAsyncData())
});


export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
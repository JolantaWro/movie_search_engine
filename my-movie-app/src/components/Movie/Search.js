import React from 'react';

const Search = ({onSubmit}) => {

    return (
        <div className="control">


            <input className="input is-focused" type="text" placeholder="Wyszukaj film..."/>
            <button className="button is-info">Szukaj</button>
        </div>
    );
};

export default Search;
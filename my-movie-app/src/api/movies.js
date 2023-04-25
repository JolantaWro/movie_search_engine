export function getMovieData(value) {
    return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${value}`)
        .then((response) => response)
}
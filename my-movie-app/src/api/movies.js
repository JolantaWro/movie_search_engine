
// export function getMovieData(value) {
//     return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cd5124ef&s=${value}`)
//         .then((response) => response)
// }
export function getMovieData() {
    return fetch(`https://omdbapi.com/?s=obcy&page=1&apikey=cd5124ef&r=json`)
        .then((response) => response)}
// }export function getMovieData() {
//     return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=cd5124ef&t=obcy&r=json`)
//         .then((response) => response)
// }
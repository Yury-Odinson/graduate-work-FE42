const DOMAIN = "https://imdb-api.com/en/API/"
const topMoviesURL = "Top250Movies/k_5451zvxi/"

const oneMovie = {
    "id": "tt0111161",
    "rank": "1",
    "title": "The Shawshank Redemption",
    "fullTitle": "The Shawshank Redemption (1994)",
    "year": "1994",
    "image": "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_Ratio0.6716_AL_.jpg",
    "crew": "Frank Darabont (dir.), Tim Robbins, Morgan Freeman",
    "imDbRating": "9.2",
    "imDbRatingCount": "2750310"
}

export type Movie = {
    id: string,
    rank: number,
    title: string,
    fullTitle: string,
    year: number,
    image: string,
    crew: string,
    imDbRating: string,
    imDbRatingCount: number
}

export const getMovies = async () => {
    const movieURL = new URL(DOMAIN + topMoviesURL)
    const response = await fetch(movieURL)
    const movies = await response.json()
    return movies
}

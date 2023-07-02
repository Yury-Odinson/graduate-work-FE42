import { tmdbGenresURL, tmdbMoviesURL, tmdbPopularMoviesURL } from "./URLs"
import { FilterValuesToSearch } from "./types"

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWMyZTNmYTFlOTA1NGI0Zjk4NWU5Y2Q2YjJjZjE2OSIsInN1YiI6IjY0ODg5OTdjZDJiMjA5MDE0ZTBhZjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HxHn8Xff6pZFz3mNoT0X56GTr8gCWj3XhhnJ-UsbXI"
    }
};


export const getMovies = async (numberPage: number) => {
    const movieURL = new URL(tmdbMoviesURL + numberPage)
    const response = await fetch(movieURL, options)
    return await response.json()
}

export const getPopularMovies = async (numberPage: number) => {
    const movieURL = new URL(tmdbPopularMoviesURL + numberPage)
    const response = await fetch(movieURL, options)
    return await response.json()
}

export const searchMovies = async (inputValue: string, numberPage: number) => {
    const searchURL = new URL(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${numberPage}`)
    const response = await fetch(searchURL, options)
    return await response.json()
}

export const getGenres = async () => {
    const genresURL = new URL(tmdbGenresURL)
    const response = await fetch(genresURL, options)
    return await response.json()
}

export const getMoviesWithFilter = async ({ movieName, movieAdult, movieYear }: FilterValuesToSearch) => {
    const requestURL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=${movieAdult}&language=en-US&page=1&year=${movieYear}`
    const response = await fetch(requestURL, options)
    return await response.json()
    // const test = await response.json()
    // return console.log(test)
}

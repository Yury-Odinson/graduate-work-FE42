import { strict } from "assert";
import { tmdbGenresURL, tmdbMoviesURL, tmdbPopularMoviesURL } from "./URLs"
import { FilterValuesToSearch } from "./types"

export const fetchOptions = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWMyZTNmYTFlOTA1NGI0Zjk4NWU5Y2Q2YjJjZjE2OSIsInN1YiI6IjY0ODg5OTdjZDJiMjA5MDE0ZTBhZjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HxHn8Xff6pZFz3mNoT0X56GTr8gCWj3XhhnJ-UsbXI"
    }
};

export const getMovies = async (numberPage: number) => {
    const movieURL = new URL(tmdbMoviesURL + numberPage)
    try {
        const response = await fetch(movieURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getPopularMovies = async (numberPage: number) => {
    const movieURL = new URL(tmdbPopularMoviesURL + numberPage)
    try {
        const response = await fetch(movieURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const searchMovies = async (inputValue: string, numberPage: number) => {
    const searchURL = new URL(`https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=${numberPage}`)
    try {
        const response = await fetch(searchURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getGenres = async () => {
    const genresURL = new URL(tmdbGenresURL)
    try {
        const response = await fetch(genresURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getMoviesWithFilter = async ({ movieName, movieAdult, movieYear }: FilterValuesToSearch) => {
    const requestURL = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=${movieAdult}&language=en-US&page=1&year=${movieYear}`
    try {
        const response = await fetch(requestURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getRecommendedMovies = async (idParentMovie: string) => {
    const recommendedURL = `https://api.themoviedb.org/3/movie/${idParentMovie}/recommendations?language=en-US&page=1`
    try {
        const response = await fetch(recommendedURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getRandomMovie = async (idMovie: number) => {
    const randomMovieURL = `https://api.themoviedb.org/3/movie/${idMovie}?language=en-US`
    try {
        const response = await fetch(randomMovieURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export const getMovie = async (idMovie: string) => {
    const movieURL = `https://api.themoviedb.org/3/movie/${idMovie}?language=en-US`
    try {
        const response = await fetch(movieURL, fetchOptions)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}


export const favoritesStorage: string[] = []
export const addToFavorites = async (idMovie: string) => {
    favoritesStorage.push(idMovie)
    localStorage.setItem("idMovies", JSON.stringify(favoritesStorage))
    console.log(favoritesStorage)
}

export const getFavoritesMovies = async (idMovies: string[]) => {
    const finalArr = []
    for (let i = 0; i < idMovies.length; i++) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${idMovies[i]}?language=en-US`, fetchOptions)
        finalArr.push(await response.json())
    }
    // return await console.log(finalArr)
    return await finalArr
}

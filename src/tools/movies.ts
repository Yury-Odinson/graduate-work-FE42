import { tmdbGenresURL, tmdbMoviesURL, tmdbPopularMoviesURL } from "./URLs"

export type Movie = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: string,
    vote_count: number
}

const srlgd = {
    "adult": false,
    "backdrop_path": "/2e7fc8eNwLXZ5Uvehvl3xj8wVyv.jpg",
    "genre_ids": [
        28,
        80,
        53
    ],
    "id": 385687,
    "original_language": "en",
    "original_title": "Fast X",
    "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
    "popularity": 8363.473,
    "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
    "release_date": "2023-05-17",
    "title": "Fast X",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 1347
}

export const getMovies = async (numberPage: number) => {
    const movieURL = new URL(tmdbMoviesURL + numberPage)
    const response = await fetch(movieURL, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWMyZTNmYTFlOTA1NGI0Zjk4NWU5Y2Q2YjJjZjE2OSIsInN1YiI6IjY0ODg5OTdjZDJiMjA5MDE0ZTBhZjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HxHn8Xff6pZFz3mNoT0X56GTr8gCWj3XhhnJ-UsbXI"
        }
    })
    return await response.json()
}

export const getGenres = async () => {
    const genresURL = new URL(tmdbGenresURL)
    const response = await fetch(genresURL, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWMyZTNmYTFlOTA1NGI0Zjk4NWU5Y2Q2YjJjZjE2OSIsInN1YiI6IjY0ODg5OTdjZDJiMjA5MDE0ZTBhZjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HxHn8Xff6pZFz3mNoT0X56GTr8gCWj3XhhnJ-UsbXI"
        }
    })
    return await response.json()
}

export const getPopularMovies = async (numberPage: number) => {
    const movieURL = new URL(tmdbPopularMoviesURL)
    const response = await fetch(movieURL, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWMyZTNmYTFlOTA1NGI0Zjk4NWU5Y2Q2YjJjZjE2OSIsInN1YiI6IjY0ODg5OTdjZDJiMjA5MDE0ZTBhZjYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1HxHn8Xff6pZFz3mNoT0X56GTr8gCWj3XhhnJ-UsbXI"
        }
    })
    return await response.json()
}

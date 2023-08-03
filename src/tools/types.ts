export type User = {
    username?: string | null;
    email: string | null;
    password: string | null;
}

export type Token = {
    access: string,
    refresh: string
}

export type Movie = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: {
        id: string,
        name: string
    }[],
    homepage: string,
    id: string,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: 107.982,
    poster_path: string,
    production_companies: {
        id: 97,
        logo_path: string,
        name: string,
        origin_country: string
    }[],
    production_countries: [{
        iso_3166_1: string,
        name: string
    }],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: {
        english_name: string,
        iso_639_1: string,
        name: string
    }[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: string, // or number
    vote_count: string, // or number
}

export type MovieCard = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: string
    original_language: string
    original_title: string
    overview: string
    popularity: string
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type Languages = {
    iso_639_1: string,
    english_name: string,
    name: string
}

export type FilterValuesToSearch = {
    movieName?: string,
    movieAdult?: boolean,
    movieYear?: string // or number
}

export type RecommendedMoviesProps = {
    idParentMovie: string
}

export type ChangeColorNavigation = {
    color: string,
}

export type FilterMenuProps = {
    opened: boolean,
    close: () => void
}

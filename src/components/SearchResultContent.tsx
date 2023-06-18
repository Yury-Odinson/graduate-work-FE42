import { useEffect, useState } from "react"
import { Movie, searchMovies } from "../tools/movies"
import { Link } from "react-router-dom"
import { CardMovie } from "./CardMovie"
import { SearchValueProps } from "./Main"

export const SearchResultContent = ({ inputSearchValue }: SearchValueProps) => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        searchMovies(inputSearchValue, page).then((movies) => setMovies(movies.results))
    }, [])

    return (
        <div className="content-movies">
            <p style={spanWhiteStyle}>result</p>
            <p style={spanWhiteStyle}>{inputSearchValue}</p>
            {movies.map((item) =>
                <li>
                    <Link to={"/movie_" + item.id}>
                        <CardMovie movie={item} />
                    </Link>
                </li>
            )}
        </div>
    )
}
const spanWhiteStyle = {
    color: "#FFF",
};

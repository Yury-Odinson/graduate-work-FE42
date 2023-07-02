import { useState } from "react"
import "../styles/filter.css"
import { FilterStateProps } from "../tools/types"
import { getMoviesWithFilter } from "../tools/movies"
import { Link } from "react-router-dom"

export const Filter = ({ handlerSetMenu }: FilterStateProps) => {

    const [sortBy, setSortBy] = useState("")
    const [movieName, setMovieName] = useState("")
    const [movieYear, setMovieYear] = useState("")
    const [movieAdult, setMovieAdult] = useState(false)

    const clearFilter = () => {
        setSortBy("");
        setMovieName("");
        setMovieYear("");
        setMovieAdult(false);
    }

    return (
        <>
            <div className="filter">
                <div className="filter-header">
                    <h2 className="filter__title">Filters</h2>
                    <button className="filter__buttonClose" onClick={() => handlerSetMenu()}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6569 10.2426L7.41421 5.99999L11.6569 1.75735C12.0472 1.36702 12.0472 0.733456 11.6569 0.343133C11.2665 -0.0471895 10.633 -0.0471895 10.2426 0.343133L6 4.58577L1.75736 0.343133C1.36704 -0.0471895 0.733469 -0.0471895 0.343146 0.343133C-0.0471771 0.733456 -0.0471771 1.36702 0.343146 1.75735L4.58579 5.99999L0.343146 10.2426C-0.0478838 10.6337 -0.0471771 11.2665 0.343146 11.6568C0.733469 12.0472 1.36633 12.0479 1.75736 11.6568L6 7.4142L10.2426 11.6568C10.6337 12.0479 11.2665 12.0472 11.6569 11.6568C12.0472 11.2665 12.0479 10.6337 11.6569 10.2426Z" fill="white" />
                        </svg>
                    </button>
                </div>

                <div className="filter-sort">
                    <span className="filter-sort__title">Sort by</span>
                    <label className="filter-sort-items">
                        <button className="filter-sort__button" onClick={() => setSortBy("Rating")}>Rating</button>
                        <button className="filter-sort__button" onClick={() => setSortBy("Year")}>Year</button>
                    </label>
                </div>

                <label className="filter-movieName">
                    <span className="filter-movieName__title">Full or short movie name *</span>
                    <input className="filter-movieName__input" placeholder="Your text" onChange={(e) => setMovieName(e.target.value)} value={movieName}></input>
                </label>

                <div className="filter-additional">
                    <label className="filter-year">
                        <span className="filter-additional__title">Year of issue</span>
                        <input className="filter-additional__input" placeholder="Year" maxLength={4} onChange={(e) => setMovieYear(e.target.value)} value={movieYear}></input>
                    </label>
                    <label className="filter-adult">
                        <span className="filter-adult__title">Adult</span>
                        <input className="toggle" type="checkbox" onChange={() => setMovieAdult(!movieAdult)} checked={movieAdult}></input>
                    </label>
                </div>

                <div className="filter-footer">
                    <label className="filter-footer-items">
                        <button className="filter-footer__buttons" onClick={() => clearFilter()}>Clear filter</button>

                        <Link to={"/search/"}>
                            <button className="filter-footer__buttons" onClick={() => getMoviesWithFilter({ movieName, movieAdult, movieYear })}>Show results</button>
                        </Link>

                    </label>
                </div>

            </div>
        </>
    )
}

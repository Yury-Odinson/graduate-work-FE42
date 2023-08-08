import { useContext, useEffect, useState } from "react"
import { FilterMenuProps } from "../tools/types"
import { Link } from "react-router-dom"
import { Drawer } from "@mui/material"
import "../styles/filter.css"
import { FilterContext } from "../tools/store"

export const Filter = () => {

    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <button className="header-filter__button" onClick={() => setExpanded(!expanded)} />
            <ExpandedMenu opened={expanded} close={() => setExpanded(false)} />
        </>
    )
}

const ExpandedMenu = ({ opened, close }: FilterMenuProps) => {
    const [sortBy, setSortBy] = useState("")
    const [movieName, setMovieName] = useState("")
    const [movieYear, setMovieYear] = useState("")
    const [movieAdult, setMovieAdult] = useState(false)

    useEffect(() => {

    }, [sortBy, movieName, movieYear, movieAdult])

    const test = useContext(FilterContext)
    console.log(test)


    // test.setFilter

    const clearFilter = () => {
        setSortBy("");
        setMovieName("");
        setMovieYear("");
        setMovieAdult(false);
    }

    return (
        <Drawer
            anchor={"right"}
            open={opened}
            onClose={close}
        >
            <div className="filter">
                <div className="filter-header">
                    <h2 className="filter__title">Filters</h2>
                </div>
                <div className="filter-sort">
                    <span className="filter-sort__title">Sort by</span>
                    <label className="filter-sort-items">
                        <button className={sortBy === "Rating" ? "filter-sort__buttonActive" : "filter-sort__button"} onClick={() => setSortBy("Rating")}>Rating</button>
                        <button className={sortBy === "Year" ? "filter-sort__buttonActive" : "filter-sort__button"} onClick={() => setSortBy("Year")}>Year</button>
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
                        <Link to={"/search/" + movieName}>
                            <button className="filter-footer__buttons">Show results</button>
                        </Link>
                    </label>
                </div>
            </div>
        </Drawer >
    )
}

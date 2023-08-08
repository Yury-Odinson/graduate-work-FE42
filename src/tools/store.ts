import React from "react"
import { FilterValuesToSearch, ThemeType, FilterType } from "./types"

export const defaultFilterValue: FilterValuesToSearch = {
    movieSort: "",
    movieName: "string",
    movieAdult: false,
    movieYear: ""
}

export const FilterContext = React.createContext<FilterType>({
    filter: defaultFilterValue,
    setFilter: () => { }
})


// export const SetFilter = React.createContext(() => { })

export const ThemeContext = React.createContext<ThemeType>("dark")
export const ChangeTheme = React.createContext(() => { })

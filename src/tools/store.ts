import React from "react"
import { FilterValuesToSearch, ThemeType } from "./types"

export const FilterContext = React.createContext<FilterValuesToSearch>({
    movieSort: "",
    movieName: "",
    movieAdult: false,
    movieYear: ""
})
// export const SetFilter = React.createContext(() => { })

export const ThemeContext = React.createContext<ThemeType>("dark")
export const ChangeTheme = React.createContext(() => { })

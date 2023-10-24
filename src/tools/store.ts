import React from "react"
import { FilterValuesToSearch, ThemeType, FilterType, UserName } from "./types"

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

export const ThemeContext = React.createContext<ThemeType>("dark")
export const ChangeTheme = React.createContext(() => { })

export const userContext = React.createContext<UserName>({ username: "" })

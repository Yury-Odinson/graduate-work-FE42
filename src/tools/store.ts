import React, { createContext } from "react"
import { ThemeType } from "./types"

export const FilterContext = React.createContext({})


// export const DefaultTheme: ThemeType = "dark"
export const ThemeContext = createContext<ThemeType>("dark")

export const ChangeTheme = React.createContext(() => { })

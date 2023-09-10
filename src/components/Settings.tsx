import { useContext, useEffect, useState } from "react"
import "../styles/main.css"
import { ChangeTheme, ThemeContext } from "../tools/store"
import { ThemeType } from "../tools/types"

export const Settings = () => {

    const [theme, setTheme] = useState<ThemeType>("dark")

    const changeTheme = useContext(ChangeTheme)
    const thisTheme = useContext(ThemeContext)

    const reverseTheme = () => theme === "dark" ? "light" : "dark"

    useEffect(() => {
        if (thisTheme === "dark") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }, [changeTheme])

    return (
        <div className="settings">
            <h1 className="content__title">Color mode</h1>

            <div className="settings-cover">
                <div className="settings-cover-items">
                    <p className="settings__themaName">{theme.toUpperCase()}</p>
                    <p>Use {reverseTheme()} thema</p>
                </div>
                <div className="settings-cover-items">
                    <input className="toggle" type="checkbox" onChange={() => changeTheme()} />
                </div>
            </div>
        </div>
    )
}
import { useContext } from "react"
import "../styles/main.css"
import { ChangeTheme, ThemeContext } from "../tools/store"

export const Settings = () => {


    const changeTheme = useContext(ChangeTheme)
    const theme = useContext(ThemeContext)

    const reverseTheme = () => theme === "dark" ? "light" : "dark"
    const classNameTheme = () => theme === "light" ? "Light" : ""

    return (
        <div className="settings">
            <h1 className={"content__title" + classNameTheme()}>Color mode</h1>

            <div className={theme === "dark" ? "settings-cover" : "settings-coverLight"}>
                <div className="settings-cover-items">
                    <p className={"settings__themaName" + classNameTheme()}>{theme.toUpperCase()}</p>
                    <p>Use {reverseTheme()} thema</p>
                </div>
                <div className="settings-cover-items">
                    <input className="toggle" type="checkbox" defaultChecked={theme === "light" ? true : false} onChange={() => changeTheme()} />
                </div>
            </div>
        </div>
    )
}
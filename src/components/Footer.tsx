import { useContext } from "react"
import { ThemeContext } from "../tools/store"

export const Footer = () => {

    const theme = useContext(ThemeContext)
    const classNameTheme = () => theme === "light" ? "Light" : ""

    const scrollUp = () => {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            return window.scrollTo(0, 0)
        }
    }

    return (
        <footer>
            <button className={"scrollUp" + classNameTheme()}onClick={() => scrollUp()} />
        </footer>
    )
}

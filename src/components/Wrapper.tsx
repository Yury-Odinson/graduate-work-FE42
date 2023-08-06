import "../styles/wrapper.css"
import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { FormLoginWrapper } from "./FormLoginWrapper";
import { ThemeContext } from "../tools/store";
import { useContext } from "react";

export const Wrapper = () => {

    const theme = useContext(ThemeContext)
    console.log(theme)

    const darkTheme = { background: "var(--var-backgroundColor)" }
    const lightTheme = { background: "var(--var-backgroundWhite)" }

    return (
        <>
            <div className="wrapper" style={theme === "light" ? lightTheme : darkTheme}>
                <Routes >
                    <Route path="/*" element={<Main />} />
                    <Route path="/login/*" element={<FormLoginWrapper />} />
                </Routes>
            </div>
        </>
    )
}

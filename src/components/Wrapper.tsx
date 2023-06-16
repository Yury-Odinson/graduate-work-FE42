import "../styles/wrapper.css"
import { Route, Routes } from "react-router-dom";
import { Main } from "./Main";
import { FormLoginWrapper } from "./FormLoginWrapper";
import { Home } from "./Home";

export const Wrapper = () => {
    return (
        <>
            <div className="wrapper">
                <Routes >
                    <Route path="/*" element={<Main />} />
                    <Route path="/login/*" element={<FormLoginWrapper />} />
                </Routes>
            </div>
        </>
    )
}

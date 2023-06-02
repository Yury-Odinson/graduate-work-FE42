import { SignInWrapper } from "./SignInWrapper";
import "../styles/wrapper.css"
import { Route, Routes } from "react-router-dom";
import { SignUp } from "./SignUp";

export const Wrapper = () => {
    return (
        <>
            <div className="wrapper">
                <Routes >
                    <Route path="/" element={<SignInWrapper />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </div>
        </>
    )
}

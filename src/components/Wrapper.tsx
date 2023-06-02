import { SignInWrapper } from "./SignInWrapper";
import "../styles/wrapper.css"
import { Route, Routes } from "react-router-dom";
import { SignUpWrapper } from "./SignUpWrapper";

export const Wrapper = () => {
    return (
        <>
            <div className="wrapper">
                <Routes >
                    <Route path="/" element={<SignInWrapper />} />
                    <Route path="/signup" element={<SignUpWrapper />} />
                </Routes>
            </div>
        </>
    )
}

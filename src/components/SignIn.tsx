import { Link } from "react-router-dom"
import "../styles/formLogin.css"
import { useState } from "react"
import { User, authUser, saveToken } from "../tools/users"

export const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState("password")

    const handlerCheck = async ({ email, password }: User) => {
        const tokens = await authUser({ email, password })
        saveToken(tokens)

    }

    return (
        <>
            <div className="form">
                <p className="form__title">Sign In</p>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email" onChange={(e) => setEmail(e.target.value)}></input>
                <span className="form-elem__span">Password</span>
                <label className="form-elem__pass">
                    <input type={showPassword} className="form__input" placeholder="Your password" onChange={(e) => setPassword(e.target.value)}></input>
                    <img className="form-elem__showpass" src="../images/pass_show.png" onClick={() => setShowPassword("text")} />
                </label>
                <Link to={"/login/resetpassword"}>
                    <span className="form-elem__spanPass">Forgot password?</span>
                </Link>
                <button className="form-elem__button" onClick={() => handlerCheck({ email, password })}>Sign in</button>
                <span className="form-elem__footerSpan">Don't have account? &nbsp;
                    <Link to={"/login/signup"}>
                        Sign up!
                    </Link>
                </span>
            </div>
        </>
    )
}

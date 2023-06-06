import { Link } from "react-router-dom"
import "../styles/formLogin.css"
import { useState } from "react"
import { User, authUser } from "../tools/users"

export const SignIn = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [showPassword, setShowPassword] = useState("password")

    const checkUser = (inputEmail: string, inputPassword: string) => {
        const request: User = {
            email: inputEmail,
            password: inputPassword
        }
        return authUser(request)
    }

    return (
        <>
            <div className="form">
                <p className="form__title">Sign In</p>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email" onChange={(e) => setUserEmail(e.target.value)}></input>
                <span className="form-elem__span">Password</span>
                <label className="form-elem__pass">
                    <input type={showPassword} className="form__input" placeholder="Your password" onChange={(e) => setUserPassword(e.target.value)}></input>
                    <img className="form-elem__showpass" src="../images/pass_show.png" onClick={() => setShowPassword("text")} />
                </label>
                <Link to={"/login/resetpassword"}>
                    <span className="form-elem__spanPass">Forgot password?</span>
                </Link>
                <button className="form-elem__button" onClick={() => checkUser(userEmail, userPassword)}>Sign in</button>
                <span className="form-elem__footerSpan">Don't have account? &nbsp;
                    <Link to={"/login/signup"}>
                        Sign up!
                    </Link>
                </span>
            </div>
        </>
    )
}

import { Link } from "react-router-dom"
import "../styles/formLogin.css"

export const SignIn = () => {
    return (
        <>
            <div className="form">
                <p className="form__title">Sign In</p>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email"></input>
                <span className="form-elem__span">Password</span>
                <input type="text" className="form__input" placeholder="Your password"></input>
                <Link to={"/login/resetpassword"}>
                    <span className="form-elem__spanPass">Forgot password?</span>
                </Link>
                <button className="form-elem__button">Sign in</button>
                <span className="form-elem__footerSpan">Don't have account? &nbsp;
                    <Link to={"/login/signup"}>
                        Sign up!
                    </Link>
                </span>
            </div>
        </>
    )
}

import { Link } from "react-router-dom"

export const SignUp = () => {
    return (
        <>
            <div className="form">
                <p className="form__title">Sign Up</p>
                <span className="form-elem__span">Name</span>
                <input type="text" className="form__input" placeholder="Your name"></input>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email"></input>
                <span className="form-elem__span">Password</span>
                <input type="text" className="form__input" placeholder="Your password"></input>
                <span className="form-elem__span">Confirm password</span>
                <input type="text" className="form__input" placeholder="Confirm password"></input>
                <button className="form-elem__button">Sign up</button>
                <span className="form-elem__footerSpan">Already have an account? &nbsp;
                    <Link to={"/login"}>
                        Sign in!
                    </Link>
                </span>
            </div>
        </>
    )
}

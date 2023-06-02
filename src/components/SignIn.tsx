import "../styles/signIn.css"

export const SignIn = () => {
    return (
        <>
            <div className="form">
                <p className="form__title">Sign In</p>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email"></input>
                <span className="form-elem__span">Password</span>
                <input type="text" className="form__input" placeholder="Your password"></input>
                <a href="./" className="form-elem__spanPass"><span>Forgot password?</span></a>
                <button className="form-elem__button">Sign in</button>
                <span className="form-elem__footerSpan">Don't have account? <a href="./">Sign Up</a></span>
            </div>
        </>
    )
}

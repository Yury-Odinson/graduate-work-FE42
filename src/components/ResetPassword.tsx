export const ResetPassword = () => {
    return (
        <div className="form">
            <p className="form__title">Reset password</p>
            <span className="form-elem__span">Email</span>
            <input type="text" className="form__input" placeholder="Your email"></input>
            <button className="form-elem__button">Reset</button>
        </div >
    )
}

export const NewPassword = () => {
    return (
        <>
            <div className="form">
                <p className="form__title">New password</p>
                <span className="form-elem__span">Password</span>
                <input type="text" className="form__input" placeholder="Your password"></input>
                <span className="form-elem__span">Confirm password</span>
                <input type="text" className="form__input" placeholder="Confirm your password"></input>
                <button className="form-elem__button">Set password</button>
            </div >
        </>
    )
}

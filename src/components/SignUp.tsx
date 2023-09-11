import { useState } from "react"
import { Link } from "react-router-dom"
import { regUser } from "../tools/users"
import { User } from "../tools/types"

export const SignUp = () => {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("")
    const [showPassword, setShowPassword] = useState("password")
    const [showConfirmPass, setShowConfirmPass] = useState("password")

    const getWrongPassword = (pass: string, confirm: string) => pass !== confirm && confirm !== "" && <p className="form-elem__wrongPassword">check password</p>
    const checkPass = (pass: string, confirm: string) => pass === confirm && pass

    const addUser = (inputName: string, inputEmail: string, inputPassword: string) => {
        const newUser: User = {
            username: inputName,
            email: inputEmail,
            password: inputPassword
        }
        return regUser(newUser)
    }

    const handlerShowPass = () => showPassword === "password" ? setShowPassword("text") : setShowPassword("password")
    const handlerShowConfirmPass = () => showConfirmPass === "password" ? setShowConfirmPass("text") : setShowConfirmPass("password")
    return (
        <div className="form">
            <p className="form__title">Sign Up</p>
            <label className="form-label">
                <span className="form-elem__span">Name</span>
                <input type="text" className="form__input" placeholder="Your email" onChange={(e) => setUserName(e.target.value)}></input>
            </label>
            <label className="form-label">
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email" onChange={(e) => { setUserEmail(e.target.value) }}></input>
            </label>
            <label className="form-label">
                <span className="form-elem__span">Password</span>
                <input type={showPassword} className="form__input" placeholder="Your password" onChange={(e) => { setUserPassword(e.target.value) }}></input>
                <img className="form-elem__showpass" src="../images/pass_show.png" onClick={() => handlerShowPass()} />
            </label>
            <label className="form-label">
                <span className="form-elem__span">Confirm password</span>
                <input type={showConfirmPass} className="form__input" placeholder="Confirm password" onChange={(e) => { setConfirmUserPassword(e.target.value) }}></input>
                <img className="form-elem__showpass" src="../images/pass_show.png" onClick={() => handlerShowConfirmPass()} />
            </label>
            {getWrongPassword(userPassword, confirmUserPassword)}
            <button className="form-elem__button" onClick={() => checkPass(userPassword, confirmUserPassword) && addUser(userName, userEmail, confirmUserPassword)}>Sign up</button>
            <span className="form-elem__footerSpan">Already have an account? &nbsp;
                <Link to={"/login"}>
                    Sign in!
                </Link>
            </span>
        </div>
    )
}

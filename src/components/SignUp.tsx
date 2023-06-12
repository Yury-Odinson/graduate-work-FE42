import { useState } from "react"
import { Link } from "react-router-dom"
import { User, regUser } from "../tools/users"

export const SignUp = () => {

    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [confirmUserPassword, setConfirmUserPassword] = useState("")
    const [showPass, setShowPass] = useState("password")
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

    return (
        <>
            <div className="form">
                <p className="form__title">Sign Up</p>
                <span className="form-elem__span">Name</span>
                <input type="text" className="form__input" placeholder="Your name" onChange={(e) => { setUserName(e.target.value) }}></input>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email" onChange={(e) => { setUserEmail(e.target.value) }}></input>
                <span className="form-elem__span">Password</span>
                <label className="form-elem__pass">
                    <input type={showPass} className="form__input" placeholder="Your password" onChange={(e) => { setUserPassword(e.target.value) }}></input>
                    <img className="form-elem__showpass" src="../images/pass_show.png" onClick={() => setShowPass("text")} />
                </label>
                <span className="form-elem__span">Confirm password</span>
                <label className="form-elem__pass">
                    <input type={showConfirmPass} className="form__input" placeholder="Confirm password" onChange={(e) => { setConfirmUserPassword(e.target.value) }}></input>
                    <img className="form-elem__showpass" src="../images/pass_show.png" onClick={() => setShowConfirmPass("text")} />
                </label>
                {getWrongPassword(userPassword, confirmUserPassword)}
                <button className="form-elem__button" onClick={() => checkPass(userPassword, confirmUserPassword) && addUser(userName, userEmail, confirmUserPassword)}>Sign up</button>
                <span className="form-elem__footerSpan">Already have an account? &nbsp;
                    <Link to={"/login"}>
                        Sign in!
                    </Link>
                </span>
            </div>
        </>
    )
}

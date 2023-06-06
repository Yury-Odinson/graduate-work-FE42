import { useState } from "react"
import { Link } from "react-router-dom"

export const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmP, setConfirmP] = useState("")

    const getWrongPassword = (pass: string, confirm: string) => pass !== confirm && confirm !== "" && <p className="form-elem__wrongPassword">check password</p>
    const checkPass = (pass: string, confirm: string) => pass === confirm && pass

    return (
        <>
            <div className="form">
                <p className="form__title">Sign Up</p>
                <span className="form-elem__span">Name</span>
                <input type="text" className="form__input" placeholder="Your name" onChange={(e) => { setName(e.target.value) }}></input>
                <span className="form-elem__span">Email</span>
                <input type="text" className="form__input" placeholder="Your email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <span className="form-elem__span">Password</span>
                <input type="password" className="form__input" placeholder="Your password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <span className="form-elem__span">Confirm password</span>
                <input type="password" className="form__input" placeholder="Confirm password" onChange={(e) => { setConfirmP(e.target.value) }}></input>
                {getWrongPassword(password, confirmP)}
                <button className="form-elem__button" onClick={() => checkPass(password, confirmP)}>Sign up</button>
                <span className="form-elem__footerSpan">Already have an account? &nbsp;
                    <Link to={"/login"}>
                        Sign in!
                    </Link>
                </span>
            </div>
        </>
    )
}

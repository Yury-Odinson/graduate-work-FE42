import { domainAuthURL, regUserURL, userAuthURL } from "./URLs";
import { Token, User } from "./types";


export const regUser = async (user: User) => {
    const regURL = new URL(domainAuthURL + regUserURL)
    const response = await fetch(regURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

export const authUser = async (user: User) => {
    const authURL = new URL(domainAuthURL + userAuthURL)
    const response = await fetch(authURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

export const saveToken = ({ access, refresh }: Token) => {
    localStorage.setItem("access", access)
    localStorage.setItem("refresh", refresh)
    // console.log(access, refresh)
}

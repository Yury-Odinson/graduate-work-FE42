import { domainAuthURL, refreshTokenURL, regUserURL, userAuthURL } from "./URLs";
import { newToken, User } from "./types";

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

export const saveToken = ({ access, refresh }: newToken) => {
    localStorage.setItem("access", access)
    localStorage.setItem("refresh", refresh)
}

export const updateToken = async (refresh: string) => {
    const refreshURL = new URL(domainAuthURL + refreshTokenURL)
    const response = await fetch(refreshURL, {
        method: "POST",
        body: JSON.stringify(new Object({ "refresh": refresh })),
        headers: { "Content-Type": "application/json" }
    })
    const newToken = await response.json()
    return localStorage.setItem("access", newToken.access)
}

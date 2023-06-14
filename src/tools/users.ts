import { domainAuthURL, regUserURL } from "./URLs";

export type User = {
    username?: string | null;
    email: string | null;
    password: string | null;
}

export type Token = {
    access: string,
    refresh: string
}

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
    const authURL = new URL(domainAuthURL + regUserURL)
    const response = await fetch(authURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

export const saveToken = ({ access, refresh }: Token) => {
    // localStorage.setItem("access", access)
    // localStorage.setItem("refresh", refresh)
    console.log(access, refresh)
}

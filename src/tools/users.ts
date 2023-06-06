const DOMAIN = "https://studapi.teachmeskills.by"
const REGUSER = "/auth/users/"
const AUTHUSER = "/auth/jwt/create/"

export type User = {
    username?: string | null;
    email: string | null;
    password: string | null;
}

export const regUser = async (user: User) => {
    const regURL = new URL(DOMAIN + REGUSER)
    const response = await fetch(regURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

export const authUser = async (user: User) => {
    const authURL = new URL(DOMAIN + AUTHUSER)
    const response = await fetch(authURL, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    return await response.json()
}

const DOMAIN = "https://studapi.teachmeskills.by"
const REGUSER = "/auth/users/"

export type User = {
    username: string | null;
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
    const result = await response.json()
    return result
}

import { useState } from "react"

export const Search = () => {

    const [value, setValue] = useState("")

    return (
        <>
            {value}
            <input className="header__search" type="search" placeholder="Search" onChange={(e) => setValue(e.target.value)}></input>
        </>
    )
}

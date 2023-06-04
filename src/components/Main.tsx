import { Link } from "react-router-dom"
import "../styles/main.css"
import { UserMenu } from "./UserMenu"
import { useState } from "react"

export type ExpandedMenuProps = {
    opened: boolean,
    changeState: () => void
}

export const Main = () => {

    const [expandedUserMenu, setExpandedUserMenu] = useState(false)

    return (
        <>
            <UserMenu opened={expandedUserMenu} changeState={() => setExpandedUserMenu(!expandedUserMenu)} />
            <div className="content">
                <Link to={"/login"}><button>open auth page</button></Link>
            </div>
        </>
    )
}

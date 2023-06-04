import { useState } from "react"

export type ExpandedMenuProps = {
    opened: boolean,
    changeState: () => void
}

export const UserMenu = ({ opened, changeState }: ExpandedMenuProps) => {

    return (
        <>
            <div className="header">
                <input className="header__search" type="search" placeholder="Search"></input>
                <div className="header__user">
                    <div className="user-initials">
                        <span className="user-initials__item">DEB</span>
                    </div>
                    <span className="user__name"> dr. Emmet Brown</span>
                    <div className="user__menu" onClick={changeState}>
                    </div>
                </div>
            </div>
        </>
    )
}

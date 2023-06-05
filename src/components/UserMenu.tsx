import { useState } from "react"

export const UserMenu = () => {

    const [expandedUserMenu, setExpandedUserMenu] = useState(false)

    const showMenu = () => {
        if (expandedUserMenu === true) {
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6569 10.2426L7.41421 5.99999L11.6569 1.75735C12.0472 1.36702 12.0472 0.733456 11.6569 0.343133C11.2665 -0.0471895 10.633 -0.0471895 10.2426 0.343133L6 4.58577L1.75736 0.343133C1.36704 -0.0471895 0.733469 -0.0471895 0.343146 0.343133C-0.0471771 0.733456 -0.0471771 1.36702 0.343146 1.75735L4.58579 5.99999L0.343146 10.2426C-0.0478838 10.6337 -0.0471771 11.2665 0.343146 11.6568C0.733469 12.0472 1.36633 12.0479 1.75736 11.6568L6 7.4142L10.2426 11.6568C10.6337 12.0479 11.2665 12.0472 11.6569 11.6568C12.0472 11.2665 12.0479 10.6337 11.6569 10.2426Z" fill="white" />
                </svg>
            )
        } else {
            return (
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L6 5L1 1" stroke="#AFB2B6" stroke-width="2" stroke-linecap="round" />
                </svg>
            )
        }
    }

    return (
        <>
            <div className="header">
                <input className="header__search" type="search" placeholder="Search"></input>
                <div className="header__user">
                    <div className="user-initials">
                        <span className="user-initials__item">DEB</span>
                    </div>
                    <span className="user__name"> dr. Emmet Brown</span>
                    <div className="user__menu" onClick={() => setExpandedUserMenu(!expandedUserMenu)}>
                        {showMenu()}
                    </div>
                </div>
            </div>
        </>
    )
}

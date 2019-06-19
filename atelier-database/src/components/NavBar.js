import React from 'react'

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img src="https://vignette.wikia.nocookie.net/atelierseries/images/f/ff/A20LogoJapanese.png/revision/latest/scale-to-width-down/350?cb=20181106201629" alt="Atelier Lulua Logo"/>
            </div>
            <div className="main-menu">
                <ul className="menu">
                    <li><a href="/">Materials</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
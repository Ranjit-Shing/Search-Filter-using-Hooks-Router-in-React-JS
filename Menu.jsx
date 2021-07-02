import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className="main_div">
                <NavLink exact activeClassname="active_main " to="/"> <h1>About Us</h1></NavLink>
                <NavLink exact activeClassname="active_main " to="/contact"> <h1>Contact</h1></NavLink>
                <NavLink exact activeClassname="active_main " to="/service"> <h1>Service</h1></NavLink>
                <NavLink exact activeClassname="active_main " to="/search"> <h1>Search</h1></NavLink>
            </div>

        </>
    )
}
export default Menu
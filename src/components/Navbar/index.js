import React from 'react'
import {Nav, NavLink, Bars, NavIcon} from './NavbarElements';


const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
           <NavLink to="/">pizza</NavLink>
           <NavIcon onClick={toggle}>
           <p>Menu</p>
           <Bars />
           </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar;

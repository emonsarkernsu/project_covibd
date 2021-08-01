import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon,
NavMenu, NavItems, NavLinks, NavItem,
NavBtn, NavBtnLink} from './NavBarElements';
const NavBar = ({ toggle }) => {

  return(
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">KacherDoroja</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks activeClassName="any" to="/home"> Home </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services"> Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/hospital"> Hospital </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/vaccine"> Vaccine </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'> Sign In </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavBar;

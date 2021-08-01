import React from 'react'
import {SideBarContainer, Icon, CloseIcon,
SideBarWrapper, SideBarMenu, SideBarLink,
SideBtnWrap, SideBarRoute} from './SideBarElements'


const SideBar = ({ isOpen, toggle }) => {
  return(
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to='/home'> Home </SideBarLink>
          <SideBarLink to='/services'> Services </SideBarLink>
          <SideBarLink to='/foremployees'> For Employees </SideBarLink>
          <SideBarLink to='/foremployers'> For Employers </SideBarLink>
          <SideBarLink to= 'signup'> Sign Up</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to='/signin'> Sign in </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar

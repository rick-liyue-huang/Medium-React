
import React , { Component } from 'react';
// 带有样式的div标签
import { HeaderWrapper, Logo, Nav,
  NavItem, NavSearch } from './style';

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header
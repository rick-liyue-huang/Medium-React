
import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from './style';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe6b1;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className='iconfont'>&#xe607;</i>
          </SearchWrapper>
          
        </Nav>
        <Addition>
          <Button className='write'>
            <i className='iconfont'>&#xe7c9;</i>
            Write
          </Button>
          <Button className='reg'>Register</Button> 
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;
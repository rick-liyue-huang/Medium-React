
import React , { Component } from 'react';
// 带有样式的div标签
import { HeaderWrapper, Logo, Nav,
  NavItem, NavSearch, Addition, Button,
  SearchWrapper } from './style';

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe6b1;</i></NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <i className='iconfont'>&#xe60c;</i>
          </SearchWrapper>
          
        </Nav>
        <Addition>
          <Button className='write'>
            <i className='iconfont'>&#xe63a;</i>
            Write
          </Button>
          <Button className='reg'>Reg</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header
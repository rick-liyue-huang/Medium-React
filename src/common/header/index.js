
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from './style';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };

    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Home</NavItem>
          <NavItem className='left'>Download</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe6af;</i>
          </NavItem>

          <SearchWrapper>

            <CSSTransition
              in={this.state.focused}
              timeout={500}
              classNames="slide" 
            >
              <NavSearch 
                className={this.state.focused ? 'focused' : ''}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur} ></NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'iconfont focused' : 'iconfont'} >&#xe617;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='write'>
            <i className='iconfont'>&#xe618;</i>
            Write
          </Button>
          <Button className='reg'>Reg</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState(() => ({
      focused: true
    }));
  }

  handleInputBlur() {
    this.setState(() => ({
      focused: false
    }));
  }
}

export default Header;
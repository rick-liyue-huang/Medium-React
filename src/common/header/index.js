
import React, { /*Component */} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from './style';


const Header = (props) => {
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
          <CSSTransition 
            timeout={200}
            in={props.focused}
            classNames='slide' >
            <NavSearch  
            className={props.focused ? 'focused' : ''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur} ></NavSearch>
          </CSSTransition>
          
          <i className={props.focused ? 'focused iconfont' : 'iconfont'} >&#xe607;</i>
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

/*
class Header extends Component {

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
            <CSSTransition 
              timeout={200}
              in={this.props.focused}
              classNames='slide' >
              <NavSearch  
              className={this.props.focused ? 'focused' : ''}
              onFocus={this.props.handleInputFocus}
              onBlur={this.props.handleInputBlur} ></NavSearch>
            </CSSTransition>
            
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'} >&#xe607;</i>
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

*/

const mapStateToProps = (state) => ({
  focused: state.header.focused
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus() {
    const action = {
      type: 'search_focus'
    }
    dispatch(action)
  },

  handleInputBlur() {
    const action = {
      type: 'search_blur'
    };
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
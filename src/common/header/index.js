
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { actionCreators } from './store';

class Header extends PureComponent {
  render() {
    const { focused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        
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
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur} ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe607;</i>
            { this.getInfoListArea() }
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

    getInfoListArea() {
      const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
      const newList = list.toJS();
      const pageList = [];

      // when render the page firstly, the newList length is 0
      if(newList.length) {
        for(let i = (page - 1) * 10; i < page * 10; i++) {
          // console.log(newList[i])
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }

      

      if(focused || mouseIn) {
        return (
          <SearchInfo 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <SearchInfoTitle>
              Tot Topic
              <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
                Change
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              
              {
                pageList
              }
            </SearchInfoList>
          </SearchInfo>
        );
      } else {
        return null;
      }
    }
    
  }

  /*
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
            { getInfoListArea(props.focused) }
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
*/
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
  // focused: state.header.focused
  // focused: state.header.get('focused')
  // focused: state.get('header').get('focused')
  focused: state.getIn(['header', 'focused']),
  list: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  totalPage: state.getIn(['header', 'totalPage']),
  mouseIn: state.getIn(['header', 'mouseIn'])
});

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus(list) {
    // get asyn data and aoid the repeated list
    (list.size === 0) && dispatch(actionCreators.getThunkListAction());
    
    // change input style
    dispatch(actionCreators.searchFocusAction());
  },

  handleInputBlur() {
    dispatch(actionCreators.searchBlurAction());
  },

  handleMouseEnter() {
    dispatch(actionCreators.mouseEnterAction());
  },

  handleMouseLeave() {
    dispatch(actionCreators.mouseLeaveAction());
  },

  handleChangePage(page, totalPage, spin) {
    // console.log(spin.style.transform);
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if(originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    
    spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
    // console.log(page, totalPage);
    if(page < totalPage) {
      dispatch(actionCreators.changeHeaderListAction(page + 1));
    } else {
      dispatch(actionCreators.changeHeaderListAction(1));
    }
    
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// get all list 
// list.map((item) => {
//   return <SearchInfoItem key={item}>{item}</SearchInfoItem>
// })
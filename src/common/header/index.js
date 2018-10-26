
// PureComponent interactive with immutable
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';

import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';


/*const getListArea = (show) => {
	if(show) {
		return (

			<SearchInfo>
				<SearchInfoTitle>
					Hot Search
					<SearchInfoSwitch>
						Change
					</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					<SearchInfoItem>Education</SearchInfoItem>
					<SearchInfoItem>Education</SearchInfoItem>
					<SearchInfoItem>Education</SearchInfoItem>
					<SearchInfoItem>Education</SearchInfoItem>
					<SearchInfoItem>Education</SearchInfoItem>
				</SearchInfoList>
			</SearchInfo>
		)
	} else {
		return null;
	}
}*/

// stateless component
/*const Header = (props) => {

	return (

		<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className="left active">Home</NavItem>
				<NavItem className="left">Download App</NavItem>
				<NavItem className="right">Login</NavItem>
				<NavItem className="right">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={props.focused}
						timeout={200}
						classNames="slide"
					>
						<NavSearch 
							className={props.focused ? 'focused' : ''}
							onFocus={props.handleInputFocus}
							onBlur={props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
					
					{getListArea(props.focused)}

				</SearchWrapper>	
			</Nav>
			<Addition>
				<Button className="write">
					<i className="iconfont">&#xe617;</i>
					Write
				</Button>
				<Button className="reg">Register</Button>
			</Addition>
		</HeaderWrapper>
	)

	
}*/

class Header extends PureComponent {

	render() {

		const { 
			focused, 
			handleInputFocus, 
			handleInputBlur,
			list,
			login,
			logout
		} = this.props;

		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>
				<Nav>
					<NavItem className="left active">Home</NavItem>
					<NavItem className="left">Download App</NavItem>
					{
						login ? 
							<NavItem onClick={logout} className="right">Logout</NavItem>
							:
							<Link to="/login"><NavItem className="right">Login</NavItem></Link>
					}
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch 
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe623;</i>
						
						{this.getListArea()}

					</SearchWrapper>	
				</Nav>
				<Addition>
					<Link to="/write">
					<Button className="write">
						<i className="iconfont">&#xe617;</i>
						Write
					</Button>
					</Link>
					<Button className="reg">Register</Button>
				</Addition>
			</HeaderWrapper>
		);
	}

	getListArea() {

		const { 
			focused, 
			mouseIn,
			list, 
			page,
			totalPage, 
			handleMouseEnter,
			handleMouseLeave,
			handleChangePage } = this.props;
		const newList = list.toJS(); // transfer to normal array
		const pageList = [];

		// firstly get list by axios
		if(newList.length) {

			for(let i = (page - 1) * 10; i < page * 10; i++) {
				// console.log(newList[i]);
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		

		if(focused || mouseIn) {
			return (

				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave} >
					<SearchInfoTitle>
						Hot Search
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
							<i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
							Change
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
			    </SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
}


const mapStateToProps = (state) => {
	return {
		// focused: state.header.focused
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		login: state.getIn(['login', 'login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleInputFocus(list) {
			// console.log(123);
			/*if(list.size === 0) {
				dispatch(actionCreators.getList());
			}*/
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},

		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},

		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},

		handleChangePage(page, totalPage, spin) {

			// use css transition transform to rotate
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if(originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) +'deg)';
			
			// set page
			if(page < totalPage) {
				dispatch(actionCreators.pageChange(page + 1));
			} else {
				dispatch(actionCreators.pageChange(1));
			} 
		},

		logout() {
			dispatch(loginActionCreators.logout());
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);










import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper
} from './style';

// stateless component
const Header = (props) => {

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

	
}


const mapStateToProps = (state) => {
	return {
		focused: state.header.focused
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleInputFocus() {
			// console.log(123);
			const action = {
				type: 'search_focus'
			};
			dispatch(action);
		},

		handleInputBlur() {
			const action = {
				type: 'search_blur'
			};
			dispatch(action);
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);








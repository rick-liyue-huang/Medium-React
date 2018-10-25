

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

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

class Header extends Component {

	render() {

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
							in={this.props.focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch 
								className={this.props.focused ? 'focused' : ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
						
						{this.getListArea()}

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
		);
	}

	getListArea() {
		if(this.props.focused) {
			return (

				<SearchInfo>
					<SearchInfoTitle>
						Hot Search
						<SearchInfoSwitch>
							Change
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							this.props.list.map( (item) => {
								return <SearchInfoItem key={item}>{item}</SearchInfoItem>
							})
						
						}
			
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
		list: state.getIn(['header', 'list'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		handleInputFocus() {
			// console.log(123);
			dispatch(actionCreators.getList());

			dispatch(actionCreators.searchFocus());
		},

		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);









/*
	header component file including UI component and state from 'store'
*/
import React, { Component } from 'react';
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
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem } from './style';
import { actionCreators } from './store';

/*const getListArea = (show) => {
	if(show) {
		return (

			<SearchInfo  >
				<SearchInfoTitle>
					Hot Topics
					<SearchInfoSwitch>Change</SearchInfoSwitch>
				</SearchInfoTitle>
				<SearchInfoList>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
					<SearchInfoItem>Eduction</SearchInfoItem>
				</SearchInfoList>
			</SearchInfo>

		)
	} else {
		return null;
	}
}*/

// stateless component (only contain 'render' function)
/*const Header = (props) => {
	return(
			<HeaderWrapper>
				<Logo>Medium</Logo>
				<Nav>
					<NavItem className='left active'>Home</NavItem>
					<NavItem className='left'>App</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<NavItem className='right'>Login</NavItem>					
					<SearchWrapper>
						<CSSTransition
              in={props.focused}
              timeout={300}
              classNames="slide">
							<NavSearch
								className={props.focused ? 'focused': ''}
								onFocus={props.handleInputFocus}
								onBlur={props.handleInputBlur} >
							</NavSearch>
						</CSSTransition>
						<i className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe611;</i>
					
						{getListArea(props.focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe60f;</i>
						Write
					</Button>
					<Button className='reg' >Register</Button>
				</Addition>
			</HeaderWrapper>
		)
}*/

class Header extends Component {

	render() {

		const { focused, handleInputFocus, handleInputBlur } = this.props;

		return (
			<HeaderWrapper>
				<Logo>Medium</Logo>
				<Nav>
					<NavItem className='left active'>Home</NavItem>
					<NavItem className='left'>App</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<NavItem className='right'>Login</NavItem>					
					<SearchWrapper>
						<CSSTransition
              in={focused}
              timeout={300}
              classNames="slide">
							<NavSearch
								className={focused ? 'focused': ''}
								onFocus={handleInputFocus}
								onBlur={handleInputBlur} >
							</NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont': 'iconfont'}>&#xe611;</i>
					
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe60f;</i>
						Write
					</Button>
					<Button className='reg' >Register</Button>
				</Addition>
			</HeaderWrapper>
		)
	}

	getListArea() {
		const { 
			focused, 
			list, 
			page,
			totalPage, 
			mouseIn, 
			handleMouseEnter, 
			handleMouseLeave,
			handleListChange } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if(newList.length) {
			for(let i = ((page - 1) * 10); i < page * 10; i++ ) {

				console.log(newList[i]);
				pageList.push(<SearchInfoItem
										key={newList[i]} >{newList[i]}</SearchInfoItem>)
			}
		}

		

		if(focused || mouseIn) {
			return (

				<SearchInfo 
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave} >
					<SearchInfoTitle>
						Hot Topics
						<SearchInfoSwitch
							onClick={() => handleListChange(page, totalPage)} >Change</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{
							pageList
						}
					</SearchInfoList>
				</SearchInfo>

			)
	} else {
		return null;
	}
	}
}

/*class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focused: false
		};

		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}

	render() {
		return(
			<HeaderWrapper>
				<Logo>Medium</Logo>
				<Nav>
					<NavItem className='left active'>Home</NavItem>
					<NavItem className='left'>App</NavItem>
					<NavItem className='right'>
						<i className='iconfont'>&#xe636;</i>
					</NavItem>
					<NavItem className='right'>Login</NavItem>					
					<SearchWrapper>
						<CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames="slide">
							<NavSearch
								className={this.props.focused ? 'focused': ''}
								onFocus={this.props.handleInputFocus}
								onBlur={this.props.handleInputBlur} >
							</NavSearch>
						</CSSTransition>
						<i className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe611;</i>
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className='iconfont'>&#xe60f;</i>
						Write
					</Button>
					<Button className='reg' >Register</Button>
				</Addition>
			</HeaderWrapper>
		)
	}

	handleInputFocus() {
		this.setState({
			focused: true
		})
	}

	handleInputBlur() {
		this.setState(() => ({
			focused: false
		}))
	}
}*/

const mapStateToProps = (state) => {
	return {
		// focused: state.header.focused
		// focused: state.header.get('focused')
		// focused: state.get('header').get('focused')
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		totalPage: state.getIn(['header', 'totalPage'])
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			/*const action = {
				type: SEARCH_FOCUS
			};*/

			/*get axios by redux-thunk */

			dispatch(actionCreators.getList());

			dispatch(actionCreators.searchFocusAaction());
		},

		handleInputBlur() {
			/*const action = {
				type: SEARCH_BLUR
			};*/
			const action = actionCreators.searchBlurAction();
			dispatch(action);
		},

		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},

		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},

		handleListChange(page, totalPage) {
			console.log(page, totalPage);

			if(page < totalPage) {
				dispatch(actionCreators.changePage(page+1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);














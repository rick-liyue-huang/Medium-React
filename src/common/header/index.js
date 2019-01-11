
/*
	header component file including UI component here and state from 'store'
*/
import React, { /*Component*/ } from 'react';
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
	SearchWrapper } from './style';
import { actionCreators } from './store';


// stateless component (only contain 'render' function)
const Header = (props) => {
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
		focused: state.header.focused
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus() {
			/*const action = {
				type: SEARCH_FOCUS
			};*/
			const action = actionCreators.searchFocusAaction();
			dispatch(action);
		},

		handleInputBlur() {
			/*const action = {
				type: SEARCH_BLUR
			};*/
			const action = actionCreators.searchBlurAction();
			dispatch(action);
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);














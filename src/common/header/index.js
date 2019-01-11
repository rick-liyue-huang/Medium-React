
import React, { Component } from 'react';
import { 
	HeaderWrapper, 
	Logo, 
	Nav, 
	NavItem, 
	NavSearch, 
	Addition, 
	Button,
	SearchWrapper } from './style';
class Header extends Component {

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
						<NavSearch></NavSearch>
						<i className='iconfont'>&#xe611;</i>
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
}

export default Header;














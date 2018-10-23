

import React, { Component } from 'react';
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


class Header extends Component {

	render() {

		return(
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
						<NavSearch></NavSearch>
						<i className="iconfont">&#xe623;</i>
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

}

export default Header;
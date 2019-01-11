
/*
	header component style file
*/ 
import styled from 'styled-components';
import logoPic from '../../staitcs/logo.png';

export const HeaderWrapper = styled.div`
	height: 58px;
	position: relative;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({href: '/'})`
	height: 58px;
	line-height: 58px;
	width: 100px;
	font-size: 30px;
	text-decoration: none;
	position: absolute;
	color: lightblue;
	top: 0;
	left: 20px;
	display: block;
	/*background: url(${logoPic});*/
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`;

export const NavItem = styled.div`
	line-height: 56px; 
	padding: 0 15px;
	font-size: 16px;
	color: #333;
	&.left {
		float: left;
	}

	&.right {
		float: right;
		color: #969696;
	}

	&.active {
		color: lightblue;
	}
`;

export const SearchWrapper = styled.div`
	float: left;
	position: relative;

	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 3px;
		width: 30px;
		text-align: center;
		line-height: 30px;
		border-radius: 15px;
		color: #999;

		&.focused {
			background: #999;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`
	width: 160px;
	height: 38px;
	margin-top: 9px;
	margin-left: 20px;
	padding: 0 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 15px;

	&::placeholder {
		color: #999;
	}

	&.focused {
		width: 260px;
	}

	&.slide-enter {
		width: 160px;
		transition: all .3s ease-out;
	}

	&.slide-enter-active {
		width: 260px;
	}

	&.slide-enter-done {
		width: 260px;
	}

	&.slide-exit {
		width: 260px;
		transition: all .3s ease-in;
	}

	&.slide-exit-active {
		width: 160px;
	}

	&.slide-exit-done {
		width: 160px;
	}
`;

export const Addition = styled.div`
	position: absolute
	right: 0;
	top: 0;
	height: 56px;
`;

export const SearchInfo = styled.div`
	position: absolute;
	left: 20px;
	top: 56px;
	width: 250px;
	padding: 0 20px;
	box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 16px;
	color: #969696;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
`;

export const SearchInfoList = styled.div`
	overflow: hidden;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	font-size: 12px;
	padding: 0 5px;
	line-height: 20px;
	color: #787878;
	border: 1px solid #ddd;
	border-radius: 3px;
	margin-right: 6px;
	margin-bottom: 10px;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid lightblue;
	font-size: 15px;
	&.reg {
		color: purple;
	}

	&.writting {
		color: #fff;
		background: purple;
	}
`;




















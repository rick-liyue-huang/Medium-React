
import styled from 'styled-components';
import logoPicture from '../../staitcs/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`; 

export const Logo = styled.a.attrs({
  href: '/'
})`
  width: 100px;
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: url(${logoPicture});
  background-size: contain;

`;

export const Nav = styled.div`
  width: 1160px;
  height: 100%;
  margin: 0 auto;
  padding-right: 60px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  } 
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  overflow: hidden;
  position: relative;
  .iconfont {
    text-align: center;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 5px;
    bottom: 5px;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'search'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 33px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 13px;
  color: #666;
  &::placeholder {
    color: #999;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  margin-top: 9px;
  margin-right: 16px;
  padding: 0 20px;
  float: right;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  font-size: 17px;
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`;
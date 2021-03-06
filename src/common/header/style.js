
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relati e
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 56px;
  display: block;
  background: url(${logoPic});
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
  background: red;
  position: relative;
  .iconfont {
    position: absolute;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    right: 5px;
    bottom: 5px;
    background: green;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  box-sizing: border-box;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 15px;
  &::placeholder: #999;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  margin-right: 15px;
  padding: 0 10px;
  font-size: 16px;
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background-color: #ec6149;
  }
`;


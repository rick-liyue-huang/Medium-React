
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  top: 0;
  left: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
  position: absolute;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  // background: green;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: $333;
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
  // background: green;
  float: left;
  position: relative;
  .iconfont {
    width: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    // background: red;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
  .slide-enter {
    transition: all .5s ease-out;
  }
  .slide-enter-active {
    width: 260px;
  }
  .slide-exit {
    transition: all .5s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
`;  

export const NavSearch = styled.input.attrs({
  placeholder: 'search'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 10px;
  margin-left: 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 16px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 260px;
  }
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
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  font-size: 16px;
  &.reg {
    color: #ec6149;
  }
  &.write {
    color: #fff;
    background: #ec6149;
  }
`;


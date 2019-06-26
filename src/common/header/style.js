
import styled from 'styled-components';
import logoPicture from '../../staitcs/logo.png';

export const HeaderWrapper = styled.div`
  height: 56px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`; 

export const Logo = styled.div`
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
  position: relative;

  .zoom {
    text-align: center;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    position: absolute;
    right: 5px;
    bottom: 5px;
    
    &.focused {
      background: #777;
      color: #fff;
    }


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
  // when has 'focused' classname
  &.focused {
    width: 260px;
  }

  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slider-enter-active {
    width: 260px;
  }
  &.slide-exit {
    transition: all .2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 13px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    // transform: rotate(0deg);
    transform-origin: center center;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
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
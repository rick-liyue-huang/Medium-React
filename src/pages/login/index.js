
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
  render() {
    const { login } = this.props;

    // confirm whether login or not
    if(!login) { // keep in login component
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='account' innerRef={(input) => {this.account = input}} />
            <Input placeholder='password' type='password' innerRef={(input) => {this.password = input}} />
            <Button onClick={() => {this.props.handleLogin(this.account, this.password)}}>Login</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
    
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin(accountEle, passwordEle) {
    // console.log(accountEle.value, passwordEle.value);
    dispatch(actionCreators.loginThunkAction(accountEle, passwordEle));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// innerRef => ref


import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	LoginWrapper,
	LoginBox,
	Input,
	Button
} from './style';
import { actionCreators } from './store';


class Login extends PureComponent {
	render() {
		console.log(this.props.match.params.id);
		// console.log(this.props.location.search)
		const { loginState } = this.props;

		if(!loginState) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="User" innerRef={(input) => {this.account = input}} />
						<Input placeholder="password" type="password" innerRef={(input) => {this.password = input}} />
						<Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
					</LoginBox>
				</LoginWrapper>
			);

		} else {

			return <Redirect to="/" />
		}

		
	}
}

const mapStateToProps = (state) => ({
	loginState: state.getIn(['login', 'login'])
});


const mapDispatchToProps = (dispatch) => ({
	login(accountElem, passwordElem) {
		dispatch(actionCreators.login(accountElem, passwordElem));
		// console.log(accountElem.value, passwordElem.value);
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);










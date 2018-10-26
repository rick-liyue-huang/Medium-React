
import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class Write extends PureComponent {
	render() {
		console.log(this.props.match.params.id);
		// console.log(this.props.location.search)
		const { loginState } = this.props;

		if(loginState) {
			return (
				<div>write</div>
			);

		} else {
			return <Redirect to="/login" />
		}

		
	}
}

const mapStateToProps = (state) => ({
	loginState: state.getIn(['login', 'login'])
});


export default connect(mapStateToProps, null)(Write);










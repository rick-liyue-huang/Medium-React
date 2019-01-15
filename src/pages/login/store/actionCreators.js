
import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true
});

export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password' + password)
			.then((res) => {
				// console.log(res.data);
				const result = res.data.data;
				console.log(res.data.data);
				if(result) {
					dispatch(changeLogin());
				} else {
					alert('e');
				}
			})
	}
} 

export const logout = () => ({
	type: actionTypes.LOGOUT,
	value: false
});










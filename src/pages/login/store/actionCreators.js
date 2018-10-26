
import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeLogin = () => ({
	type: actionTypes.CHANGE_LOGIN,
	value: true
});

export const login = (account, password) => {
	return (dispatch) => {
		axios.get('/api/login.json?account=' + account + '&password=' + password)
			.then((res) => {
				const result = res.data.data;
				if(result) {
					dispatch(changeLogin())
				} else {
					alert('eee');
				}
				// console.log(res);
			})
			.catch(() => {
				console.log('ee');
			});
	}
}

export const logout = () => ({
	type: actionTypes.LOGOUT,
	value: false
});

















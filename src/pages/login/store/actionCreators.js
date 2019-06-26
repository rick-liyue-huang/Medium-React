
import axios from 'axios';
import { actionTypes } from './index';

const loginAction = () => ({
  type: actionTypes.LOGIN_ACTION,
  value: true
});

export const loginThunkAction = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
      // console.log(res);
      const result = res.data.data;
      if(result) {
        dispatch(loginAction())
      } else {
        alert('unlogin');
      }
    }).catch((e) => {})
  }
}

export const logoutAction = () => ({
  type: actionTypes.LOGOUT_ACTION,
  value: false
});
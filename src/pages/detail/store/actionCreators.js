
import axios from 'axios';
import { actionTypes } from './index';

const getDetailInfoAction = (data) => ({
  type: actionTypes.GET_DETAIL,
  title: data.title,
  content: data.content
});

export const getThunkDetailInfoAction = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      dispatch(getDetailInfoAction(res.data.data));

    }).catch((e) => {})
  }
}
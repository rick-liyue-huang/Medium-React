
import axios from 'axios';
import { fromJS } from 'immutable';
// import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes';
import * as actionTypes from './actionTypes';

export const searchFocusAction = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlurAction = () => ({
  type: actionTypes.SEARCH_BLUR
});

const getHeaderListAction = (data) => ({
  type: actionTypes.GET_HEADER_LIST,
  // data change to immutable type
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const getThunkListAction = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
        
      dispatch(getHeaderListAction(data.data));
    }).catch((e) => {
      console.log(e);
    })
  }
}

export const mouseEnterAction = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const mouseLeaveAction = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changeHeaderListAction = (page) => ({
  type: actionTypes.CHANGE_HEADER_LIST,
  page
});
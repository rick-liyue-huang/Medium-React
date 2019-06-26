
import axios from 'axios';
import { fromJS, List } from 'immutable';
import { GET_HOME_LIST, GET_MORE_HOME_LIST, TOOGLE_SCROLL } from './actionTypes';

const getHomeListAction = (result) => ({
  type: GET_HOME_LIST,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

export const getThunkHomeInfoListAction = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      console.log(res.data.data);
      const result = res.data.data;
      
      dispatch(getHomeListAction(result));

    }).catch((e) => {})
  }
}

const getHomeMoreListAction = (list, nextPage) => ({
  type: GET_MORE_HOME_LIST,
  list,
  nextPage
});

export const getThunkMoreListAction = (articlePage) => {
  return (dispatch) => {
    axios.get('/api/homeMore.json?page=' + articlePage).then((res) => {
      console.log(res.data);
      dispatch(getHomeMoreListAction(res.data.data, articlePage + 1));
    }).catch((e) => {});
  }
}

export const toggleTopShowAction = (flag) => ({
  type: TOOGLE_SCROLL,
  flag
}) 
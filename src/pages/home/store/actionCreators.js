
import axios from 'axios';
import { GET_HOME_LIST } from './actionTypes';

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

import { fromJS } from 'immutable';
import { GET_HOME_LIST } from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_HOME_LIST:
      // console.log(action);
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    default:
      return state;
  }
    
}

  
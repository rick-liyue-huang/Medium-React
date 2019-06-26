
import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const getHomeList = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const getMoreHomeList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.list)),
    articlePage: action.nextPage
  });
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_LIST:
      // console.log(action);
      return getHomeList(state, action);
    case actionTypes.GET_MORE_HOME_LIST:
      return getMoreHomeList(state, action);
    case actionTypes.TOOGLE_SCROLL:
      return state.set('showScroll', action.flag)
      
    default:
      return state;
  }
    
}

  
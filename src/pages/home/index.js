
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommends from './components/Recommends';
import Writer from './components/Writer';
import { actionCreators } from './store';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommends />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeList();
  }
}

const mapDispatchToProps = (dispatch) => ({

  getHomeList() {
    dispatch(actionCreators.getThunkHomeInfoListAction());
  }
})
export default connect(null, mapDispatchToProps)(Home);

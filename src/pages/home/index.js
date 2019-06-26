
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommends from './components/Recommends';
import Writer from './components/Writer';
import { actionCreators } from './store';

class Home extends PureComponent {
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
        {
          this.props.showScroll ? 
            <BackTop onClick={this.handleScrollTop}>Back</BackTop>
            : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeList();
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({

  getHomeList() {
    dispatch(actionCreators.getThunkHomeInfoListAction());
  },

  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 300) {
      dispatch(actionCreators.toggleTopShowAction(true))
    } else {
      dispatch(actionCreators.toggleTopShowAction(false))
    }
    // console.log(document.documentElement.scrollTop)
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

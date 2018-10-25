
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
 } from './style';
 import Topic from './components/Topic';
 import List from './components/List';
 import Recommend from './components/Recommend';
 import Writer from './components/Writer';

class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4514/92d2dd710492c4eb87b511016294120ad1d52095.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="54" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapDispatchToProps = (dispatch) => ({
	
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	}
})

export default connect(null, mapDispatchToProps)(Home);













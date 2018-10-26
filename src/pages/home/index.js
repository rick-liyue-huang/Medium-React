
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
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
				{
					this.props.showScroll ? 
						<BackTop onClick={this.handleScrollTop.bind(this)}>BackTop</BackTop>
						: null
				}
				
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvent();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	handleScrollTop() {
		window.scrollTo(0, 0);
	}

	bindEvent() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}


}

const mapStateToProps = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
	
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},

	changeScrollTopShow() {
		// console.log(document.documentElement.scrollTop);
		if(document.documentElement.scrollTop > 200) {
			dispatch(actionCreators.toggleTopShow(true));
		} else {
			dispatch(actionCreators.toggleTopShow(false));
		}
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);













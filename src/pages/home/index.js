

// PureComponent == immutable
import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommends from './components/Recommends';
import Writter from './components/Writter';
import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends PureComponent {

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img 
						className='banner-img' 
						src="https://pic2.zhimg.com/v2-bf4e7dadb7c153d1c78820474617cc4b_b.jpg"
						alt='' />
					<Topic />
					<List />	
				</HomeLeft>
				<HomeRight>
					<Recommends />
					<Writter />
				</HomeRight>
				{
					this.props.showScroll ? 
						<BackTop onClick={this.handleScrollTop.bind(this)} >Top</BackTop> : null
				}
				
			</HomeWrapper>
		)
	}


	handleScrollTop() {
		window.scrollTo(0, 0);
	}



	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}
}

const mapStateToProps = (state) => {
	return {
		showScroll: state.getIn(['home', 'showScroll'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

		changeHomeData() {
			const action = actionCreators.getHomeInfo();
			dispatch(action);
		},

		changeScrollTopShow() {
			if(document.documentElement.scrollTop > 200) {
				dispatch(actionCreators.toggleTopShow(true))
			} else {
				dispatch(actionCreators.toggleTopShow(false))
			}
			// console.log(document.documentElement.scrollTop);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);













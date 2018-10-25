
import React, { Component } from 'react';
import { 
	TopicWrapper, 
	TopicItem } from '../style';


class Topic extends Component {

	render() {
		return (
			<TopicWrapper>
				<TopicItem>
					<img className="topic-pic" src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" />
					Hot Point
				</TopicItem>
				
			</TopicWrapper>
		);
	}
}

export default Topic;
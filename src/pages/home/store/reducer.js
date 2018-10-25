
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: "SocialHot",
		imgUrl: "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
		alt: "56"
	},
	{
		id: 2,
		title: "HandPaint",
		imgUrl: "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
		alt: "66"
	}],

	articleList: [{
		id: 1,
		title: 'title1',
		desc: 'description1',
		imgUrl: "//upload-images.jianshu.io/upload_images/13133049-5350e415b60c5288.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
		alt: '1'
	},
	{
		id: 2,
		title: 'title2',
		desc: 'description2',
		imgUrl: "//upload-images.jianshu.io/upload_images/13133049-5350e415b60c5288.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240",
		alt: '2'
	}],

	recommendList: [{
		id: 1,
		imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
	},
	{
		id: 2,
		imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
	}]
	
});

export default (state = defaultState, action) => {

	switch(action.type) {
		
		default:
			return state;
	}
}
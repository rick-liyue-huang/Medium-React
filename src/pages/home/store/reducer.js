
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: 'hot',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: 'hot',
      imgUrl: '//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    }
  ],
  aritcleList: [
    {
      id: 1,
      titled: 'Title',
      desc: '写19年手帐体系的时候，原本计划用灯塔A5的本子来作为周计划本。后来因为手残，另外画格子啥的太麻烦，就干脆换成了muji的周计划。买...',
      imgUrl: '//upload-images.jianshu.io/upload_images/2100084-a5b2e27198071d65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      titled: 'Title',
      desc: '写19年手帐体系的时候，原本计划用灯塔A5的本子来作为周计划本。后来因为手残，另外画格子啥的太麻烦，就干脆换成了muji的周计划。买...',
      imgUrl: '//upload-images.jianshu.io/upload_images/2100084-a5b2e27198071d65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      titled: 'Title',
      desc: '写19年手帐体系的时候，原本计划用灯塔A5的本子来作为周计划本。后来因为手残，另外画格子啥的太麻烦，就干脆换成了muji的周计划。买...',
      imgUrl: '//upload-images.jianshu.io/upload_images/2100084-a5b2e27198071d65?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
    
  }

  
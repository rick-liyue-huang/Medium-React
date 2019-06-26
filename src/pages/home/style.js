
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  // height: 300px;
  margin: 0 auto;
  // background: green;
  overflow: hidden;

`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

//  Topic

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -16px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  height: 32px;
  line-height: 32px;
  margin-left: 16px;
  margin-bottom: 16px;
  padding-right: 10px;
  font-size: 13px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  float: left;
  background: #f7f7f7;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;

// List

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`;
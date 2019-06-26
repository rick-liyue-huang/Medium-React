
import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreators } from '../store';

class List extends PureComponent {
  render() {
    const  { articleList, handleGetMoreList, articlePage } = this.props;
    return (
      <Fragment>
        {
          articleList.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')} >
                <ListItem>
                  <img className='pic' src={item.get('imgUrl')} alt='' />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
              
            )
          })
        }
        <LoadMore onClick={() => handleGetMoreList(articlePage)}>More List</LoadMore>
      </Fragment>
      
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
  handleGetMoreList (articlePage) {
    dispatch(actionCreators.getThunkMoreListAction(articlePage));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);

//   /detail?id=

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import  { ListItem, ListInfo } from '../style';

class List extends Component {
  render() {
    const  { aritcleList } = this.props;
    return (
      <Fragment>
        {
          aritcleList.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </Fragment>
      
    )
  }
}

const mapStateToProps = (state) => ({
  aritcleList: state.getIn(['home', 'aritcleList'])
})

export default connect(mapStateToProps, null)(List);

import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { DetailWrapper, DetailHeader, Content } from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <DetailHeader>
          {this.props.title}
        </DetailHeader>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.handleGetDetail()
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  handleGetDetail() {
    dispatch(actionCreators.getThunkDetailInfoAction());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
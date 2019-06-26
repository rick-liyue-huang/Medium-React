
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { DetailWrapper, DetailHeader, Content } from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
  
  render() {
    console.log(this.props.match.params.id);
    // console.log(this.props.location.search);
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
    this.props.handleGetDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  handleGetDetail(id) {
    dispatch(actionCreators.getThunkDetailInfoAction(id));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
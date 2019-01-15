import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {

	render() {
		console.log(this.props.match.params.id);
		// console.log(this.props.location.search);
		return (
			<DetailWrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}} />
			</DetailWrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	};
}

const mapStateToProps = (state) => {
	return {

		title: state.getIn(['detail', 'title']),
		content: state.getIn(['detail', 'content'])
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		getDetail(id) {
			dispatch(actionCreators.getDetail(id));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);









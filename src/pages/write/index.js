
import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Write extends PureComponent {
  render() {
    const { login } = this.props;

    // confirm whether login or not
    if(login) { 
      return (
        <div>Write page</div>
      )
    } else {
      return <Redirect to='/login'/>
    }
    
  }
}

const mapStateToProps = (state) => ({
  login: state.getIn(['login', 'login'])
});

export default connect(mapStateToProps, null)(Write);



import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm';
import { userPostFetch } from '../actions/actions';

const SignUp = () => {
  return (
    <div className="container">
      <h2 style={{ marginBottom: '40px' }}>Registration</h2>

      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignUpForm userPostFetch={userPostFetch} />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { userPostFetch } from '../actions/actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    const initState = {
      email: '',
      name: '',
      password: '',
      password2: ''
    };
    this.state = initState;
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.userPostFetch(this.state);
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ marginBottom: '40px' }}>Registration</h2>

        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="label-control" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="label-control" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Full Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="label-control" htmlFor="password">
                    {' '}
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label className="label-control" htmlFor="password2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={this.state.password2}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userLoginFetch } from '../actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.userLoginFetch(this.state);
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ marginBottom: '40px' }}>Login</h2>

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
                  <button type="submit" className="btn btn-primary btn-lg">
                    Login
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
  userLoginFetch: userData => dispatch(userLoginFetch(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login));

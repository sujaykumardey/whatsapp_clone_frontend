import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import { userRegistration, userSignin } from '../actions/postActions';
import './Signin.css';
import { Redirect } from 'react-router-dom';
const { api } = require('../endpoints/API');
export const socket = socketIOClient(`${api}`);

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone: '',
      password: '',
      regis: false,
      success: '',
    };
  }

  handleUser = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  userSignin = async (e) => {
    e.preventDefault();
    try {
      const user = {
        phone: this.state.phone,
        password: this.state.password,
      };
      this.props.userSignin(user);

      this.setState({ phone: '', password: '' });
    } catch (error) {
      if (error) return <Redirect to="/" />;
    }
  };

  userRegistration = async (e) => {
    e.preventDefault();
    try {
      const user = {
        username: this.state.username,
        phone: this.state.phone,
        password: this.state.password,
      };
      this.props.userRegistration(user);
      // this.setState({regis:true})
      this.setState({ username: '', country: '', phone: '', password: '' });
    } catch (error) {
      if (error) return <Redirect to="/" />;
    }
  };

  render() {
   
    if (this.props.auth !== undefined) return <Redirect to="/chat" />;

    return (
      <div className="navbar-main">
        <AppBar
          position="static"
          style={{ height: '80px', backgroundColor: '#1ebea5' }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              className="navbar-text"
              style={{ flexGrow: 1 }}
            >
              <img
                src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"
                alt="Kiwi standing on oval"
                style={{ width: '40px', height: '40px' }}
              />
              WhatsApp
            </Typography>
            <Typography
              className="heading-whatsapp"
              color="inherit"
              style={{ marginRight: '90px', fontSize: '15px' }}
            >
              WHATSAPP WEB
            </Typography>
            <Typography
              className="heading-whatsapp"
              color="inherit"
              style={{ marginRight: '90px', fontSize: '15px' }}
            >
              FEATURES
            </Typography>
            <Typography
              className="heading-whatsapp"
              color="inherit"
              style={{ marginRight: '90px', fontSize: '15px' }}
            >
              DOWNLOAD
            </Typography>

            <Typography
              className="heading-whatsapp"
              color="inherit"
              style={{ marginRight: '90px', fontSize: '15px' }}
              onClick={() => this.setState({ regis: false })}
            >
              REGISTER
            </Typography>

            <Typography
              className="heading-whatsapp"
              color="inherit"
              style={{ marginRight: '90px', fontSize: '15px' }}
              onClick={() => this.setState({ regis: true })}
            >
              SIGN IN
            </Typography>
          </Toolbar>
        </AppBar>

        {this.state.regis === false ? (
          <div className="login-main-page">
            <div className="login-page">
              <img
                src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"
                alt="Kiwi standing on oval"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography style={{ fontSize: '25px' }}>Register</Typography>
              {this.props.successAlert === undefined ? null : (
                <Typography style={{ color: 'red' }}>
                  {this.props.successAlert.username}
                </Typography>
              )}
              <form className="login-input" noValidate autoComplete="off">
                <TextField
                  id="standard-basic"
                  value={this.state.username}
                  onChange={this.handleUser}
                  label="User Name"
                  style={{ width: '300px' }}
                />

                <TextField
                  id="standard-basic-phone"
                  value={this.state.phone}
                  onChange={this.handlePhone}
                  label="Phone"
                  style={{ width: '300px' }}
                />
                <TextField
                  id="standard-basic-phone"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  label="password"
                  type="password"
                  style={{ width: '300px' }}
                />
              </form>
              <Button
                variant="contained"
                color="primary"
                onClick={this.userRegistration}
                style={{ marginTop: '20px' }}
              >
                Register
              </Button>
            </div>
          </div>
        ) : (
          <div className="login-main-page">
            <div className="login-page">
              <img
                src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"
                alt="Kiwi standing on oval"
                style={{ width: '100px', height: '100px' }}
              />
              <Typography style={{ fontSize: '25px' }}>Sign in</Typography>
              
              <form className="login-input" noValidate autoComplete="off">
                <TextField
                  id="standard-basic-phone"
                  value={this.state.phone}
                  onChange={this.handlePhone}
                  label="Phone"
                  style={{ width: '300px' }}
                />
                <TextField
                  id="standard-basic-phone"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  label="password"
                  type="password"
                  style={{ width: '300px' }}
                />
              </form>
              <Button
                variant="contained"
                color="primary"
                onClick={this.userSignin}
                style={{ marginTop: '20px' }}
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  successAlert: state.userchat.regis,
  admin: state.userchat.admin,
  auth:state.userchat.admin_id
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     userDetail: (user) => {
//       dispatch({ type: 'ADD_ADMIN', payload: user });
//     },
//   };
// };

export default connect(mapStateToProps, { userRegistration, userSignin })(
  Signin
);

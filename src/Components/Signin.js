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
import './Signin.css';
import { Redirect } from 'react-router-dom';
export const socket = socketIOClient('http://localhost:4000');

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      country: '',
      phone: '',
    };
  }

  handleUser = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  userRegistration = async (e) => {
    e.preventDefault();
    try{
    const user = {
      username: this.state.username,
      country: this.state.country,
      phone: this.state.phone,
    };
    
    await socket.emit('user', user);
    this.props.userDetail(user);
    this.setState({ username: '', country: '', phone: '' });
    }
    catch(error){
        if(error) return <Redirect to='/' />
    }
  };


  render() {
    if (this.props.admin !== undefined) return <Redirect to="/chat" />;
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
              color="inherit"
              style={{ marginRight: '90px', fontSize: '13px' }}
            >
              WHATSAPP WEB
            </Typography>
            <Typography
              color="inherit"
              style={{ marginRight: '90px', fontSize: '13px' }}
            >
              FEATURES
            </Typography>
            <Typography
              color="inherit"
              style={{ marginRight: '90px', fontSize: '13px' }}
            >
              DOWNLOAD
            </Typography>
            <Typography
              color="inherit"
              style={{ marginRight: '90px', fontSize: '13px' }}
            >
              SECURITY
            </Typography>
            <Typography
              color="inherit"
              style={{ marginRight: '90px', fontSize: '13px' }}
            >
              FAQ
            </Typography>
          </Toolbar>
        </AppBar>
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
                id="standard-basic"
                value={this.state.username}
                onChange={this.handleUser}
                label="User Name"
                style={{ width: '300px' }}
              />

              <InputLabel
                id="standard-basic-country"
                value="Country"
                label="Select"
              ></InputLabel>
              <Select
                value={this.state.country}
                onChange={(e) => this.setState({ country: e.target.value })}
                labelId="standard-basic-country"
                id="standard-basic-country"
                style={{ width: '300px' }}
              >
                <em>Country</em>
                <MenuItem value={'INDIA'}>INDIA</MenuItem>
                <MenuItem value={'AUSTRALIA'}>AUSTRALIA</MenuItem>
                <MenuItem value={'ENGLAND'}>ENGLAND</MenuItem>
              </Select>
              <TextField
                id="standard-basic-phone"
                value={this.state.phone}
                onChange={this.handlePhone}
                label="Phone"
                style={{ width: '300px' }}
              />
            </form>
            <Button
              variant="contained"
              color="primary"
              onClick={this.userRegistration}
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.userchat.admin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userDetail: (user) => {
      dispatch({ type: 'ADD_ADMIN', payload: user });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);

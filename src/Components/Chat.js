import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser } from '../actions/postActions';
import { Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Chatroom from './Chatroom';
import Defaultchatroom from './Defaultchatroom';
import './Sidebar.css';
import { socket } from './Signin';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }
  componentDidUpdate() {}

  componentWillMount() {
    fetch('http://localhost:4000/api/users')
      .then((response) => response.json())
      .then((json) => {});

    socket.on('userdata', (data) => {
      this.props.getAllUser(data);
    });
  }

  render() {
    if (this.props.admin === undefined) return <Redirect to="/" />;
    return (
      <div className="chatwindow">
        <Sidebar obj={this.props.users} name={this.props.admin.username} />
        {this.props.chats !== undefined ? (
          <Chatroom chat={this.props.chats} phone={this.props.admin.phone} />
        ) : (
          <Defaultchatroom />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userchat.user,
  admin: state.userchat.admin,
  chats: state.chats.chat,
});

export default connect(mapStateToProps, {
  getAllUser,
})(Chat);

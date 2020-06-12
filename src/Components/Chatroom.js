import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar,Typography } from '@material-ui/core';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import './Sidebar.css';
import { socket } from '../Components/Signin';
import moment from 'moment';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidUpdate() {
    socket.on('userchat', (data) => {
      this.props.userChat(data);
    });
  }

  handleSend = (e, name, phone) => {
    console.log(e.target.id, name, this.state.message);
    const user = {
      id: e.target.id,
      phone: phone,
      sender: name,
      text: this.state.message,
      timestamp: moment().format('h:mm a'),
    };

    this.setState({ message: '' });
    socket.emit('chats', user);
  };

  render() {
    const result =
      this.props.chat === undefined
        ? null
        : this.props.chat.map((chat) => {
            return (
              <div
                className={
                  'chatroom-chat-text' +
                  (this.props.phone === chat.phone ? '-admin' : '')
                }
              >
                <span className="chat-header">
                  {chat.phone} {chat.sender}
                </span>
                <p className="chat-body">{chat.text}</p>
                <p className="chat-footer">{chat.timestamp}</p>
              </div>
            );
          });
    return (
      <div className="chatroom-main-container">
        <div className="chatroom-header">
          <div style={{width:"200px",display:"flex",alignItems:"center"}}>
          <IconButton color="inherit" style={{ outline: 'none' }}>
            <Avatar />
          </IconButton>
          <Typography>{this.props.current_id===undefined ? null :this.props.current_id.name}</Typography>
          </div>
          <div className="header-side-icon">
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <AttachFileIcon />
            </IconButton>
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="chatroom-chat">{result}</div>
        <div className="chatroom-inputfeild">
          <div className="search-feild-footer">
            <InsertEmoticonIcon style={{ marginRight: '10px' }} />
            <input
              className="input-chat"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              placeholder="Search or start new chat"
            />
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <SendIcon
                id={this.props.current_id===undefined ? null : this.props.current_id.id}
                onClick={(e) =>
                  this.handleSend(
                    e,
                    this.props.admin.username,
                    this.props.admin.phone
                  )
                }
              />
            </IconButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.userchat.admin,
  current_id:state.userchat.current_id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userChat: (chats) => {
      dispatch({ type: 'ALL_CHATS', payload: chats });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);

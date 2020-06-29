import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Typography } from '@material-ui/core';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Sidebar.css';
import { socket } from '../Components/Signin';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { mediaFileUpload } from '../actions/postActions';

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      files: null,
      current_id:null,
    };
  }
componentWillMount(){
  this.setState({current_id:this.props.current_id})
}

  componentDidUpdate(prevState) {
    socket.on('userchat', (data) => {
      this.props.userChat(data);

    });
    if(prevState.current_id!==this.props.current_id){
      this.setState({current_id:this.props.current_id})
    }

  }

  Enter = (e) => {
    if (e.key === 'Enter') {
      this.handleSend(e, this.props.admin.username, this.props.admin.phone);
    }
  };

  mediaFiles = (files) => {
    this.setState({ files: files[0] });
  };

  handleSend = (e, name, phone) => {
    e.preventDefault();
    const user = {
      id: e.target.id,
      phone: phone,
      sender: name,
      text: this.state.message,
      timestamp: moment().format('h:mm a'),
    };
    if (this.state.message.length > 0) {
      this.setState({ message: '' });
      socket.emit('chats', user);
    } else if (this.state.file !== null && this.state.message.length === 0) {
      const file = new FormData();
      file.append('uploadImage', this.state.files);
      file.append('id', e.target.id);
      file.append('phone', phone);
      file.append('sender', name);
      file.append('timestamp', moment().format('h:mm a'));
      this.props.mediaFileUpload(file);
      this.setState({ files: null });
    }
  };

  render() {
    console.log(this.state.current_id.url,'hai this is')
    const result =
      this.props.chat === undefined
        ? null
        : this.props.chat.map((chat) => {
            return (
              <div
                className={
                  'chatroom-chat-text-box' +
                  (this.props.phone === chat.phone ? '-admin' : '')
                }
              >
                <span className="chat-header-box">
                  {chat.phone}
                  {'   ~'} {chat.sender}
                </span>
                {chat.text === undefined && chat.url !== undefined ? (
                  chat.url.substring(chat.url.length - 3, chat.url.length) ===
                  'mp4' ? (
                    <video src={chat.url} type="video/mp4" controls />
                  ) : (
                    <img src={chat.url} alt="img" type="file" />
                  )
                ) : (
                  <p className="chat-body-box">{chat.text}</p>
                )}
                <p className="chat-footer-box">{chat.timestamp}</p>
              </div>
            );
          });
    return (
      <div className="chatroom-main-container">
        <div className="chatroom-header">
          <div style={{ display: 'flex' }}>
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <Avatar
                src={
                  this.state.current_id === undefined
                    ? null
                    : this.state.current_id.url
                }
              />
            </IconButton>
            <Typography style={{ marginTop: '20px ' }}>
              {this.state.current_id === undefined
                ? null
                : this.state.current_id.name}
            </Typography>
          </div>
          <div className="header-side-icon">
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <AttachFileIcon />
            </IconButton>
            <IconButton color="inherit" style={{ outline: 'none' }}>
              <ExitToAppIcon onClick={this.props.Exit} />
            </IconButton>
          </div>
        </div>
        <div className="chatroom-chat">{result}</div>
        <div className="chatroom-inputfeild">
          <div className="search-feild-footer" style={{ display: 'flex' }}>
            <InsertEmoticonIcon
              style={{ marginRight: '10px', marginTop: '15px' }}
            />
            <input
              className="input-chat"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
              placeholder="Search or start new chat"
              onKeyPress={this.Enter}
              id={
                this.state.current_id === undefined
                  ? null
                  : this.state.current_id.id
              }
            />

            <Dropzone onDrop={this.mediaFiles}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />

                    <PhotoCamera
                      style={{
                        marginTop: '15px',
                        marginLeft: '5px',
                        outline: 'none',
                      }}
                    />
                  </div>
                </section>
              )}
            </Dropzone>

            <IconButton color="inherit" style={{ outline: 'none' }}>
              <SendIcon
                id={
                  this.state.current_id === undefined
                    ? null
                    : this.state.current_id.id
                }
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
  admin: state.userchat.admin_id,
  current_id: state.userchat.current_id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userChat: (chats) => {
      dispatch({ type: 'ALL_CHATS', payload: chats });
    },
    Exit: () => {
      dispatch({ type: 'ALL_EXIT', payload: '' });
    },
    mediaFileUpload,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);

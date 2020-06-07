import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { Button } from '@material-ui/core';
import Sidebar from './Sidebar'
import './Sidebar.css'
const socket = socketIOClient('http://localhost:4000');
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }

  componentDidMount(){
    // socket.on('output', (data) => {
    //     this.setState({ count: data });
    //   });

    socket.on('chats', (data) => {
        console.log(data);
      });


  }


  handleClick = () => {
    socket.emit('updateData');
  };

  render() {
    

    return (
      <div className="chatwindow">
       <Sidebar />
      </div>
    );
  }
}

Chat.propTypes = {};

export default Chat;

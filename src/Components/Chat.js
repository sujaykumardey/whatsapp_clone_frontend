import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import Sidebar from './Sidebar'
import Chatroom from './Chatroom'
import './Sidebar.css'
export const io = socketIOClient('http://localhost:4000');
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }

  componentDidMount(){
    io.on('sujay', (data) => {
      console.log(data);
    });
    


  } 

  render() {
   

    return (
      <div className="chatwindow">
       <Sidebar />
       <Chatroom />
      </div>
    );
  }
}



export default Chat;


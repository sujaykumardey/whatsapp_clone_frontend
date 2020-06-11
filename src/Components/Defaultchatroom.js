import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
class Defaultchatroom extends Component {
  render() {
    return (
    
      <div className="default-chat-page">
        <div className="defult-text-connected">
        <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="connected" style={{width:"350px",height:"350px"}}/>
        </div>
        <div className="default-chat-text">
        <h1 className="default-header">Keep your phone connected</h1>
        <h6 className="default-header-text">WhatsApp connects to your phone to sync messages. To reduce data usage,connect your phone to Wi-Fi</h6>
        </div>
      </div>
        
    );
  }
}

Defaultchatroom.propTypes = {};

export default Defaultchatroom;

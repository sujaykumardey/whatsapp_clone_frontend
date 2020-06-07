import React, { Component } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import './Sidebar.css';





class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="header">
          <Avatar />
          <div className="header-side-icon">
            <DonutLargeOutlinedIcon />
            <ChatOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div className="search">
          <div className="search-feild">
            <SearchIcon />
            <input placeholder="Search or start new chat" />
        </div>
        </div>

        <div className="chatroom participants">

        </div>
      </div>


    );
  }
}

export default Sidebar;

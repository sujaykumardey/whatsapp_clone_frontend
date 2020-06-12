import React, { Component } from 'react';
import {Avatar} from '@material-ui/core'
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Participant from './Participant'
import './Sidebar.css';





class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state={}
  }


  render() {
      
      

    return (
      <div className="sidebar">
        <div className="header">
          <Avatar>{this.props.name[0].toUpperCase()}</Avatar>
          <div className="header-side-icon">
            <DonutLargeOutlinedIcon />
            <ChatOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        <div className="search">
          <div className="search-feild">
            <SearchIcon  />
            <input placeholder="Search or start new chat" />
        </div>
        </div>

        <div className="chatroom">
            <div className="chatroom-participants">
            {this.props.obj===undefined ? null :this.props.obj.map(detail=><Participant  image={detail.url} id={detail._id} name={detail.username} phone={detail.phone} />)}        
            </div>
        </div>
      </div>


    );
  }
}




export default Sidebar;
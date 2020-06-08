import React, { Component } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Participant from './Participant'
import './Sidebar.css';

var obj=[{name:'sujay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'ajay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'98873232323'},
{name:'piku dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'puskar moitra',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'sujay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'ajay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'98873232323'},
{name:'piku dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'puskar moitra',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'sujay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'ajay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'98873232323'},
{name:'piku dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'puskar moitra',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'sujay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'ajay dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'98873232323'},
{name:'piku dey',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'},
{name:'puskar moitra',url:'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f',phone:'872323232323'}

        ]




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
            <SearchIcon  />
            <input placeholder="Search or start new chat" />
        </div>
        </div>

        <div className="chatroom">
            <div className="chatroom-participants">
            {obj.map(detail=><Participant  image={detail.url} name={detail.name} phone={detail.phone} />)}        
            </div>
        </div>
      </div>


    );
  }
}

export default Sidebar;

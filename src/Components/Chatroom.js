import React, { Component } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import './Sidebar.css'

class Chatroom extends Component {
    render() {
        return (
            <div className="chatroom-main-container">
                <div className="chatroom-header">                
                    <Avatar />
                    <div className="header-side-icon">
                    <SearchIcon />
                    <AttachFileIcon />
                    <MoreVertOutlinedIcon />         
                    </div>
                </div>
                <div className="chatroom-chat">

                </div>
                <div className="chatroom-inputfeild">
            
                    <div className="search-feild-footer">
                        <InsertEmoticonIcon style={{marginRight:"10px"}} />
                        <input className="input-chat" placeholder="Search or start new chat" />
                        <SendIcon style={{marginLeft:"30px"}}/>
                    </div>
                    
                            
                </div>

            </div>
        );
    }
}



export default Chatroom;
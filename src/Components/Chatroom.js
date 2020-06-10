import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {IconButton} from '@material-ui/core'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';
import './Sidebar.css'

class Chatroom extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        const result=this.props.chat.map((chat)=>{
            return <div className={"chatroom-chat-text"+(this.props.phone===chat.phone?"-admin":"")}>
                        <span className="chat-header">{chat.phone} {chat.sender}</span>
                        <p className="chat-body">{chat.text}</p>
                        <p className="chat-footer">{chat.timestamp}</p>
                    </div>
        })
        return (
            <div className="chatroom-main-container">
                <div className="chatroom-header"> 
                    <IconButton color="inherit" style={{outline:"none"}}>                  
                        <Avatar  />
                    </IconButton>
                    <div className="header-side-icon">
                        <IconButton color="inherit" style={{outline:"none"}}>   
                                <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit" style={{outline:"none"}}>                    
                                <AttachFileIcon />                        
                        </IconButton>
                        <IconButton color="inherit" style={{outline:"none"}}>   
                                <MoreVertOutlinedIcon />  
                        </IconButton>       
                    </div>
                </div>
                <div className="chatroom-chat">
                        {result}
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
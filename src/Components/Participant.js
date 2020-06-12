import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Typography,Divider } from '@material-ui/core';
import { userChat } from '../actions/postActions';
import './Sidebar.css'


class Participant extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

handleClick=(e,name)=>{  
   const curr_user={
       id:e.target.id,
       name,
   }
   this.props.userChat(curr_user);
}
    render() {
        
        return (
            <>
            <div className="participant-detail" key={this.props.phone} id={this.props.id} onClick={(e)=>this.handleClick(e,this.props.name)}>
                <Avatar alt="Remy Sharp" src={this.props.image} />
                <Typography style={{marginLeft:"10px"}}>{this.props.name}</Typography>
                                
            </div>
            <Divider variant="inset" />
            </>
        );
    }
}






export default connect(null, {
    userChat,
  })(Participant);
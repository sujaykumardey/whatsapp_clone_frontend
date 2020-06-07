import React, { Component } from 'react';
import { Avatar, Typography,Divider } from '@material-ui/core';
import './Sidebar.css'


class Participant extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        
        return (
            <>
            <div className="participant-detail">
                <Avatar alt="Remy Sharp" src={this.props.image} />
                <Typography style={{marginLeft:"10px"}}>{this.props.name}</Typography>
                                
            </div>
            <Divider variant="inset" />
            </>
        );
    }
}



export default Participant;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser } from '../actions/postActions';
import {Redirect} from 'react-router-dom';
import Sidebar from './Sidebar'
import Chatroom from './Chatroom'
import './Sidebar.css'
import {socket} from './Signin'
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }
  componentDidUpdate(){
    if(localStorage.admin==='undefined') return <Redirect to="/" />
  }

  componentWillMount(){  
    fetch('http://localhost:4000/api/users')
    .then(response => response.json())
    .then(json => console.log(json))
   
    socket.on('userdata',(data)=>{
      console.log(data)
      this.props.getAllUser(data);
    })

}

  render() {
    
    return (
      <div className="chatwindow">
       <Sidebar obj={this.props.users} />
       <Chatroom />
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  users:state.userchat.user,
});


export default connect(mapStateToProps, {
  getAllUser,
})(Chat);
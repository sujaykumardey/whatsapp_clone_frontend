import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllUser } from '../actions/postActions';
import {Redirect} from 'react-router-dom';
import Sidebar from './Sidebar'
import Chatroom from './Chatroom'
import './Sidebar.css'
import {socket} from './Signin'

var obj=[{phone:"8776234672",sender:"sujay dey",text:"hello whats up",timestamp:"12:00am"},
         {phone:"8776234679",sender:"sujay dey",text:"hello whats up",timestamp:"12:00am"},
          {phone:"8776234678",sender:"sujay dey",text:"hello whats up",timestamp:"12:00am"},
          {phone:"9939108702",sender:"sujay dey",text:"hello whats up",timestamp:"12:00am"}]


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
       <Chatroom chat={obj} phone={this.props.admin.phone!==undefined ? this.props.admin.phone :null} />
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  users:state.userchat.user,
  admin:state.userchat.admin,
});


export default connect(mapStateToProps, {
  getAllUser,
})(Chat);
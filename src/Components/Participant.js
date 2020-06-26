import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, Typography, Divider } from '@material-ui/core';
import { userChat } from '../actions/postActions';
import './Sidebar.css';

class Participant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  handleClick = (e, name, url) => {
    const curr_user = {
      id: e.target.id,
      name,
      url,
    };
    this.props.userChat(curr_user, this.props.admin.token);
  };
  render() {
    return (
      <>
        <div
          className="participant-detail"
          key={this.props.phone}
          id={this.props.id}
          onClick={(e) =>
            this.handleClick(e, this.props.name, this.props.image)
          }
        >
          <Avatar alt="Remy Sharp" src={this.props.image} />
          <Typography style={{ marginLeft: '10px' }}>
            {this.props.name}
          </Typography>
        </div>
        <Divider variant="inset" />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  admin: state.userchat.admin_id,
});

export default connect(mapStateToProps, {
  userChat,
})(Participant);

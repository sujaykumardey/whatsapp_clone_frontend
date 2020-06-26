import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Participant from './Participant';
import Profile from './Profile';
import './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: '',
      suggetions: '',
      profile: false,
    };
  }
  handleClick = () => {
    this.setState({ profile: false });
  };
  componentWillMount() {
    this.setState({ obj: this.props.user });
  }

  componentDidUpdate(prevState) {
    if (prevState.obj !== this.props.user) {
      this.setState({ obj: this.props.user });
    }
  }
  handleProfile = (e) => {
    this.setState({ profile: true });
  };

  onTextChange = (e) => {
    const value = e.target.value;

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      const suggestions = this.state.obj
        .sort()
        .filter((v) => regex.test(v.username));
      this.setState({ obj: suggestions });
    } else if (value.length === 0) {
      this.setState({ obj: this.props.user });
    }
  };

  render() {
    return (
      <div className="sidebar">
        <div className="header">
          <Avatar src={this.props.profile} onClick={this.handleProfile}>
            {this.props.name[0].toUpperCase()}
          </Avatar>
          <div className="header-side-icon">
            <DonutLargeOutlinedIcon />
            <ChatOutlinedIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>
        {this.state.profile ? (
          <Profile
            handleClick={this.handleClick}
            id={this.props.id}
            name={this.props.name}
            url={this.props.profile}
          />
        ) : (
          <>
            <div className="search">
              <div className="search-feild">
                <SearchIcon />
                <input
                  placeholder="Search or start new chat"
                  onChange={this.onTextChange}
                />
              </div>
            </div>

            <div className="chatroom">
              <div className="chatroom-participants">
                {this.state.obj === undefined
                  ? null
                  : this.state.obj.map((detail) => (
                      <Participant
                        image={detail.url}
                        id={detail._id}
                        name={detail.username}
                        phone={detail.phone}
                      />
                    ))}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userchat.user,
});

export default connect(mapStateToProps, {})(Sidebar);

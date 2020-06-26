import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { imageFileUpload } from '../actions/postActions';
import { socket } from '../Components/Signin';
import './Userprofile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagefile: '',
      profileimage: '',
      imageprofile: null,
    };
  }
  componentDidUpdate() {
    socket.on('profile', (data) => {
      this.props.setProfile(data);
    });
  }

  mediaFiles = (files) => {
    this.setState({ imagefile: files[0] });
    const file = new FormData();
    file.append('uploadImage', this.state.imagefile);
    file.append('id', this.props.id);
    this.props.imageFileUpload(file);
    this.setState({ imagefile: null });
  };

  render() {
    return (
      <div className="userprofile">
        <div className="back-profile">
          <ArrowBackIcon
            onClick={this.props.handleClick}
            style={{
              color: 'white',
              cursor: 'pointer',
              marginLeft: '50px',
              marginBottom: '30px',
            }}
          />
          <span style={{ marginLeft: '30px', marginBottom: '30px' }}>
            Profile{' '}
          </span>
        </div>
        <div className="back-profile-image">
          <Avatar style={{ height: '200px', width: '200px' }}>
            <div className="photocamera">
              <Dropzone id={this.props.id} onDrop={this.mediaFiles}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />

                      <AddAPhotoIcon />
                      <div style={{ fontSize: '10px' }}>ADD PROFILE PHOTO</div>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
          </Avatar>
        </div>
        <div className="username-edit">
          <div className="main-container-profile">
            <div className="nameofyour">Your Name</div>
            <div className="change-name">
              {this.props.name}
              <CreateIcon />
            </div>
          </div>
        </div>
        <div className="username-edit-default">
          This is not your username or pin.This name will be visible to your
          WhatsApp contacts
        </div>
        <div className="username-edit-about">
          <div className="main-container-profile-about">
            <div className="nameofyour-about">About</div>
            <div className="change-name-about" role="img">
                {String.fromCodePoint(0x1F60A)}{' '}{String.fromCodePoint(0x1F60A)}{' '}{String.fromCodePoint(0x1F61E)}
              <CreateIcon />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // admin: state.userchat.admin_id,
  // current_id: state.userchat.current_id,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (data) => {
      dispatch({ type: 'USER_PROFILE', payload: data });
    },
    imageFileUpload,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

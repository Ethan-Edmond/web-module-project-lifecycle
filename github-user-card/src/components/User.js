import React from "react";

class User extends React.Component {
  render(){
    return (
      <div className="user">
      <h3>Username: {this.props.user.login}</h3>
      <img
      alt="The user's avatar"
      src={this.props.user.avatar_url}/>
      {this.props.user.bio && (
        <p>Bio: {this.props.user.bio}</p>
      )}
      {this.props.user.blog && (
        <p>
        Blog: <a href={this.props.user.blog}>{this.props.user.blog}</a>
        </p>
      )}
      </div>
    );
  }
}

export default User;

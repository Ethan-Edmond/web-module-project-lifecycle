import React from "react";

class User extends React.Component {
  render(){
    return (
      <div className="user">
        <h3>Username: {this.props.user.login}</h3>
        <img
          alt="The user's avatar"
          src={this.props.user.avatar_url}/>
        {(this.props.user.bio || this.props.user.blog) && (
          <ul>
            {this.props.user.bio && (
              <>
                <li className="title">Bio: </li>
                <li>{this.props.user.bio}</li>
              </>
            )}
            {this.props.user.blog && (
              <>
                <li className="title">Blog: </li>
                <li>
                  <a href={this.props.user.blog}>{this.props.user.blog}</a>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    );
  }
}

export default User;

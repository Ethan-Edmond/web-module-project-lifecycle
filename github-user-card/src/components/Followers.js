import React from "react";
import User from "./User";

class Followers extends React.Component {
  render(){
    return (
      <div className="follower-container">
        <h3>Followers</h3>
        <div className="followers">
          {this.props.followers.map(follower => {
            return (
              <User
                className="follower"
                key={follower.id}
                user={follower}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Followers;

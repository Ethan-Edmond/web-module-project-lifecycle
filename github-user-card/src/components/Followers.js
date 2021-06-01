import React from "react";
import User from "./User";

class Followers extends React.Component {
  render(){
    return (
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
    );
  }
}

export default Followers;

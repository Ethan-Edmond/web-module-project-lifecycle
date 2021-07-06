import React from "react";
import axios from "axios";
import './App.css';

import UserForm from "./components/UserForm";
import User from "./components/User";
import Followers from "./components/Followers";

const github = axios.create({
  baseURL: "https://api.github.com/users/"
});

class App extends React.Component {
  state = {
    user: null,
    formVal: "",
    followers: []
  }

  componentDidMount(){
    const axiosCalls = [
      github.get("Ethan-Edmond"),
      github.get("Ethan-Edmond/followers")
    ];
    Promise.all(axiosCalls)
      .then(([resUser, resFollowers]) => {
        this.setState({
          user: resUser.data,
          followers: resFollowers.data
        });
      })
      .catch(errors => console.log(errors));
  }

  formChange = (e) => {
    this.setState({
      formVal: e.target.value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    const axiosCalls = [
      github.get(this.state.formVal),
      github.get(`${this.state.formVal}/followers`)
    ];
    Promise.all(axiosCalls)
      .then(([resUser, resFollowers]) => {
        this.setState({
          user: resUser.data,
          followers: resFollowers.data
        });
      })
      .catch(errors => console.log(errors));
  }

  render(){
    return (
      <div className="App">
        <nav>
          <h1>Github User Cards</h1>
          <UserForm
            formSubmit={this.formSubmit}
            formChange={this.formChange}
            value={this.state.formVal}/>
        </nav>
        {this.state.user && (
          <div className="users-container">
            <User user={this.state.user}/>
            <Followers followers={this.state.followers}/>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;

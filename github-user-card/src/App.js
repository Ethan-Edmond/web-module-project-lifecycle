import React from "react";
import axios from "axios";
import './App.css';

import UserForm from "./components/UserForm";
import User from "./components/User";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    user: null,
    formVal: "",
    followers: []
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/Ethan-Edmond")
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err));
    axios.get("https://api.github.com/users/Ethan-Edmond/followers")
      .then(res => this.setState({
        followers: res.data
      }))
      .catch(err => console.log(err));
  }

  formChange = (e) => {
    this.setState({
      formVal: e.target.value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.formVal}`)
      .then(res => {
        this.setState({ user: res.data });
        axios.get(`https://api.github.com/users/${this.state.formVal}/followers`)
          .then(res => this.setState({
            followers: res.data
          }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
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

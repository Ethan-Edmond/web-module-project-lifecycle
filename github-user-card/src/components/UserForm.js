import React from "react";

class UserForm extends React.Component {
  render(){
    return (
      <form onSubmit={this.props.formSubmit}>
      <input
      placeholder="Input UserName"
      onChange={this.props.formChange}
      value={this.props.value}
      type="text"/>
      <button>Fetch User</button>
      </form>
    );
  }
}

export default UserForm;

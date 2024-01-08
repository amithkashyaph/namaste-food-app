import React, { Component } from "react";

export class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default",
        location: "Default loc",
      },
    };
  }

  async componentDidMount() {
    const userData = await fetch(
      "https://api.github.com/users/amithkashyaph"
    ).then((data) => data.json());

    this.setState({
      userInfo: userData,
    });
    console.log(userData);
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: 123456789</h3>
      </div>
    );
  }
}

export default UserClass;

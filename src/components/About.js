import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <h1>About class Component</h1>
        <h2>THis is namaste react ABout page</h2>
        <UserClass name={" first "} location={"Shahdol"} />
      </div>
    );
  }
}
export default About;

import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
  testString = () => {
    const text = "errorCode 1004 Error message";
    const textArray = text.split(" ");
    let finalMessage = "";
    console.log(textArray);
    switch (textArray[1]) {
      case "1004":
        finalMessage = "Custom message 1"; //TFDBD-3254
        break;
      case "1005":
        finalMessage = "Custom message 2"; //TFDBD-3400
        break;
      default:
        finalMessage = "Default message";
    }
    return finalMessage;
  };

  testAxios = () => {
    axios
      .get("https://reqres.in/api/users/23")
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div>
        {this.testString()} {this.testAxios()}
      </div>
    );
  }
}

export default Test;

import React, { Component } from "react";

class BeyCard extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.beyObj.img}
          alt=""
          onClick={this.props.clickthing}
        />
      </div>
    );
  }
}
export default BeyCard;

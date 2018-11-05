import React, { Component } from "react";

class BeyForm extends Component {
  state = {
    name: "",
    image: ""
  };

  changeGuy = (event) =>{
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })

    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.submitGuy}>
          <input type="text" placeholder="name" value={this.state.name} onChange={this.changeGuy} name="name"/>
          <input  type="text"  placeholder="image source" value={this.state.image} onChange={this.changeGuy} name="image"/>
          <button> Lay tha Slay</button>
        </form>
      </div>
    );
  }
}

export default BeyForm;

import React, { Component } from "react";
import BeyCard from "./BeyCard";
import BeyForm from "./BeyForm";
import { BeyImages, JayImages } from "../images";

class BeyContainer extends Component {
  state = {
    beyImages: BeyImages,
    renderOrNah: true
  };

  clickthing = () => {
    this.setState({
      renderOrNah: !this.state.renderOrNah
    });
  };
  submitGuy = (event, obj) => {
    event.preventDefault();
    let newArray = [...this.state.beyImages, obj]
    this.setState({
      beyImages: newArray
    })

  render() {
    let beyCards = this.state.beyImages.map(beyObj => (
      <BeyCard key={beyObj.name} beyObj={beyObj} clickthing={this.clickthing} />
    ));
    return (
      <div>
        <BeyForm submitHandler={this.submitGuy}/>
        {this.state.renderOrNah ? (
          beyCards
        ) : (
          <h1 onClick={this.clickthing}>FullSnack Devs</h1>
        )}
      </div>
    );
  }
}

export default BeyContainer;

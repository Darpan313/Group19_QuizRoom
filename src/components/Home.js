import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Hero from "./Hero";
import Featurelist from "./Featurelist";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <div>
          <Featurelist />
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Hero from "./Hero";
import Featurelist from "./Featurelist";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero>
          <Button type="submit">Register</Button>
        </Hero>
        <div>
          <Featurelist />
        </div>
      </>
    );
  }
}

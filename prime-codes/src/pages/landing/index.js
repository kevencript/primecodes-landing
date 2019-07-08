import React, { Component } from "react";
import FirstSection from "./sections/firstSection/firstSection";
import SecondSection from "./sections/secondSection/secondSection";
import ThirdSection from "./sections/thirdSection/thirdSection";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    );
  }
}

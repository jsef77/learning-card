import React from "react";
import { TwitterPicker } from "react-color";

class CalloutColourPicker extends React.Component {
  render() {
    return (
      <TwitterPicker
        className="colour-picker"
        triangle="hide"
        colors={[
          "var(--tomato-6)",
          "var(--ruby-6)",
          "var(--crimson-6)",
          "var(--purple-6)",
          "var(--iris-6)",
          "var(--teal-6)",
          "var(--grass-6)",
        ]}
      />
    );
  }
}

export default CalloutColourPicker;

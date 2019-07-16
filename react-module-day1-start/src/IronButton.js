// User.js
import React from "react";

function IronButton(props) {
  return (
    <button style={{fontWeight: "bold", fontSize: 24, borderRadius: 10, padding: 20, backgroundColor: "silver"}}>
      {props.text}
    </button>
  );
}

export default IronButton;
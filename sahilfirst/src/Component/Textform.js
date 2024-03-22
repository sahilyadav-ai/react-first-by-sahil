import React, { useState } from "react";
// import Prototypes from "prop-types";

export default function Texts(probs) {
  const handupclicked = () => {
    // console.log("uppercase");
    let newtxt = text.toUpperCase();
    setText(newtxt);
  };
  const handchange = (e) => {
    // console.log("changing the text ");
    setText(e.target.value);
  };
  let [text, setText] = useState("enter your text here");
  return (
    <div className="container">
      <label htmlFor="message">Enter your message:</label>
      <textarea
        id="message"
        name="message"
        value={text}
        onChange={handchange}
        placeholder="Type your message here..."
      ></textarea>
      <button onClick={handupclicked}>UpperCase</button>
    </div>
  );
}

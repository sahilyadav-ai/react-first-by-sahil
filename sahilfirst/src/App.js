import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/ Navbar.js";
import Texts from "./Component/ Textform.js";

function App() {
  return (
    <>
      <Navbar title="HOME" about="ABOUT" />
      <Texts />
    </>
  );
}

export default App;

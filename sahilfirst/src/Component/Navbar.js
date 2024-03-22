import React from "react";
import Prototypes from "prop-types";

export default function Navbar(probs) {
  return (
    <div className="navbar">
      <a href="/">{probs.title}</a>
      <a href="/">{probs.about}</a>
      <a href="/">Services</a>
      <a href="/">Contact</a>
    </div>
  );
}
Navbar.Prototypes = {
  title: Prototypes.string,
};
Navbar.defaultProps = {
  title: "set title",
  about: "set about",
};

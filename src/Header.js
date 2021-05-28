import React from "react";

const Header = ({ user }) => (
  <header>
    <a href="#">Home</a> Hello, {user.name}!
  </header>
);

export default Header;

import React from "react";
import Header from "./Header";

const Screen = ({ user }) => (
  <div>
    <Header user={user} />
    <h1>First screen</h1>
  </div>
);

export default Screen;

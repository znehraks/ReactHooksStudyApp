import React, { useState } from "react";
import Screen from "./Screen";

const App = () => {
  const [user] = useState({
    name: "JungMin",
  });
  return (
    <>
      <Screen user={user} />
    </>
  );
};
export default App;

import React from "react";
import Add from "./Add";
import { useState } from "../context";
import List from "./List";
import ToDo from "./ToDo";

const App = () => {
  const { toDos, completed } = useState();
  return (
    <>
      <h1>Add to do</h1>
      <h2>To Dos</h2>
      <Add />
      <List name={"To Do"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? `completed` : ``}>
        <>
          <h2>Completed</h2>
          {completed.map((toDo) => (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} isCompleted />
          ))}
        </>
      </List>
    </>
  );
};
export default App;

import React, { useReducer, useState } from "react";
import reducer, {
  initialState,
  ADD,
  DELETE,
  COMPLETE,
  UNCOMPLETE,
} from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newToDo });
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  return (
    <>
      <h1>Add to do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write to do"
          value={newToDo}
          onChange={onChange}
        ></input>
      </form>
      <ul>
        <h2>To Dos</h2>
        {state.toDos.map((toDo) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <span onClick={() => dispatch({ type: DELETE, payload: toDo.id })}>
              {" "}
              DELETE
            </span>
            <span
              onClick={() => dispatch({ type: COMPLETE, payload: toDo.id })}
            >
              {" "}
              COMPLETE
            </span>
          </li>
        ))}
      </ul>
      <ul>
        {state.completed.length !== 0 && (
          <>
            <h2>Completed</h2>
            {state.completed.map((toDo) => (
              <li key={toDo.id}>
                <span>{toDo.text}</span>
                <span
                  onClick={() => dispatch({ type: DELETE, payload: toDo.id })}
                >
                  {" "}
                  DELETE
                </span>
                <span
                  onClick={() =>
                    dispatch({ type: UNCOMPLETE, payload: toDo.id })
                  }
                >
                  {" "}
                  UNCOMPLETE
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </>
  );
};
export default App;

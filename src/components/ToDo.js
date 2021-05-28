import React from "react";
import { COMPLETE, DELETE, UNCOMPLETE } from "../action";
import { useDispatch } from "../context";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <span onClick={() => dispatch({ type: DELETE, payload: id })}>
        {" "}
        DELETE
      </span>

      <span
        onClick={() =>
          dispatch({
            type: isCompleted ? UNCOMPLETE : COMPLETE,
            payload: id,
          })
        }
      >
        {" "}
        {isCompleted ? "UNCOMPLETE" : "COMPLETE"}
      </span>
    </li>
  );
};

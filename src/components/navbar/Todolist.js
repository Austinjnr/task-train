import React from "react";

function todoList(props) {
  return <li onClick={() => props.onDelete(props.id)}>{props.value}</li>;
}
export default todoList;;
import React from "react";

function Todo(props) {
  return(
    <section>
      <li onClick={() => props.onDelete(props.id)}>{props.value}</li>
    </section>
  )
}
export default Todo;
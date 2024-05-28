import React, {  useState } from "react";
import { v4  } from "uuid";

const AddTodo = ({ setTodos, todos }) => {
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodos([...todos, { id: v4(), name: todo, isCompleted: false }]);
    setTodo("")
  };

  console.log(todos)

  return (
    <div>
      <input
        type="text"
        placeholder="add new task"
        value={todo}
        onChange={(e) =>{
            console.log(e.target.value)
            setTodo(e.target.value)
        }}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default AddTodo;

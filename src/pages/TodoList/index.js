import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListItems from "./ListItems";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const numberOfIncompletedTasks=todos.reduce((prev,curr)=>{
    if(!curr.isCompleted){
        return prev+1
    }
    return prev
  },0)

  console.log(numberOfIncompletedTasks,todos)
  return (
    <div>
      <TodoHeader/>
      <AddTodo setTodos={setTodos} todos={todos}/>
      <ListItems todos={todos} setTodos={setTodos} />
      <TodoFooter numberOfIncompletedTasks={numberOfIncompletedTasks}/>
    </div>
  );
};

export default TodoList;

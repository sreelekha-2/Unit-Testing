import React from "react";

const ListItems = ({ todos, setTodos }) => {
  const updateTodo = (id) => {
    const updatedTodos = todos.map((each) => {
      if (each.id === id) {
        return {
          ...each,
          isCompleted: true,
        };
      }
      return each;
    });
    setTodos([...updatedTodos]);
  };
  return (
    <ul>
      {todos.map((each) => {
        return (
          <li
            className={`list-item ${each.isCompleted && "todo-item-active"}` }
            onClick={() => updateTodo(each.id)}
            data-testid="list-item"
          >
            {each.name}
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;

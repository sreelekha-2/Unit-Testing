import React from "react";

const TodoFooter = ({ numberOfIncompletedTasks }) => {
  return (
    <div>
      <p data-testid="para" style={{opacity:1}}>
        {numberOfIncompletedTasks} {""}
        {numberOfIncompletedTasks === 1 ? "task" : "tasks"} left
      </p>
    </div>
  );
};

export default TodoFooter;

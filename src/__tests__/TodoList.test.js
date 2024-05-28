import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../pages/TodoList";

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/add new task/i);
  const buttonElement = screen.getByRole("button", { name: /add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("TodoList", () => {
  test("should render item element", () => {
    render(<TodoList />);
    addTask(["HTML5"]);
    const todoElement = screen.getByTestId("list-item");
    expect(todoElement).toBeInTheDocument();
    // expect(todoElement.textContent).toBe(task);
  });

  test("should render list of item elements", () => {
    render(<TodoList />);
    addTask(["HTML5", "Javascript", "Bootstrap"]);
    const todoElements = screen.getAllByTestId("list-item");
    expect(todoElements.length).toBe(3);
  });

  test("item should not have todo-item-active class on initial render", () => {
    render(<TodoList />);
    addTask([ "Bootstrap"]);
    const todoElement = screen.getByText(/bootstrap/i);
    expect(todoElement).not.toHaveClass("todo-item-active");
  });

  test("item should have todo-item-active class on click of item", () => {
    render(<TodoList />);
    addTask([ "Bootstrap"]);
    const todoElement = screen.getByText(/bootstrap/i);
    fireEvent.click(todoElement)
    expect(todoElement).toHaveClass("todo-item-active");
  });
});

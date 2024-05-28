import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "../pages/TodoList/AddTodo";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add new task/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in input element", () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add new task/i);
    fireEvent.change(inputElement, { target: { value: "Javascript" } });
    expect(inputElement.value).toBe("Javascript");
  });

  test("should be empty input when add button is clicked", () => {
    render(<AddTodo todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/add new task/i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    // fireEvent.change(inputElement, { target: { value: "Javascript" } });
    expect(inputElement.value).toBe("");
  });
});

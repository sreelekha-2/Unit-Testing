import { render, screen } from '@testing-library/react';
import TodoHeader from '../pages/TodoList/TodoHeader';

test('renders heading of the todolist application', () => {
  render(<TodoHeader />);
  const headingElement = screen.getByText(/todo list/i);
  expect(headingElement).toBeInTheDocument();
});


test('renders heading of the todo-list application', () => {
    render(<TodoHeader />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toBe("Todo List");
  });

  
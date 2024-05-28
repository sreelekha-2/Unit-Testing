import { render, screen } from "@testing-library/react";
import TodoFooter from "../pages/TodoList/TodoFooter";

describe("Todo Footer", () => {
  test("renders the correct number of incompleted tasks", () => {
    render(<TodoFooter numberOfIncompletedTasks={5} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent(/5 tasks left/i);
  });

  test('renders "task" when number of incompleted task is 1', () => {
    render(<TodoFooter numberOfIncompletedTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toContainHTML("p");
  });

  it("should be visible number of incompleted tasks", () => {
    render(<TodoFooter numberOfIncompletedTasks={2} />);
    const headingElement = screen.getByText(/2 tasks left/i);
    // expect(headingElement).not.toBeVisible();
    expect(headingElement).toBeVisible();

  });
});

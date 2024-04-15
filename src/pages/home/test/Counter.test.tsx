import { fireEvent, render, screen } from "@testing-library/react";

import Counter from "../components/Counter";

test("count is 0 at first", () => {
  render(<Counter />);

  expect(screen.getByText("Counter: 0")).toBeDefined();
});

test("increments count", () => {
  render(<Counter />);

  fireEvent.click(screen.getByTitle("increaseCount"));

  expect(screen.getByText("Counter: 1")).toBeDefined();
});

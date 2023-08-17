import { render, screen } from "@testing-library/react";
import { click } from "@testing-library/user-event";
import { test, expect } from "vitest";
import App from "./App";

test("increases counter properly", async () => {
  render(<App />);

  const buttonEl = screen.getByText("count is 0");

  await click(buttonEl);

  expect(buttonEl.innerHTML).toEqual("count is 1");
});

test("increases counter properly", async () => {
  render(<App />);

  const buttonEl = screen.getByText("count is 1");

  await click(buttonEl);

  expect(buttonEl.innerHTML).toEqual("count is 2");
});

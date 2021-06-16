import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Login from "./Login";

describe("renders the different inputs", () => {
  test("renders username field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Login />
      </Router>
    );
    const username = screen.getByPlaceholderText("Username");
    expect(username).toBeInTheDocument();
  });

  test("renders password field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Login />
      </Router>
    );
    const password = screen.getByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });
});

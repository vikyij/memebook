import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import ForgotPassword from "./index";

describe("renders the different inputs", () => {
  test("renders username field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <ForgotPassword />
      </Router>
    );
    const username = screen.getByPlaceholderText("Username");
    expect(username).toBeInTheDocument();
  });
});

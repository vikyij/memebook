import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import SignUp from "./Signup";

describe("renders the different inputs", () => {
  test("renders username field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignUp />
      </Router>
    );
    render();
    const username = screen.getByPlaceholderText("Username");
    expect(username).toBeInTheDocument();
  });

  test("renders email field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignUp />
      </Router>
    );
    const email = screen.getByPlaceholderText("Email");
    expect(email).toBeInTheDocument();
  });

  test("renders password field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignUp />
      </Router>
    );
    const password = screen.getByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });

  test("renders retype password field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignUp />
      </Router>
    );
    const retypePassword = screen.getByPlaceholderText("Retype Password");
    expect(retypePassword).toBeInTheDocument();
  });

  test("renders phone number field", () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <SignUp />
      </Router>
    );
    const phoneNumber = screen.getByPlaceholderText("Phone Number");
    expect(phoneNumber).toBeInTheDocument();
  });
});

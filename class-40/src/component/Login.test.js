import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("check for username input field", () => {
  render(<Login />);
  const userNameElem = screen.getByPlaceholderText(/UserName/i);
  expect(userNameElem).toBeInTheDocument();
});

test("check for password input field", () => {
  render(<Login />);
  const passwordElem = screen.getByPlaceholderText(/password/i);
  expect(passwordElem).toBeInTheDocument();
});

test("check for login button", () => {
  render(<Login />);
  const btnElem = screen.getByRole("button");
  expect(btnElem).toBeInTheDocument();
});

test('userName input should be empty initially', () => {
  render(<Login />);
  const userNameElem = screen.getByPlaceholderText(/UserName/i);
  expect(userNameElem.value).toBe("");
})

test('password input should be empty initially', () => {
  render(<Login />);
  const passwordElem = screen.getByPlaceholderText(/password/i);
  expect(passwordElem.value).toBe("");
})

test('Button is disabled when there is no data', () => {
  render(<Login />);
  const buttonElem = screen.getByRole('button');
  expect(buttonElem).toBeDisabled();
})
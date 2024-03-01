import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../util/appStore";
import { BrowserRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Should load header component with login button", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const button = screen.getByRole("button",{name: "Login"});

  expect(button).toBeInTheDocument();
});
test("Should load header component with zero cart items", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter> 
  );

  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});
test("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", {name : "Logout"});

  expect(logoutButton).toBeInTheDocument();
});

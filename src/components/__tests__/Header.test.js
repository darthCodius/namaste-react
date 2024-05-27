import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginLink = screen.queryByText("Login");

  expect(loginLink).toBeInTheDocument();
});

it("Should load Header Component with a Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartIcon = screen.queryByTestId("cart-icon");

  expect(cartIcon).toBeVisible();
});

it("Should load change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginLink = screen.queryByText("Login");

  fireEvent.click(loginLink);

  const logoutLink = screen.getByText("Logout");

  expect(logoutLink).toBeInTheDocument();
});

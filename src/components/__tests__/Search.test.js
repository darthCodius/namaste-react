import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/bodyMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search Restaurant List for sardar input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.queryByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "sardar" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.queryAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should render Top Rated Restaurant List", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeTopRated = screen.getAllByTestId("resCard");

  expect(cardsBeforeTopRated.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterTopRated = screen.getAllByTestId("resCard");

  expect(cardsAfterTopRated.length).toBe(6);
});

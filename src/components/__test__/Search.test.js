import Body from "../Body";
import { fireEvent, render , screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// trying to make exact similar fetch function that is defined inside Body component for fetching the data.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should filter top rated restaurants on click", async () => {
  await act(async () => render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>
  ));
   
  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick .length).toBe(20);

  const searchBtn = screen.getByRole("button", {name: "Search"});

   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput,{target : {value: "darbar"}});

   fireEvent.click(searchBtn);

   const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(1);
});
test("Should search res list with name darbar among all the restaurants", async () => {
  await act(async () => render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>
  ));
   
  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick .length).toBe(20);

  const filterBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});

   fireEvent.click(filterBtn);

   const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(15);
});
 
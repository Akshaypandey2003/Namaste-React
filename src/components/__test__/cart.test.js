import { fireEvent, render, screen } from "@testing-library/react";
import MenuItems from "../MenuItems";
import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuMock.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../util/appStore"
import Restaurantsmenu from "../RestaurantsMenu";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve(() => {
    json: () => {
      return Promise.resolve(MOCK_DATA);
    };
  });
});
test("Should load restaurant menu items page", async () => {
  await act(async () =>
    render(
      <Provider store = {appStore}>
        <BrowserRouter>
        <Restaurantsmenu/>
        </BrowserRouter>
      </Provider>
    )
  );
  const menuHeader = screen.getByTestId("menuHeader");


   expect(menuHeader).ToBeInTheDocument();
  // fireEvent.click(accordionHeader);
});

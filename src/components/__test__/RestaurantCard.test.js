import RestaurantCard from "../RestaurantCard"
import { render , screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

test("Should render restaurant card component with props", ()=>{

    render(<RestaurantCard resData = {MOCK_DATA}/>);

     const card = screen.getByText("Pizza Hut");

      expect(card).toBeInTheDocument();
})
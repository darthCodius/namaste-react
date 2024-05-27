import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render restaurant card component with data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Sharma Ji Ki Chai Hazratganj");

  expect(name).toBeInTheDocument();
});

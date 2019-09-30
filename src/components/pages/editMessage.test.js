import React from "react";
import { render } from "@testing-library/react";
import { EditMessage } from "./editMessage";
import rootReducer from "../../reducers/";
import { createStore } from "redux";
import { Provider } from "react-redux";

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

describe("EditMessage", () => {
  it("should render", () => {
    const { getByTestId } = renderWithRedux(<EditMessage></EditMessage>);

    expect(getByTestId("edit-message")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";
import { Inbox } from "./inbox";
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

describe("Inbox", () => {
  it("should render Inbox", () => {
    const { getByTestId } = renderWithRedux(<Inbox></Inbox>);
    expect(getByTestId("inbox")).toBeInTheDocument();
  });
});

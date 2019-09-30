import React from "react";
import { render } from "@testing-library/react";
import { MessageList } from "./messageList";
import rootReducer from "../../../reducers/";
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

describe("MessageList", () => {
  it("should show placeholder if list is empty", () => {
    const { getByTestId } = renderWithRedux(<MessageList />);
    expect(getByTestId("no-message")).toBeInTheDocument();
  });

  it("should show messages from the store", () => {
    const { getByText } = renderWithRedux(<MessageList />, {
      initialState: {
        messages: [
          {
            text: "Yop!",
            isPrivate: true,
            id: 0
          }
        ]
      }
    });
    expect(getByText("Yop!")).toBeInTheDocument();
  });

  it("should show loading message", () => {
    const { getByTestId } = renderWithRedux(<MessageList />, {
      initialState: {
        appStatus: {
          loadingMessages: true
        }
      }
    });
    expect(getByTestId("loading")).toBeInTheDocument();
  });
});

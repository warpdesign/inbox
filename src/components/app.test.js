import React from "react";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import { PropTypes } from "prop-types";
import reactRouter from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ApiMock from "../helpers/api-mock";
import rootReducer from "../reducers/";
import App from "./app";

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

function mockBrowserRouter(intialEntries = ["/"]) {
  const MemoryRouter = reactRouter.MemoryRouter;

  const MockBrowserRouter = ({ children }) => (
    <MemoryRouter initialEntries={intialEntries}>{children}</MemoryRouter>
  );

  MockBrowserRouter.propTypes = { children: PropTypes.node.isRequired };
  reactRouter.BrowserRouter = MockBrowserRouter;
}

describe("App", () => {
  beforeAll(() => {
    ApiMock.init({ delayResponse: 0 });
  });

  it("should render inbox for /", () => {
    mockBrowserRouter(["/"]);

    const { getByTestId } = renderWithRedux(<App></App>);

    expect(getByTestId("inbox")).toBeInTheDocument();
  });

  it("should render edit message for /compose", () => {
    mockBrowserRouter(["/compose"]);

    const { getByTestId } = renderWithRedux(<App></App>);

    expect(getByTestId("edit-message")).toBeInTheDocument();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Intent, Classes } from "@blueprintjs/core";
import { LinkButton } from "./linkButton";
import { Router } from "react-router-dom";

describe("LinkButton", () => {
  let history;

  beforeEach(() => {
    history = createMemoryHistory("/");
  });

  it("should show LinkButton with primary intent", () => {
    const link = {
      icon: "tick",
      text: "link",
      url: "/"
    };

    const { getByText, getByTestId } = render(
      <Router history={history}>
        <LinkButton link={link}></LinkButton>
      </Router>
    );

    expect(getByText("link")).toBeInTheDocument();
    expect(getByTestId("link-button")).toHaveClass(Classes.INTENT_PRIMARY);
  });

  it("should show LinkButton with no intent", () => {
    const link = {
      icon: "tick",
      text: "link",
      url: "/other_url"
    };

    const { getByText, getByTestId } = render(
      <Router history={history}>
        <LinkButton link={link}></LinkButton>
      </Router>
    );

    expect(getByText("link")).toBeInTheDocument();
    expect(getByTestId("link-button")).not.toHaveClass(Classes.INTENT_PRIMARY);
  });

  it("should call history.push if different location", () => {
    const link = {
      icon: "tick",
      text: "ok",
      intent: Intent.SUCCESS,
      url: "/foo"
    };

    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <LinkButton link={link}></LinkButton>
      </Router>
    );

    fireEvent.click(getByText("ok"));

    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push).toHaveBeenCalledWith("/foo");
  });

  it("should not call history.push if same location", () => {
    const link = {
      icon: "tick",
      text: "ok",
      intent: Intent.SUCCESS,
      url: "/"
    };

    history.push = jest.fn();

    const { getByText } = render(
      <Router history={history}>
        <LinkButton link={link}></LinkButton>
      </Router>
    );

    fireEvent.click(getByText("ok"));

    expect(history.push.mock.calls.length).toBe(0);
  });
});

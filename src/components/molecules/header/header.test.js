import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Header } from "./header";
import { Pages } from "../../../constants/pages";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("should render header", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header pages={Pages} title="hello"></Header>
      </BrowserRouter>
    );
    expect(getByText("hello")).toBeInTheDocument();
    Pages.forEach(page => expect(getByText(page.text)).toBeInTheDocument());
  });
});

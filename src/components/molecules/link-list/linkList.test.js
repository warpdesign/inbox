import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LinkList } from "./linkList";
import { Pages } from "../../../constants/pages";
import { BrowserRouter } from "react-router-dom";

describe("LinkList", () => {
  it("should show a link for each element", () => {
    const { getByText } = render(
      <BrowserRouter>
        <LinkList links={Pages}></LinkList>
      </BrowserRouter>
    );

    Pages.forEach(page => expect(getByText(page.text)).toBeInTheDocument());
  });
});

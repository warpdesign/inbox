import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Message } from "./message";

describe("Message", () => {
  it("should render correctly", () => {
    const msg = {
      text: "yo!"
    };

    const { getByTestId } = render(<Message msg={msg} />);
    expect(getByTestId("message")).toHaveTextContent(msg.text);
  });
});

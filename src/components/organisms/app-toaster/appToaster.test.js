import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { getByText } from "@testing-library/dom";
import { Intent } from "@blueprintjs/core";
import { AppToaster } from "./appToaster";

describe("AppToaster", () => {
  it("should show a toaster", () => {
    AppToaster.show({
      message: "Message",
      intent: Intent.SUCCESS,
      icon: "tick",
      timeout: 10000
    });

    expect(getByText(document.body, "Message")).toBeInTheDocument();
  });
});

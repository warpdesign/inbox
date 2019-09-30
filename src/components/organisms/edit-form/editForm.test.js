import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { EditForm } from "./editForm";

describe("EditForm", () => {
  let mockOnSubmit;

  it("should render EditForm", () => {
    // simply use a noop func for onSubmit prop:
    // it doesn't need to be a promise since it won't be called
    mockOnSubmit = () => {};

    const { getByText, getByTestId } = render(
      <EditForm onSubmit={mockOnSubmit}></EditForm>
    );

    expect(getByText("Enter the message to send:")).toBeInTheDocument();
    expect(getByTestId("message-textarea")).toBeInTheDocument();
    expect(getByTestId("private-checkbox")).toBeInTheDocument();
    expect(getByText("Send Message")).toBeDisabled();
  });

  it("should enable send button, call onSubmit prop & show succes toaster when text area is not empty", async () => {
    // simulate success when creating the message
    mockOnSubmit = jest.fn(() => Promise.resolve());

    expect.assertions(4);

    const { getByTestId, findByText, getByText } = render(
      <EditForm onSubmit={mockOnSubmit}></EditForm>
    );

    const textarea = getByTestId("message-textarea");
    const button = getByText("Send Message");

    fireEvent.change(textarea, { target: { value: "test" } });
    expect(getByText("test")).toBeInTheDocument();

    expect(getByText("Send Message")).toBeEnabled();

    fireEvent.click(button);

    // waiting for the toaster to appear allows to make sure the async onSubmit function
    // has been called inside this test. Otherwise we could get an error stating that
    // react code should be wrapped inside act()
    await findByText("Message Created");

    expect(mockOnSubmit.mock.calls.length).toBe(1);
    expect(mockOnSubmit).toHaveBeenCalledWith("test", false);
  });

  it("should enable send button, call onSubmit prop & show error toaster when text area is not empty", async () => {
    // simulate error when creating the message
    mockOnSubmit = jest.fn(() => Promise.reject());

    expect.assertions(4);

    const { getByTestId, findByText, getByText } = render(
      <EditForm onSubmit={mockOnSubmit}></EditForm>
    );

    const textarea = getByTestId("message-textarea");
    const button = getByText("Send Message");

    fireEvent.change(textarea, { target: { value: "test" } });
    expect(getByText("test")).toBeInTheDocument();

    expect(getByText("Send Message")).toBeEnabled();

    fireEvent.click(button);

    // waiting for the toaster to appear allows to make sure the async onSubmit function
    // has been called inside this test. Otherwise we could get an error stating that
    // react code should be wrapped inside act()
    await findByText("Error creating message");

    expect(mockOnSubmit.mock.calls.length).toBe(1);
    expect(mockOnSubmit).toHaveBeenCalledWith("test", false);
  });
});

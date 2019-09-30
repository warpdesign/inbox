import { appStatus, initialState } from "./appStatus";

describe("appStatus reducer", () => {
  it("should return the initial state", () => {
    expect(appStatus(undefined, {})).toEqual(initialState);
  });

  it("should handle SENDING_MESSAGE", () => {
    expect(
      appStatus(undefined, {
        type: "SENDING_MESSAGE",
        payload: true
      })
    ).toEqual({
      sendingMessage: true,
      loadingMessages: false
    });

    expect(
      appStatus(undefined, {
        type: "SENDING_MESSAGE",
        payload: false
      })
    ).toEqual({
      sendingMessage: false,
      loadingMessages: false
    });
  });

  it("should handle LOADING_MESSAGE", () => {
    expect(
      appStatus(undefined, {
        type: "LOADING_MESSAGES",
        payload: true
      })
    ).toEqual({
      sendingMessage: false,
      loadingMessages: true
    });

    expect(
      appStatus(undefined, {
        type: "LOADING_MESSAGES",
        payload: false
      })
    ).toEqual({
      sendingMessage: false,
      loadingMessages: false
    });
  });
});

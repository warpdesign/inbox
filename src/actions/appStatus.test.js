import { appStatus } from "./appStatus";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import ApiMock from "../helpers/api-mock";
import fetchJson from "../constants/mocks/fetch.json";
import { sendingMessage, loadingMessages } from "./appStatus";

describe("appStatus actions", () => {
  let store;
  let mockStore;

  it("create sending message action", () => {
    expect(sendingMessage(true)).toEqual({
      type: "SENDING_MESSAGE",
      payload: true
    });

    expect(sendingMessage(false)).toEqual({
      type: "SENDING_MESSAGE",
      payload: false
    });
  });

  it("create loading messages action", () => {
    expect(loadingMessages(true)).toEqual({
      type: "LOADING_MESSAGES",
      payload: true
    });

    expect(loadingMessages(false)).toEqual({
      type: "LOADING_MESSAGES",
      payload: false
    });
  });
});

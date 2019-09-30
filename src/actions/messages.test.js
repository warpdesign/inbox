import {
  addMessage,
  fetchMessages,
  fetchAllMessages,
  createMessage
} from "./messages";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import ApiMock from "../helpers/api-mock";
import fetchJson from "../constants/mocks/fetch.json";

describe("messages actions", () => {
  let store;
  let mockStore;

  beforeAll(() => {
    mockStore = configureMockStore([thunk]);
    ApiMock.init({ delayResponse: 0 });
  });

  beforeEach(() => {
    store = mockStore({
      loadingMessages: false,
      sendingMessage: false,
      messages: []
    });
  });

  it("should create an action to add a message", () => {
    const message = "hello";
    const expectedAction = {
      type: "ADD_MESSAGE",
      payload: {
        text: "hello",
        isPrivate: false
      }
    };

    expect(addMessage(expectedAction.payload)).toEqual(expectedAction);
    expectedAction.payload.isPrivate = true;
    expect(addMessage(expectedAction.payload)).toEqual(expectedAction);
  });

  it("fetchMessages action creator", () => {
    const messages = {
      type: "FETCH_MESSAGES",
      payload: [
        {
          id: 0,
          text: "hey there!",
          isPrivate: false
        },
        {
          id: 1,
          text: "Don't tell anyone!",
          isPrivate: true
        }
      ]
    };

    expect(fetchMessages(messages.payload)).toEqual(messages);
  });

  it("fetchAllMessages action creator", async () => {
    await store.dispatch(fetchAllMessages());
    const actions = store.getActions();

    expect.assertions(6);
    expect(actions[0].type).toEqual("LOADING_MESSAGES");
    expect(actions[0].payload).toEqual(true);
    expect(actions[1].type).toEqual("FETCH_MESSAGES");
    expect(actions[1].payload).toEqual(fetchJson);
    expect(actions[2].type).toEqual("LOADING_MESSAGES");
    expect(actions[2].payload).toEqual(false);
  });

  it("createMessage action creator", async () => {
    await store.dispatch(createMessage("hi there", false));
    const actions = store.getActions();

    expect.assertions(6);
    expect(actions[0].type).toEqual("SENDING_MESSAGE");
    expect(actions[0].payload).toEqual(true);
    expect(actions[1].type).toEqual("ADD_MESSAGE");
    expect(actions[1].payload).toEqual({
      text: "hi there",
      isPrivate: false
    });
    expect(actions[2].type).toEqual("SENDING_MESSAGE");
    expect(actions[2].payload).toEqual(false);
  });
});

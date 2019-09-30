import { messages } from "./messages";

describe("messages reducer", () => {
  it("should return the initial state", () => {
    expect(messages(undefined, {})).toEqual([]);
  });

  it("should handle addMessage", () => {
    expect(
      messages([], {
        type: "ADD_MESSAGE",
        payload: {
          text: "hey!"
        }
      })
    ).toEqual([
      {
        text: "hey!",
        id: 0
      }
    ]);

    expect(
      messages(
        [
          {
            text: "hey!",
            id: 0
          }
        ],
        {
          type: "ADD_MESSAGE",
          payload: {
            text: "how are you?"
          }
        }
      )
    ).toEqual([
      {
        text: "hey!",
        id: 0
      },
      {
        text: "how are you?",
        id: 1
      }
    ]);
  });
});

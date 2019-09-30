export const messages = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      const message = action.payload;
      // when using mock, message won't have an id
      const id =
        message.id || state.reduce((max, msg) => Math.max(max, msg.id), -1) + 1;

      return state.concat({
        id,
        ...message
      });

    case "FETCH_MESSAGES":
      return action.payload;

    default:
      return state;
  }
};

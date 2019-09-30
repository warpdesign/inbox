export const initialState = {
  sendingMessage: false,
  loadingMessages: false
};

export const appStatus = (state = initialState, action) => {
  switch (action.type) {
    case "SENDING_MESSAGE":
      return { ...state, sendingMessage: action.payload };

    case "LOADING_MESSAGES":
      return { ...state, loadingMessages: action.payload };

    default:
      return state;
  }
};

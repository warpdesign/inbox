const sendingMessage = bool => ({
  type: "SENDING_MESSAGE",
  payload: bool
});

const loadingMessages = bool => ({
  type: "LOADING_MESSAGES",
  payload: bool
});

export { sendingMessage, loadingMessages };

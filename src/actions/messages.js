import axios from "axios";
import { Api } from "../constants/api";
import { sendingMessage, loadingMessages } from "./appStatus";

const addMessage = message => ({
  type: "ADD_MESSAGE",
  payload: message
});

const createMessage = (message, isPrivate) => {
  return dispatch => {
    dispatch(sendingMessage(true));
    return axios
      .post(`${Api.URL}${Api.CREATE}`, {
        text: message,
        isPrivate: isPrivate
      })
      .then(response => {
        dispatch(addMessage(response.data));
      })
      .finally(() => {
        dispatch(sendingMessage(false));
      });
  };
};

const fetchMessages = messages => ({
  type: "FETCH_MESSAGES",
  payload: messages
});

const fetchAllMessages = (isPrivate = null) => {
  return dispatch => {
    dispatch(loadingMessages(true));
    return axios
      .get(`${Api.URL}${Api.FETCH}`)
      .then(response => {
        dispatch(fetchMessages(response.data));
      })
      .finally(() => {
        dispatch(loadingMessages(false));
      });
  };
};

export { addMessage, createMessage, fetchMessages, fetchAllMessages };

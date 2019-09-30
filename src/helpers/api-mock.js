import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Api } from "../constants/api";
import fetchResult from "../constants/mocks/fetch";

const ApiMock = {
  mock: null,
  init(options = { delayResponse: 1000 }) {
    console.log("Mocking API");
    this.mock = new MockAdapter(axios, options);
    this.mockRequests();
  },
  mockRequests() {
    console.log("mocking requests");
    this.mock.onGet(`${Api.URL}${Api.FETCH}`).reply(200, fetchResult);
    this.mock.onPost(`${Api.URL}${Api.CREATE}`).reply(config => {
      return [200, config.data];
    });
  }
};

export default ApiMock;

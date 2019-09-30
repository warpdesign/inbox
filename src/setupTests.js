import "@testing-library/jest-dom/extend-expect";

global.console = {
  // ignore warning displayed because blueprintjs is using componentWillReceiveProps
  warn: jest.fn(),
  log: console.log,
  error: console.error,
  info: console.info,
  debug: console.debug
};

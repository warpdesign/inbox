import React from "react";
import { PropTypes } from "prop-types";

function Message({ msg }) {
  return <li data-testid="message">{msg.text}</li>;
}

Message.propTypes = {
  msg: PropTypes.shape({
    text: PropTypes.string
  }).isRequired
};

export { Message };

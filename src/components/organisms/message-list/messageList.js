import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Message } from "../../molecules/message/message";

function MessageList({ messages, loading }) {
  const isEmpty = !!!messages.length;

  if (loading) {
    return <h2 data-testid="loading">Loading messages...</h2>;
  } else {
    return isEmpty ? (
      <h2 data-testid="no-message">There's nothing to see here ;)</h2>
    ) : (
      <ul data-testid="message-list">
        {messages.map(msg => (
          <Message key={msg.id} msg={msg}></Message>
        ))}
      </ul>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPrivate: PropTypes.bool.isRequired
    })
  ),
  loading: PropTypes.bool
};

MessageList.defaultProps = {
  messages: [],
  loading: false
};

const mapStateToProps = state => ({
  messages: state.messages,
  loading: state.appStatus.loadingMessages
});

const ConnectedMessage = connect(mapStateToProps)(MessageList);

export { ConnectedMessage as MessageList };

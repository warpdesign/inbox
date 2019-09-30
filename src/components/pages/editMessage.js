import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createMessage } from "../../actions/messages";
import { EditForm } from "../organisms/edit-form/editForm";

function EditMessage({ createMessage, loading }) {
  const onSubmitMessage = (message, isPrivate) => {
    return createMessage(message, isPrivate);
  };
  return <EditForm onSubmit={onSubmitMessage} loading={loading}></EditForm>;
}

EditMessage.propTypes = {
  createMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.appStatus.sendingMessage
});

const mapDispatchToProps = dispatch => ({
  createMessage: (message, isPrivate) =>
    dispatch(createMessage(message, isPrivate))
});

const ConnectedEditMessage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMessage);

export { ConnectedEditMessage as EditMessage };

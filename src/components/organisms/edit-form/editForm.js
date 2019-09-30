import React from "react";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { FormGroup, Classes, Button, Intent, Switch } from "@blueprintjs/core";
import { AppToaster } from "../app-toaster/appToaster";
import styles from "./editForm.module.css";

function EditForm({ onSubmit, loading }) {
  const [message, setMessage] = useState("");
  const [isPrivate, setPrivate] = useState(false);

  const onMessageChange = event => setMessage(event.target.value);
  const onPrivateChange = () => setPrivate(!isPrivate);
  const onSend = () => {
    onSubmit(message, isPrivate)
      .then(() => {
        setMessage("");
        AppToaster.show({
          message: "Message Created",
          intent: Intent.SUCCESS,
          icon: "tick",
          timeout: 2000
        });
      })
      .catch(err => {
        AppToaster.show({
          action: {
            onClick: () => onSend(),
            text: "Retry"
          },
          message: "Error creating message",
          intent: Intent.DANGER,
          icon: "warning-sign",
          timeout: 5000
        });
      });
  };

  const isMessageEmpty = message.length === 0;
  const buttonLabel = loading ? "Sending Message..." : "Send Message";

  return (
    <form data-testid="edit-message" className={styles.form}>
      <h2>Enter the message to send:</h2>
      <FormGroup
        label="Message"
        labelFor="message-input"
        labelInfo="(required)"
        inline
      >
        <textarea
          className={Classes.INPUT}
          data-testid="message-textarea"
          intent={Intent.PRIMARY}
          onChange={onMessageChange}
          value={message}
          placeholder="Message"
          disabled={loading}
        />
      </FormGroup>
      <FormGroup label="Private?" labelFor="private-checkbox" inline>
        <Switch
          data-testid="private-checkbox"
          checked={isPrivate}
          label="private"
          onChange={onPrivateChange}
          disabled={loading}
        ></Switch>
      </FormGroup>

      <Button
        intent={Intent.PRIMARY}
        disabled={isMessageEmpty || loading}
        onClick={onSend}
      >
        {buttonLabel}
      </Button>
    </form>
  );
}

EditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export { EditForm };

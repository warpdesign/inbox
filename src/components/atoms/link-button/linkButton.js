import React from "react";
import { withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Button, Intent } from "@blueprintjs/core";

function Link({ link, history, location }) {
  // we could use match, but for some reason it doesn't seem
  // to return the right path/params
  // see: https://github.com/ReactTraining/react-router/issues/5169
  const updateHistory = () => {
    if (location.pathname !== link.url) {
      history.push(link.url);
    }
  };

  const intent = location.pathname === link.url ? Intent.PRIMARY : "";

  return (
    <Button
      minimal
      icon={link.icon}
      text={link.text}
      onClick={updateHistory}
      intent={intent}
      data-testid="link-button"
    ></Button>
  );
}

const LinkButton = withRouter(Link);

Link.propTypes = {
  link: PropTypes.object,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export { LinkButton };

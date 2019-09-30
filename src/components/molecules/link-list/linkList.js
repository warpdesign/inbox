import React from "react";
import PropTypes from "prop-types";
import { LinkButton } from "../../atoms/link-button/linkButton";

function LinkList({ links }) {
  return (
    <React.Fragment>
      {links.map((link, i) => (
        <LinkButton link={link} key={i}></LinkButton>
      ))}
    </React.Fragment>
  );
}

LinkList.propTypes = {
  links: PropTypes.array
};

LinkList.defaultProps = {
  links: []
};

export { LinkList };

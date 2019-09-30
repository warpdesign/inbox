import React from "react";
import PropTypes from "prop-types";
import { Navbar, Alignment } from "@blueprintjs/core";
import { LinkList } from "../link-list/linkList";

function Header({ pages, title }) {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>{title}</Navbar.Heading>
        <Navbar.Divider />
        <LinkList links={pages}></LinkList>
      </Navbar.Group>
    </Navbar>
  );
}

Header.propTypes = {
  pages: PropTypes.array,
  title: PropTypes.string
};

Header.defaultProps = {
  pages: [],
  title: "MailBox"
};

export { Header };

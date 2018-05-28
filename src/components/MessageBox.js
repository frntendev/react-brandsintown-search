import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
const styles = {
  root: css`
    width: 95%;
    background: #48c5b64f;
    text-align: center;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.5rem;
    border-radius: 4px;
    margin: 70px auto 0 auto;
    color: #fff;
    label: root;
  `
};
const MessageBox = props => {
  return <div className={styles.root}>{props.text}</div>;
};

export default MessageBox;

MessageBox.defaultProps = {
  text: ""
};

MessageBox.propTypes = {
  /**
   * The text of the message box
   */
  text: PropTypes.string.isRequired
};

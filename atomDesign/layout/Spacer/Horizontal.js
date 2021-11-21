import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Spacer.module.css";

// FIXME: Use tokens.css intead
import { choices } from "../../../tokens";
// TODO: Move to helpers.js
const getSize = (size) => choices.spacing[size];

const Horizontal = ({ size, isVisible }) => (
  <div
    className={classNames(styles.spacer, {
      [styles["is-visible"]]: isVisible,
    })}
    style={{
      display: "block",
      width: "100%",
      height: getSize(size),
    }}
  />
);

Horizontal.propTypes = {
  size: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};

export default Horizontal;

import React from "react";
import PropTypes from "prop-types";

import { getWidth } from "./helpers";

import styles from "./Picture.module.css";

const Picture = ({ src, width }) => (
  <picture className={styles.picture}>
    <img src={src} style={{ maxWidth: getWidth(width) }} />
  </picture>
);

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Picture;

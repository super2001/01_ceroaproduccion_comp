import React from "react";
import PropTypes from "prop-types";
import Icon from "../../atoms/Icons";

import styles from "./Dropdown.module.css";

export const OPTIONS = [
  {
    text: "9:00 AM",
    value: 800,
  },
  {
    text: "10:00 AM",
    value: 1000,
  },
  {
    text: "1:00 PM",
    value: 1300,
  },
  {
    text: "3:00 PM",
    value: 1500,
  },
];

const Dropdown = ({ options, value, onChange }) => (
  <div className={styles.dropdown}>
    <Icon type="angleDown" hasBackground />
    <select
      className={[styles["dropdown-select"]]}
      onChange={onChange}
      value={value}
    >
      {options.map(({ text, value }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  value: "",
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
};

export default Dropdown;

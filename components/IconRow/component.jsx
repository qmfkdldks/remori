import React from "react";
import PropTypes from "prop-types";
import { Row } from "./style";
import Icon from "../Icon";

const IconRow = ({ title, icon, onClick }) => (
  <Row onClick={onClick}>
    <Icon name={icon} />
    {title}
  </Row>
);

IconRow.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconRow;

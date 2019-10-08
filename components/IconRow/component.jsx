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

IconRow.defaultProps = {
  onClick: () => {}
};

IconRow.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default IconRow;

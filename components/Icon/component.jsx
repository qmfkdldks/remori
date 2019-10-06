import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as icons from "styled-icons/feather";

const Icon = ({ name, size }) => {
  const DynamicIcon = icons[name];
  const StyledIcon = styled(DynamicIcon)``;
  return <StyledIcon size={size} />;
};

Icon.defaultProps = {
  size: { width: 50, height: 50 }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default Icon;

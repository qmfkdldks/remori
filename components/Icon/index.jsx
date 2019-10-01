import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as icons from "styled-icons/feather";

const Icon = ({ name, size }) => {
  const DynamicIcon = icons[name];
  const StyledIcon = styled(DynamicIcon)``;
  return <StyledIcon size={size} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
};

export default Icon;

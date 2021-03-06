import React from "react";
import PropTypes from "prop-types";
import { Box, Head, Text, Circle } from "./style";
import Icon from "../Icon";

const IconBox = props => {
  const { primary, secondary, head, text, icon, onClick } = props;

  return (
    <Box onClick={onClick}>
      <Circle primary={primary} secondary={secondary}>
        <Icon name={icon} size={35} />
      </Circle>
      <Head>{head}</Head>
      <Text>{text}</Text>
    </Box>
  );
};

IconBox.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  head: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

IconBox.defaultProps = {
  primary: "#44ce6f",
  secondary: "#cdf1d8",
  icon: "Layout",
  onClick: null
};

export default IconBox;

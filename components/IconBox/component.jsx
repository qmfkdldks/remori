import React from "react";
import PropTypes from "prop-types";
import { Box, Head, Text, Circle } from "./style";
import Icon from "../Icon";

const IconBox = props => {
  const { primary, secondary, head, text, icon, onClick } = props;

  return (
    <Box primary={primary} secondary={secondary} onClick={onClick}>
      <Circle>
        <Icon name={icon} size={35} />
      </Circle>
      <Head>{head}</Head>
      <Text>{text}</Text>
    </Box>
  );
};

IconBox.defaultProps = {
  primary: "#44ce6f",
  secondary: "#cdf1d8",
  head: "Zero Configuration",
  text: "Lorem ipsum dolor sit amet elit, adipiscing.",
  icon: "Layout",
  onClick: () => {}
};

IconBox.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  head: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default IconBox;

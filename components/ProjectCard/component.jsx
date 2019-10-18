import React from "react";
import PropTypes from "prop-types";
import {
  SigleWorkWrapper,
  SingleWork,
  WorkContent,
  Heading,
  Text,
  Image
} from "./style";

const ProjectCard = props => {
  const { imgUrl, title, description, onClick } = props;
  return (
    <SigleWorkWrapper onClick={onClick}>
      <SingleWork className="single-works">
        <Image src={imgUrl} alt="remori project" />

        <WorkContent className="works-content">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
        </WorkContent>
      </SingleWork>
    </SigleWorkWrapper>
  );
};

ProjectCard.defaultProps = {
  imgUrl: "",
  title: "Title",
  description: "Description",
  onClick: null
};

ProjectCard.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default ProjectCard;

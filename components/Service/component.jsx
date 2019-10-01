import React from "react";
import { Fade, Bounce, Zoom } from "react-reveal";
import { StyledContainer, StyledImage } from "./style";

const Service = () => (
  <StyledContainer>
    <Fade left>
      <StyledImage
        src={require("./images/big-monitor.png")}
        alt="big-monitor"
        className="big-monitor"
      />
    </Fade>
    <Zoom>
      <StyledImage
        src={require("./images/creative.png")}
        alt="creative"
        className="creative"
      />
    </Zoom>
    <Fade bottom>
      <StyledImage
        src={require("./images/flower-top.png")}
        alt="flower-top"
        className="flower-top"
      />
    </Fade>
    <Bounce>
      <StyledImage
        src={require("./images/small-top.png")}
        alt="small-top"
        className="small-top"
      />
    </Bounce>
    <Zoom>
      <StyledImage
        src={require("./images/small-monitor.png")}
        alt="small-monitor"
        className="small-monitor"
      />
    </Zoom>
    <Fade top>
      <StyledImage
        src={require("./images/table.png")}
        alt="table"
        className="table"
      />
    </Fade>
    <Zoom>
      <StyledImage
        src={require("./images/developer.png")}
        alt="developer"
        className="developer"
      />
    </Zoom>
    <Fade bottom>
      <StyledImage
        src={require("./images/target.png")}
        alt="target"
        className="target"
      />
    </Fade>
    <StyledImage
      src={require("./images/cercle-shape.png")}
      className="bg-image"
      alt="shape"
    />
    <Zoom>
      <StyledImage
        src={require("./images/main-pic.png")}
        alt="main-pic"
        className="main-pic"
      />
    </Zoom>
  </StyledContainer>
);

export default Service;

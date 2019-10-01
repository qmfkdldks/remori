import React from "react";
import { Fade, Bounce, Zoom, Rotate, Roll } from "react-reveal";
import { ImageContainer, InnerImage } from "./style";

const Worker = () => (
  <ImageContainer>
    <Fade left>
      <InnerImage
        src={require("./images/carpet.png")}
        alt="carpet"
        className="carpet"
      />
    </Fade>
    <Zoom>
      <InnerImage src={require("./images/dot.png")} alt="dot" className="dot" />
    </Zoom>
    <Zoom>
      <InnerImage
        src={require("./images/table.png")}
        alt="table"
        className="table"
      />
    </Zoom>
    <Fade bottom>
      <InnerImage
        src={require("./images/keyboard.png")}
        alt="keyboard"
        className="keyboard"
      />
    </Fade>
    <Zoom>
      <InnerImage src={require("./images/pen.png")} alt="pen" className="pen" />
    </Zoom>
    <Bounce>
      <InnerImage
        src={require("./images/book.png")}
        alt="book"
        className="book"
      />
    </Bounce>
    <Fade top>
      <InnerImage src={require("./images/man.png")} alt="man" className="man" />
    </Fade>
    <Fade bottom>
      <InnerImage
        src={require("./images/flower-top-big.png")}
        alt="flower-top-big"
        className="flower-top-big"
      />
    </Fade>
    <Zoom>
      <InnerImage src={require("./images/bin.png")} alt="bin" className="bin" />
    </Zoom>
    <Fade top>
      <InnerImage
        src={require("./images/dekstop.png")}
        alt="dekstop"
        className="desktop"
      />
    </Fade>
    <Rotate>
      <InnerImage
        src={require("./images/flower-top.png")}
        alt="flower-top"
        className="flower-top"
      />
    </Rotate>
    <Fade right>
      <InnerImage
        src={require("./images/tea-cup.png")}
        alt="tea-cup"
        className="tea-cup"
      />
    </Fade>
    <Roll>
      <InnerImage
        src={require("./images/headphone.png")}
        alt="headphone"
        className="headphone"
      />
    </Roll>
    <Fade>
      <InnerImage
        src={require("./images/main-pic.png")}
        alt="main-pic"
        className="main-pic"
        display="none"
      />
    </Fade>
    <Fade bottom>
      <InnerImage
        src={require("./images/code.png")}
        className="code"
        alt="code"
      />
    </Fade>
  </ImageContainer>
);

export default Worker;

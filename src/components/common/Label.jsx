import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";

const LabelHeading = styled.h1`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: 65px;
  color: ${(props) => props.color || "black"};
  position: ${(props) => props.position};
  margin-top: 30%;
`;

const LabelPara = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.fontsize};
  line-height: 45px;
  letter-spacing: 0.02em;
  color: ${(props) => props.color || "black"};
`;

const Label = ({
  heading = false,

  contentHeading = false,
  color = "",
  fontsize = "",
  weight = "",
  position = "",
  className = "",
}) => {
  if (heading) {
    return (
      <div className="container">
        <LabelHeading
          color={color}
          fontsize={fontsize}
          weight={weight}
          position={position}
          className={className}
        ></LabelHeading>
      </div>
    );
  }

  if (contentHeading)
    return (
      <LabelPara color={color} fontsize={fontsize} weight={weight}></LabelPara>
    );
};

export default Label;

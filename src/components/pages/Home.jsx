import React from "react";
import styled from "@emotion/styled";
import { Card } from "../common";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const MainStyled = styled.div`
  width: 100%;
  row-gap: 2rem;
  column-gap: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 3rem;
`;

const BodyStyled = styled.body`
  background-color: grey;
`;

function Home() {
  return (
    <BodyStyled>
      <div className="container">
        <MainStyled>
          <Card></Card>
        </MainStyled>
      </div>
    </BodyStyled>
  );
}

export default Home;

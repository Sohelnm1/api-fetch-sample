import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import PageLink from "./PageLink";
import { Link } from "react-router-dom";

const CardStyled = styled.div`
  width: 18rem;
  padding: 1rem;
`;

const ImgStyled = styled.img`
  height: 250px;
`;

function Card() {
  const [fetchdata, setfetchdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setfetchdata(json));
  }, []);

  return (
    <>
      {fetchdata.map((currelemet) => {
        return (
          <div className="card">
            <CardStyled>
              <ImgStyled
                className="card-img-top"
                src={currelemet.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{currelemet.title}</h5>
                <p className="card-text">{currelemet.category}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">${currelemet.price}</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <Link className="card-body" to={"/products/" + currelemet.id}>
                ProductPage
              </Link>
            </CardStyled>
          </div>
        );
      })}
    </>
  );
}

export default Card;

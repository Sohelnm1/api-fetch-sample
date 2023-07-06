import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PageLink } from "../common";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const CardStyled = styled.div`
  width: 70%;
  padding: 1rem;
  align-self: center;
`;

const ImgStyled = styled.img`
  width: 40%;
`;

function ProductPage() {
  let { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, []);
  console.log(details);

  {
    return (
      <div className="container">
        <div className="card text-center">
          <CardStyled className="d-flex justify-content-center flex-wrap">
            <div className="card-body">
              <h5 className="card-title">{details.title}</h5>
              <p className="card-text">{details.category}</p>
            </div>
            <div className="d-flex justify-content-center">
              <ImgStyled
                className="card-img-top"
                src={details.image}
                alt="Card image cap"
              />
            </div>
            <div className="card-body">
              <p className="card-text">{details.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price : ${details.price}</li>
              {/* <bold>Rating</bold> */}
              {/* <li className="list-group-item">{details.rating.rate}</li> */}
              {/* <li className="list-group-item">{details.rating.count}</li> */}
            </ul>
          </CardStyled>
        </div>
      </div>
    );
  }
}

export default ProductPage;

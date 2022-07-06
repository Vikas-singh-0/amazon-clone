import React, { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import styled from "styled-components";
import axios from "axios";
import "./Card.css";
export const Card = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fun();
  }, []);
  const fun = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    setList(data);
    let list1 = list.filter((e, i) => i < 4);
    let list2 = list.filter((e, i) => i >= 4);
  };

  return (
    <>
      <div className="card">
        {list
          .filter((e, i) => i < 4)
          .map((element) => {
            return (
              <Item key={element.id}>
                <small
                  style={{
                    position: "absolute",
                    fontStyle: "italic",
                    fontSize: ".7em",
                    top: ".5em",
                    right: "1rem",
                  }}
                >
                  {element.category}
                </small>
                <img src={element.image} alt="test" />
                <div className="item-desc">
                  <h6>{element.title}</h6>
                  <p>{element.description}</p>
                  <h5
                    style={{
                      fontSize: "1rem",
                      position: "absolute",
                      bottom: "3rem",
                    }}
                  >{`$${element.price}`}</h5>
                  <AddToCartButton>Add To Basket</AddToCartButton>
                </div>
              </Item>
            );
          })}
      </div>
  <img src="https://amazon-clone-ravi-chauhan.netlify.app/static/media/banner.650b3a7053bf38420159.jpg"/>
      <div className="card">
        {list
          .filter((e, i) => i > 3)
          .map((element) => {
            return (
              <Item key={element.id}>
                <small
                  style={{
                    position: "absolute",
                    fontStyle: "italic",
                    fontSize: ".7em",
                    top: ".5em",
                    right: "1rem",
                  }}
                >
                  {element.category}
                </small>
                <img src={element.image} alt="test" />
                <div className="item-desc">
                  <h6>{element.title}</h6>
                  <p>{element.description}</p>
                  <h5
                    style={{
                      fontSize: "1rem",
                      position: "absolute",
                      bottom: "3rem",
                    }}
                  >{`$${element.price}`}</h5>
                  <AddToCartButton>Add To Basket</AddToCartButton>
                </div>
              </Item>
            );
          })}
      </div>
    </>
  );
};

const Item = styled.div`
  width: 22.4%;
  position: relative;
  margin: 15px 10px;
  height: 30rem;
  background-color: white;
  box-shadow: 1px 4px 11px 1px #0000005e;
  border: 2px solid #00000038;
  border-radius: 10px;
`;

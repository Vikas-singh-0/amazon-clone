import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../asssets/logow.png";
import { MdShoppingCart } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
export const Header = () => {
  const [show, setShow] = useState(false);
  const showNav = () => {
    setShow(true);
  };
  const hideNav = () => {
    setShow(false);
  };
  const NavigationBar = () => (
    <>
      <Navigation>
        {/* image */}
        <img
          onMouseEnter={showNav}
          onMouseLeave={hideNav}
          src={Logo}
          alt="logo"
        />
        <Search>
          <SearchIcon>
            <BiSearchAlt2 />
          </SearchIcon>
        </Search>
        <Options>
          <div>
            <a href="#">
              <section>Sign IN</section>
              <small>Lists & Account</small>
            </a>
          </div>
          <div>
            {" "}
            <a href="#">
              <section>Returns</section>
              <small>& Orders</small>
            </a>
          </div>
          <div>
            {" "}
            <a href="#">
              <Section>
                <MdShoppingCart fontSize="27px" />
              </Section>
              <small style={{ verticalAlign: "super" }}>Basket</small>
            </a>
          </div>
        </Options>
      </Navigation>
      <NavLinks>
        <a href="#">
          <GiHamburgerMenu />
        </a>
        <a href="#">Amazon Prime</a>
        <a href="#">Prime Video</a>

        <a href="#"> Amazon Business</a>

        <a href="#"> Today's Deals</a>

        <a href="#"> Electronics</a>

        <a href="#"> Food & Grocery</a>

        <a href="#"> Prime</a>

        <a href="#"> Buy Again</a>

        <a href="#"> Shopper Toolkit</a>

        <a href="#">Health & Personal Care</a>
      </NavLinks>
    </>
  );

  // const BoxBar = () => (
  //   <BoxNav>
  //     <img
  //       onMouseEnter={showNav}
  //       onMouseLeave={hideNav}
  //       src={Logo}
  //       alt="logo"
  //     />
  //   </BoxNav>
  // );

  return NavigationBar();
};

const NavLinks = styled.div`
  display: flex;
  color: white;
  align-items:center;
  background: #000000c2;
  a {
    color: white;
    text-decoration: none;

    padding: 10px 10px 10px 10px;
  }
`;
const Section = styled.section`
  &:after {
    content: "0";
    width: 18px;
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    position: relative;
    top: -20px;
    left: -5px;
    background: red;
  }
  padding: 0.5em;
  display: inline-block;
`;

const Options = styled.div`
  display: flex;
  width: 33%;
  flex-direction: row;
  div {
    width: 32%;
    paddding: 2px;
    align-items: center;
    display: flex;
    color: white;
  }
  a {
    color: white;
  }
  section {
    font-size: 10px;
    margin: 0px;
  }
  small {
    font-weight: 500;
  }
`;
const SearchIcon = styled.div`
  width: 2.4rem;
  background: orange;
  display: flex;
  justify-content: center;
  top: -4px;
  align-items: center;
  position: relative;
  height: 129%;
  right: -100%;
  transform: translateX(-90%);
  border-radius: 0px 6px 6px 0;
  svg {
    font-size: 1.3rem;
  }
`;
const Search = styled.div`
  border: 2px solid white;
  width: 55%;
  background: white;
  padding: 2px;
  margin: 7px;
  border-radius: 0.3rem;
`;

const Navigation = styled.nav`
  width: 100%;
  transition: all 400ms linear;
  max-height: 50px;
  display: flex;

  box-sizing: border-box;
  background: black;
  img {
    color: white;
    width: 110px;
    padding: 3px;
    height: 43px;
  }
`;

const BoxNav = styled.nav`
  max-height: 50px;
  box-sizing: border-box;
  img {
    color: white;
    width: 110px;
    padding: 3px;
    height: 43px;
  }
`;

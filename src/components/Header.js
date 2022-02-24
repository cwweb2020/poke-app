import React from "react";
import { Link } from "react-router-dom";
import { HeaderStyled } from "../styled/HeaderStyled";

const Header = () => {
  return (
    <>
      <HeaderStyled className="header-total">
        <div className="header-wrapper">
          <div className="link-container">
            <Link to="/">
              <img src="../img/menu.png" alt="" />
            </Link>
          </div>
          <Link to="/">
          <h2 className="header-heading">pokemon app</h2>

          </Link>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const NavBar = () => {
  return (
    <header
      css={css`
        background-color: ${colors.dark};
        padding: 15px;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        css={css`
          display: inline-block;
          font-size: 60px;
          animation: 4s ${spin} linear infinite;

          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐕
      </span>
    </header>
  );
};

export default NavBar;

import styled, { css } from "styled-components";

export const Button = styled.button`
  min-width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  background: #365df0;
  border-radius: 5px;
  color: #fff;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  margin: auto 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  ${props =>
		props.extraLarge &&
    css`
      padding: 5px 25px;
    `}

  ${props =>
		props.styleBtn === "danger" &&
    css`
      background: #f95e5a;
    `}

  ${props =>
		props.styleBtn === "success" &&
    css`
      background: #0dcb7d;
    `}

  img {
    width: 12px;
    height: 12px;
    margin-left: 3px;
    margin-right: 3px;
  }

  span {
    margin-left: 3px;
    margin-right: 3px;
  }

  &:hover {
    background: #2f55cc;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        background: #cc4c4c;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        background: #10b26c;
      `}
  }

  &:active {
    background: #244aa8;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        background: #a53f3f;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        background: #0e995d;
      `}
  }

  &:disabled {
    background: #b9c6fa;
    color: #e1e7fd;
    cursor: default;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        background: #fcaeac;
        color: #feefee;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        background: #88edc4;
        color: #e7fbf3;
      `}

    img {
      opacity: 0.7;
    }
  }
`;

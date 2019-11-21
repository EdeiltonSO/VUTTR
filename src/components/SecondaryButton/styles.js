import styled, { css } from "styled-components";

export const Button = styled.button`
  min-width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  background: #e1e7fd;
  border-radius: 5px;
  color: #365df0;
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
      color: #f95e5a;
      background: #feefee;
    `}

  ${props =>
		props.styleBtn === "success" &&
    css`
      color: #12db89;
      background: #e7fbf3;
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
    background: #cad6fc;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        background: #fcd7d6;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        background: #cff9e6;
      `}
  }

  &:active {
    background: #b9c6fa;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        background: #fcc6c5;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        background: #b7f7d8;
      `}
  }

  &:disabled {
    background: #e1e7fd;
    color: #b9c6fa;
    cursor: default;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        background: #feefee;
        color: #fcaeac;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        background: #e7fbf3;
        color: #88edc4;
      `}

    img {
      opacity: 0.7;
    }
  }
`;

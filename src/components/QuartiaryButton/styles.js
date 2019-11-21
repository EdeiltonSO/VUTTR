import styled, { css } from "styled-components";

export const Button = styled.button`
  min-width: fit-content;
  min-height: fit-content;
  background: transparent;
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
    `}

  ${props =>
		props.styleBtn === "success" &&
    css`
      color: #12db89;
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

  &:disabled {
    color: #9aaef7;
    cursor: default;

    ${props =>
		props.styleBtn === "danger" &&
      css`
        color: #fcaeac;
      `}

    ${props =>
		props.styleBtn === "success" &&
      css`
        color: #88edc4;
      `}

    img {
      opacity: 0.7;
    }
  }
`;

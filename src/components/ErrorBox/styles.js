import styled, { css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 50px;
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
	margin: 0 auto;
	padding: 10px 20px;
	font-weight: 600; /* semi bold */
	font-size: 16px;
	color: #fff;
	background: #B1ADB9;

  ${props =>
		props.type === "success" &&
    css`
      background: #12db89;
    `}

  ${props =>
		props.type === "error" &&
    css`
      background: #f95e5a;
    `}

  ${props =>
		props.type === "warning" &&
    css`
      background: #ffbb43;
    `}

	button {
		border: 0;
		background: transparent;
		color: #fff;
		font-size: 30px;
		margin-left: 10px;
	}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

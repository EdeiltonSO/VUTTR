import styled from "styled-components";

export const Viewport = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
`;

export const Wrapper = styled.div`
	width: 500px;
	height: fit-content;
	margin: auto;
	background: rgb(255, 255, 255);
	padding: 20px;
	border-radius: 5px;
	border: 1px solid #ebeaed;
	justify-content: center;
`;

export const Header = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	align-items: center;

	img {
		width: 20px;
		height: 20px;
		margin-right: 20px;
	}
`;

export const Content = styled.div`
	padding: 0px 15px;
`;

export const Fields = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
	height: fit-content;

	h3 {
		margin: 15px 0 3px 0;
	}
`;

export const Actions = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
	height: fit-content;
	margin-top: 25px;

	button {
		margin-left: 10px;
	}
`;

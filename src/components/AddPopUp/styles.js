import styled, { css } from "styled-components";

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

export const Fields = styled.form`
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

export const Input = styled.input`
	padding: 10px;
	border-radius: 5px;
	background: #f5f4f6;
	border: none;
	border: 1px solid #ebeaed;
	font-family: inherit;

	${props =>
		props.isEmpty === true &&
		css`
			border: 1.5px solid #f95e5a;
		`}

	&:hover {
		background: #ebeaed;
		border: 1px solid #dedce1;

		${props =>
		props.isEmpty === true &&
			css`
				border: 1.5px solid #f95e5a;
			`}
	}

	&:focus {
		background: #ebeaed;
		border: 1px solid #dedce1;
	}
`;

export const Textarea = styled.textarea`
	padding: 10px;
	border-radius: 5px;
	background: #f5f4f6;
	border: none;
	border: 1px solid #ebeaed;
	min-width: 100%;
	max-width: 100%;
	min-height: fit-content;
	font-family: inherit;

	${props =>
		props.isEmpty === true &&
		css`
			border: 1.5px solid #f95e5a;
		`}

	&:hover {
		background: #ebeaed;
		border: 1px solid #dedce1;

		${props =>
		props.isEmpty === true &&
			css`
				border: 1.5px solid #f95e5a;
			`}
	}

	&:focus {
		background: #ebeaed;
		border: 1px solid #dedce1;
	}
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 200px;
  height: 30px;
  border: 1px solid #ebeaed;
  background: #f5f4f6;
  border-radius: 5px;
  display: flex;
  margin: auto 0;

  img {
    width: 15px;
    height: 100%;
    margin: auto 7px;
  }

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    background: none;
  }

  input::-webkit-input-placeholder {
    color: #b1adb9;
  }

  input::-moz-placeholder {
    color: #b1adb9;
  }

  input:-ms-input-placeholder {
    color: #b1adb9;
  }
`;

import styled from "styled-components";

export const Container = styled.label`
  width: fit-content;
  height: fit-content;
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: auto 10px;

  !input:disabled {
    cursor: pointer;
  }

  /* Ocultando a checkbox padrão */
  input {
    display: none;
  }

  /* Criando checkbox customizada */
  span {
    margin-top: 2px;
    min-width: 18px;
    height: 18px;
    background-color: #f5f4f6;
    border: 1px solid #dedce1;
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }

  /* Alterando span no :hover do Container */
  &:hover span {
    background-color: #ebeaed;
  }

  /* Alterando span ao marcar checkbox */
  input:checked ~ span {
    background-color: #365df0;
    border: 1px solid #365df0;
  }

  /* Criando indicador da checkbox */
  span:after {
    content: "";

    margin-left: 4.5px;
    margin-top: 1px;
    width: 5px;
    height: 10px;
    border: solid #fff;
    border-width: 0 1.5px 1.5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);

    display: none;
  }

  /* Exibindo indicador quando checkbox está marcada */
  input:checked ~ span:after {
    display: block;
  }

  p {
    margin: 0 0 0 5px;
  }

  input:disabled {
    ~ span {
      background: #dedce1;
      border: 1px solid #dedce1;
      cursor: default;
    }
    ~ p {
      color: #c7c4cd;
      cursor: default;
    }
  }
`;

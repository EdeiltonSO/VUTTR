import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: fit-content;
  width: inherit;
  min-width: 350px;
  background: #fff;
  margin-bottom: 15px;
  border: 1px solid #ebeaed;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.div`
  max-width: inherit;
  min-height: fit-content;
  display: flex;
  justify-content: space-between;

  button {
    position: relative;
    margin-top: 0%;
  }
`;

export const Title = styled.a`
  min-height: fit-content;
  overflow-wrap: break-word;
  font-size: 24px;

  &:hover {
    color: #170c3a;
  }
`;

export const Description = styled.p`
  margin-top: 5px;
`;

export const Tags = styled.div`
  margin-top: 15px;
  max-width: inherit;
  min-height: fit-content;
  overflow-wrap: break-word;
`;

export const Tag = styled.button`
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
  border: none;
  margin: 0px 7px 4px 0px;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

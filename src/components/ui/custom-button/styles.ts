import styled from "styled-components";

export const ButtonContainer = styled.button<{
  danger?: boolean;
}>`
  margin: 8px;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  background-color: ${(props) =>
    props.danger === true ? "#ff6647" : "#63d882"};

  text-transform: uppercase;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  :active {
    box-shadow: 3px 2px 25px 1px rgba(0, 0, 0, 0.25);
  }

  :hover {
    opacity: 0.85;
  }
`;

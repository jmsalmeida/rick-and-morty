import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  min-width: 33%;
  margin: 20px 8px;
  flex-direction: column;

  label {
    font-weight: 400;
    font-size: 0.8em;
    margin-bottom: 10px;
    text-transform: capitalize;
  }

  select {
    border: 1px solid rgb(156 163 175);
    border-radius: 10px;
    padding: 10px;
    background-color: #fff;
  }
`;

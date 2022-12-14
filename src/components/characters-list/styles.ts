import styled from "styled-components";

export const CharactersListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CharactersListTitle = styled.h2`
  color: #fff;
  font-size: 3em;
  font-weight: 500;
  line-height: 47px;
`;

export const CardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    display: flex;
  }
`;

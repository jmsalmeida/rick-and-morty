import styled from "styled-components";

export const CardBody = styled.div`
  background: #ffffff;
  margin: 1em;
  padding: 1em;
  box-shadow: 5px 7px 50px 9px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 300px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.theme.backgroundUrl});
`;

export const CardDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CardCharacterDescription = styled.div`
  p {
    font-size: 2em;
    font-weight: 500;
    line-height: 35px;
    margin: 20px 0 5px 0;
  }

  span {
    font-size: 1em;
    font-weight: 100;
    line-height: 21px;
  }

  text-transform: capitalize;
`;

export const CardDivider = styled.div`
  width: 100%;
  margin: 20px 0;
  border: 1px solid rgba(0, 0, 0, 0.27);
`;

export const CardAdditionalInfoWrapper = styled.div`
  display: flex;
`;

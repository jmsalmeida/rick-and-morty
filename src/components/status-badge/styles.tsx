import styled from "styled-components";

export const StatusBadgeWrapper = styled.div<{ statusColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 16px;
    height: 16px;
    margin: 0 8px;
    border-radius: 50%;
    background: ${(props) => props.statusColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  p {
    margin: 0;
    padding: 0
    font-size: 1em;
    font-weight: 800;
    line-height: 21px;
    text-transform: capitalize;
    color: ${(props) => props.statusColor};
  }
`;

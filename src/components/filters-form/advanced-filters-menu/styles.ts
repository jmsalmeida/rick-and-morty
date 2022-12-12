import styled from "styled-components";

const filtersMenuZIndex = 999;
const overlayZIndex = filtersMenuZIndex - 1;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${overlayZIndex};
`;

export const AdvancedFiltersMenuContainer = styled.div`
  width: 40vw;
  height: 100vh;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${filtersMenuZIndex};
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const FiltersTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 2em;
    font-weight: 500;
    line-height: 35px;
  }

  img {
    width: 30px;
    cursor: pointer;
  }
`;

export const FiltersForm = styled.div``;

export const FilterActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

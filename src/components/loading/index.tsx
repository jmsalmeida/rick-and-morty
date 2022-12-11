import * as S from "./styles";
import rickAndMortyPortalImage from "../../assets/portal-rick-morty.png";

export function Loading(): JSX.Element {
  return (
    <S.SpinnerWrapper>
      <img src={rickAndMortyPortalImage} alt="" />
    </S.SpinnerWrapper>
  );
}

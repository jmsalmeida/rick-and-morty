import rickAndMortyLogo from "../../assets/rm-logo.png";
import * as S from "./styles";

export function HeaderLogo(): JSX.Element {
  return (
    <S.HeaderLogoContainer>
      <img src={rickAndMortyLogo} />
    </S.HeaderLogoContainer>
  );
}

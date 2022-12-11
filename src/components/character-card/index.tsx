import { CharacterType } from "../../@types/sharedTypes";
import { useCallback } from "react";
import * as S from "./styles";
import { DisplayTag } from "../display-tag";
import { StatusBadge } from "../status-badge";

export function CharacterCard({
  image,
  name,
  type,
  status,
  gender,
  species,
}: CharacterType): JSX.Element {
  const cardThemeProps = {
    backgroundUrl: image,
  };

  const renderCharacterType = useCallback(() => {
    return type === "" ? "unspecified type" : type;
  }, [type]);

  return (
    <S.CardBody>
      <S.CardImage theme={cardThemeProps} />

      <S.CardDescriptionWrapper>
        <S.CardCharacterDescription>
          <p>{name}</p>
          <span>{renderCharacterType()}</span>
        </S.CardCharacterDescription>

        <StatusBadge status={status} />
      </S.CardDescriptionWrapper>

      <S.CardDivider />

      <S.CardAdditionalInfoWrapper>
        <DisplayTag tagContent={gender} />
        <DisplayTag tagContent={species} />
      </S.CardAdditionalInfoWrapper>
    </S.CardBody>
  );
}

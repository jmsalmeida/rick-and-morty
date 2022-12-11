import { useCallback } from "react";
import { CharacterType } from "../../@types/sharedTypes";

import * as S from "./styles";
import { useAsyncStore } from "../../store";
import { CharacterCard } from "../character-card";

export function CharactersList(): JSX.Element {
  const loading = useAsyncStore((state) => state.loading);
  const charactersResult = useAsyncStore(
    useCallback((state) => state.charactersResult, []),
  );

  return (
    <S.CharactersListWrapper>
      {loading ? (
        <span>carregando</span>
      ) : (
        <>
          <h2>Characters List</h2>

          <S.CardsContent>
            {charactersResult.map((character: CharacterType) => (
              <div key={character.id}>
                <CharacterCard {...character} />
              </div>
            ))}
          </S.CardsContent>
        </>
      )}
    </S.CharactersListWrapper>
  );
}

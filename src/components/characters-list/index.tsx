import { useCallback } from "react";
import { CharacterType } from "../../@types/sharedTypes";

import * as S from "./styles";
import { Loading } from "../loading";
import { useAsyncStore } from "../../store";
import { CharacterCard } from "../character-card";
import { PaginationNavigation } from "../pagination-navigation";

export function CharactersList(): JSX.Element {
  const loading = useAsyncStore((state) => state.loading);
  const charactersResult = useAsyncStore(
    useCallback((state) => state.charactersResult, []),
  );

  return (
    <S.CharactersListWrapper>
      <h2>Characters List</h2>

      {loading ? (
        <Loading />
      ) : (
        <S.CardsContent>
          {charactersResult.map((character: CharacterType) => (
            <div key={character.id}>
              <CharacterCard {...character} />
            </div>
          ))}
        </S.CardsContent>
      )}

      <PaginationNavigation />
    </S.CharactersListWrapper>
  );
}

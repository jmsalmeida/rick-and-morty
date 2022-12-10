import { useCallback } from "react";

import { useAsyncStore } from "../../store";

export function CharactersList(): JSX.Element {
  const loading = useAsyncStore((state) => state.loading);
  const charactersResult = useAsyncStore(
    useCallback((state) => state.charactersResult, []),
  );

  return (
    <div>
      {loading ? (
        <span>carregando</span>
      ) : (
        <ul>
          {charactersResult.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

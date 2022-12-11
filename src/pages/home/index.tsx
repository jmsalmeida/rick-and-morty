import { useEffect } from "react";

import { useAsyncStore } from "../../store";
import { CharactersList } from "../../components/characters-list";

export function Home(): JSX.Element {
  const fetchCharacters = useAsyncStore((state) => state.fetchCharacters);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div>
      <CharactersList />
    </div>
  );
}

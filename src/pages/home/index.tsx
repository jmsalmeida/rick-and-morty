import { useEffect } from "react";

import { useAsyncStore } from "../../store";
import { CharactersList } from "../../components/characters-list";
import { FiltersForm } from "../../components/filters-form";
import { HeaderLogo } from "../../components/header-logo";
import { NotFound } from "../../components/not-found";

export function Home(): JSX.Element {
  const page = useAsyncStore((state) => state.page);
  const notFound = useAsyncStore((state) => state.notFound);
  const filters = useAsyncStore((state) => state.filters);
  const fetchCharacters = useAsyncStore((state) => state.fetchCharacters);

  useEffect(() => {
    const callFetchCharacter = async (): Promise<void> =>
      await fetchCharacters();

    void callFetchCharacter();
  }, [page, filters.name]);

  return (
    <>
      <HeaderLogo />
      <FiltersForm />
      {notFound ? <NotFound /> : <CharactersList />}
    </>
  );
}

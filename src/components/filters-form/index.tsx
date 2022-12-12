import * as S from "./styles";
import filterIcon from "../../assets/icons/filter-icon.svg";
import { AdvancedFiltersMenu } from "./advanced-filters-menu";
import { useEffect, useState } from "react";
import { CustomButton } from "../ui/custom-button";
import { useAsyncStore } from "../../store";
import { CustomInput } from "../ui/custom-input";

export function FiltersForm(): JSX.Element {
  const [appliedFilters, setAppliedFilters] = useState<boolean>(false);
  const [showAdvancedFitersMenu, setShowAdvancedFiltersMenu] =
    useState<boolean>(false);

  const filters = useAsyncStore((state) => state.filters);
  const clearFilters = useAsyncStore((state) => state.clearFilters);
  const setFilterName = useAsyncStore((state) => state.setFilterName);
  const fetchCharacters = useAsyncStore((state) => state.fetchCharacters);

  const handleClearFilters = (): void => {
    clearFilters();
    void fetchCharacters();
  };

  useEffect(() => {
    if (
      Boolean(filters.name) ||
      Boolean(filters.status) ||
      Boolean(filters.species) ||
      Boolean(filters.gender)
    ) {
      setAppliedFilters(true);
    } else {
      setAppliedFilters(false);
    }
  }, [filters]);

  return (
    <S.FiltersFormContainer>
      <S.SearchInputContainer>
        <CustomInput
          inputValue={filters.name}
          placeholder="Find by the character name"
          // TODO: Add debounce to execute this filter
          onChange={(nextValue: string) => setFilterName("name", nextValue)}
        />

        <S.ShowAdvancedFiltersButton
          onClick={() => setShowAdvancedFiltersMenu(true)}
        >
          <img src={filterIcon} />
        </S.ShowAdvancedFiltersButton>

        {Boolean(appliedFilters) && (
          <CustomButton
            danger
            label="clear filters"
            onClickButton={handleClearFilters}
          />
        )}
      </S.SearchInputContainer>

      {showAdvancedFitersMenu && (
        <AdvancedFiltersMenu
          onClose={() => setShowAdvancedFiltersMenu(false)}
        />
      )}
    </S.FiltersFormContainer>
  );
}

import * as S from "./styles";
import closeIcon from "../../../assets/icons/close-icon.svg";
import { GENDERS, STATUS } from "../../../settings/constants";
import { useAsyncStore } from "../../../store";
import { CustomButton } from "../../ui/custom-button";
import { CustomInput } from "../../ui/custom-input";
import { CustomSelect } from "../../ui/custom-select";

interface AdvancedFiltersMenuProps {
  onClose: () => void;
}

export function AdvancedFiltersMenu({
  onClose,
}: AdvancedFiltersMenuProps): JSX.Element {
  const filters = useAsyncStore((state) => state.filters);
  const setFilterName = useAsyncStore((state) => state.setFilterName);
  const fetchCharacters = useAsyncStore((state) => state.fetchCharacters);

  const applyFilters = (): void => {
    onClose();
    void fetchCharacters();
  };

  return (
    <>
      <S.Overlay />

      <S.AdvancedFiltersMenuContainer>
        <S.FiltersTitle>
          <h3>Advanced Filters</h3>
          <img src={closeIcon} onClick={() => onClose()} />
        </S.FiltersTitle>

        <S.FiltersForm>
          <CustomInput
            label="Character Species"
            inputValue={filters.species}
            placeholder="Find by character species"
            onChange={(nextValue: string) =>
              setFilterName("species", nextValue)
            }
          />

          <CustomSelect
            label="status"
            options={STATUS}
            selectedOption={filters.status}
            onChange={(selectedOption) =>
              setFilterName("status", selectedOption)
            }
          />

          <CustomSelect
            label="gender"
            options={GENDERS}
            selectedOption={filters.gender}
            onChange={(selectedOption) =>
              setFilterName("gender", selectedOption)
            }
          />

          <S.FilterActionContainer>
            <CustomButton label="apply filters" onClickButton={applyFilters} />
          </S.FilterActionContainer>
        </S.FiltersForm>
      </S.AdvancedFiltersMenuContainer>
    </>
  );
}

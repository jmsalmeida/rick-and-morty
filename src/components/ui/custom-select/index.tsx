import { isEmpty } from "lodash";

import * as S from "./styles";

interface CustomSelectProps {
  label: string;
  options: string[];
  selectedOption: string;
  onChange?: (option: string) => void;
}

export function CustomSelect({
  label,
  options,
  onChange,
  selectedOption,
}: CustomSelectProps): JSX.Element {
  const handleChange = (event: any): void => {
    const option = event.target.value;

    if (onChange != null) onChange(option);
  };

  return (
    <S.SelectContainer>
      <label>{label}</label>

      <select value={selectedOption} onChange={handleChange}>
        {!isEmpty(options) &&
          options.map((option: string, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </S.SelectContainer>
  );
}

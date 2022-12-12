import * as S from "./styles";

interface CustomInputProps {
  label?: string;
  inputValue?: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

export function CustomInput({
  label,
  onChange,
  inputValue,
  placeholder,
}: CustomInputProps): JSX.Element {
  const handleChange = (event: any): void => {
    const targetValue = event.target.value;

    if (onChange != null) onChange(targetValue);
  };

  return (
    <S.InputContainer>
      {label != null && <label data-testid="label-content">{label}</label>}

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </S.InputContainer>
  );
}

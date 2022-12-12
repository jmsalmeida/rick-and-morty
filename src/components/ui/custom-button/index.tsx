import * as S from "./styles";

interface CustomButtonProps {
  label: string;
  danger?: boolean;
  onClickButton: () => void;
}

export function CustomButton({
  label,
  danger,
  onClickButton,
}: CustomButtonProps): JSX.Element {
  return (
    <S.ButtonContainer danger={danger} onClick={() => onClickButton()}>
      {label}
    </S.ButtonContainer>
  );
}

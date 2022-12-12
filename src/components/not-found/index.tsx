import { CustomButton } from "../ui/custom-button";
import * as S from "./styles";
import notFoundImage from "../../assets/not-found.png";
import { useAsyncStore } from "../../store";

export function NotFound(): JSX.Element {
  const clearFilters = useAsyncStore((state) => state.clearFilters);

  return (
    <S.NotFoundContainer>
      <img src={notFoundImage} />

      <CustomButton label="clear search" onClickButton={clearFilters} />
    </S.NotFoundContainer>
  );
}

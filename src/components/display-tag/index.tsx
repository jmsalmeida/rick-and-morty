import { DisplayTagWrapper } from "./styles";

interface DisplayTagProps {
  tagContent: string;
}

export function DisplayTag({ tagContent }: DisplayTagProps): JSX.Element {
  return (
    <DisplayTagWrapper>
      <span>{tagContent}</span>
    </DisplayTagWrapper>
  );
}

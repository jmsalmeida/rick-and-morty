import { useCallback } from "react";

import * as S from "./styles";

interface StatusBadgeProps {
  status: string;
}

export function StatusBadge({ status }: StatusBadgeProps): JSX.Element {
  const statusColor = useCallback((): string => {
    let color = "";

    switch (status.toLowerCase()) {
      case "alive":
        color = "#63D882";
        break;
      case "dead":
        color = "#FF6647";
        break;
      case "unknown":
        color = "#cccccc";
        break;
      default:
        break;
    }

    return color;
  }, [status]);

  return (
    <S.StatusBadgeWrapper statusColor={statusColor()}>
      <span data-testid="status-pin"></span>
      <p data-testid="status-content">{status}</p>
    </S.StatusBadgeWrapper>
  );
}

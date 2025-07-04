import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

export const GameScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      paddingX="8px"
      border-radius="14px"
      fontSize="14px"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

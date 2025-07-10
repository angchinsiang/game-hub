import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameContainer = ({ children }: Props) => {
  return (
    <Box w="100%" borderRadius={15} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameContainer;

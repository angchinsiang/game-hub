import { Heading } from "@chakra-ui/react";
import { Query } from "../App";

interface Props {
  gameQuery: Query;
}

const GameHeading = ({ gameQuery }: Props) => {
  const gameHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {gameHeading}
    </Heading>
  );
};

export default GameHeading;

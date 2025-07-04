import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding="10px">
        {games.map((g) => (
          <GameCard game={g} key={g.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../Hooks/useGenre";
import { Platform } from "../Hooks/usePlatforms";
import { Query } from "../App";
import { ClassNames } from "@emotion/react";

interface Props {
  query: Query;
}

const GameGrid = ({ query }: Props) => {
  const { data, error, isLoading } = useGame(query);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameContainer key={skeleton}>
            <GameCardSkeleton height={250} />
          </GameContainer>
        ))}

      {data.map((g) => (
        <GameContainer key={g.id}>
          <GameCard game={g} />
        </GameContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;

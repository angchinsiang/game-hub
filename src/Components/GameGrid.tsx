import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../Hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameContainer from "./GameContainer";
import { Genre } from "../Hooks/useGenre";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGame(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameContainer key={skeleton}>
              <GameCardSkeleton height={200} />
            </GameContainer>
          ))}

        {data.map((g) => (
          <GameContainer key={g.id}>
            <GameCard game={g} />
          </GameContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

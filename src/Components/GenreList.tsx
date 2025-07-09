import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../Hooks/useGenre";
import ImageCrop from "../Services/ImageCrop";
import GameContainer from "./GameContainer";
import GameCardSkeleton from "./GameCardSkeleton";

export const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  if (isLoading)
    return (
      <GameContainer>
        <GameCardSkeleton height={500} />
      </GameContainer>
    );

  if (error) return null;
  return (
    <List>
      {data.map((data) => (
        <ListItem key={data.id} paddingY="7px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={ImageCrop(data.image_background)}
            />
            <Text fontSize="lg">{data.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

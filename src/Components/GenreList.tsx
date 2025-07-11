import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../Hooks/useGenre";
import ImageCrop from "../Services/ImageCrop";
import GameContainer from "./GameContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  setSelectedGenre: (selectedGenre: Genre) => void;
}

export const GenreList = ({ selectedGenre, setSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenre();
  if (isLoading)
    return (
      <GameContainer>
        <GameCardSkeleton height={790} />
      </GameContainer>
    );

  if (error) return null;
  return (
    <>
      <Heading fontSize="3xl" marginY={4} marginX={8}>
        Genres
      </Heading>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="7px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="40px"
                borderRadius={8}
                src={ImageCrop(data.image_background)}
              />
              <Button
                fontWeight={selectedGenre?.id === data.id ? "bold" : "normal"}
                color={selectedGenre?.id === data.id ? "yellow" : "white"}
                fontSize="lg"
                textAlign="left"
                whiteSpace="normal"
                variant="link"
                onClick={() => setSelectedGenre(data)}
              >
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

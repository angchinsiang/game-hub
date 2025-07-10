import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
  VStack,
} from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import { GenreList } from "./Components/GenreList";
import { Genre } from "./Hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
import "bootstrap/dist/css/bootstrap.css";
import { Platform } from "./Hooks/usePlatforms";

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [query, setQuery] = useState<Query>({} as Query);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "230px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={2}>
          <GenreList
            selectedGenre={query.genre}
            setSelectedGenre={(genre: Genre) => {
              setQuery({ ...query, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <div className="mb-2">
          <PlatformSelector
            selectedPlatform={query.platform}
            onSelectPlatform={(platform) => {
              setQuery({ ...query, platform });
            }}
          />
        </div>
        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
};

export default App;

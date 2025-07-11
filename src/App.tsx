import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  GridItem,
  HStack,
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
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  searchText: string | undefined;
}

const App = () => {
  const [query, setQuery] = useState<Query>({} as Query);

  return (
    <Grid 
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => {
            setQuery({ ...query, searchText });
          }}
        />
      </GridItem>
      <Show above="lg" >
        <GridItem area="aside" margin={3} >
          <GenreList
            selectedGenre={query.genre}
            setSelectedGenre={(genre: Genre) => {
              setQuery({ ...query, genre });
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <div className="mb-2 ">
          <GameHeading gameQuery={query} />
          <Flex marginBottom={4}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={query.platform}
                onSelectPlatform={(platform) => {
                  setQuery({ ...query, platform });
                }}
              />
            </Box>
            <SortSelector
              selectedOrder={query.order}
              onSetOrders={(order) => {
                setQuery({ ...query, order });
              }}
            />
          </Flex>
        </div>
        <GameGrid query={query} />
      </GridItem>
    </Grid>
  );
};

export default App;

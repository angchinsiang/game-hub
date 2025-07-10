import { useEffect, useState } from "react";
import apiClient from "../Services/apiClient";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Query } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (query: Query) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: query.genre?.id,
        platforms: query.platform?.id,
        ordering: query.order,
      },
    },
    [query]
  );

export default useGame;

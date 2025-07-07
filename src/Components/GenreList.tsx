import React from "react";
import useGenre from "../Hooks/useGenre";

export const GenreList = () => {
  const { genres, error, isLoading } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

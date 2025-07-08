import useGenre from "../Hooks/useGenre";

export const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

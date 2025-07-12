import platformOpt from "../data/platformOpt";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platformOpt,
  error: null,
  isLoading: false,
});

export default usePlatforms;

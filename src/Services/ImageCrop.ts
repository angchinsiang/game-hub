import NoImage from "../assets/no-image-placeholder-6f3882e0.webp";

const imageCrop = (url: string) => {
  if (!url) return NoImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default imageCrop;
// ImageCrop(
//   "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
// );

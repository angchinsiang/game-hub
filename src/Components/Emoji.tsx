import { Image, ImageProps } from "@chakra-ui/react";
import Meh from "../assets/meh.webp";
import Like from "../assets/thumbs-up.webp";
import BullsEye from "../assets/bulls-eye.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: Meh, alt: "meh", boxSize: "25px" },
    4: { src: Like, alt: "recommended", boxSize: "25px" },
    5: { src: BullsEye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={3}/>;
};

export default Emoji;

import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

interface Props {
  height: number;
}

const GameCardSkeleton = ({ height }: Props) => {
  return (
    <Card>
      <Skeleton height={height + "px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

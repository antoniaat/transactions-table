import * as React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface Props {
  width?: number;
  height?: number;
}

const SkeletonLoading: React.FC<Props> = ({
  width = 120,
  height = 100,
}) => {
  return (
    <span className="skeleton-loading-wrapper">
      <SkeletonTheme color="#CFDAE7">
        <Skeleton width={width} height={height} />
      </SkeletonTheme>
    </span>
  );
};

export default SkeletonLoading;

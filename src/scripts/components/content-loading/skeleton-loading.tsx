import * as React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface Props {
  width?: number;
  height?: number;
  count?: number;
}

const SkeletonLoading: React.FC<Props> = ({ width = 100, height = 100, count = 1 }) => {
  return (
    <span className="skeleton-loading-wrapper">
      <SkeletonTheme color="#CFDAE7" highlightColor="#fff">
        <Skeleton width={width} height={height} count={count} />
      </SkeletonTheme>
    </span>
  );
};

export default SkeletonLoading;

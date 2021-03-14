import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const skeletonWidth = 90;
const skeletonHeight = 15;
const count = 1;

interface Props {
  isLoading: boolean;
  text?: string | number;
}

const ContentLoading: React.FC<Props> = ({
  isLoading,
  text = "",
  children,
}) => {
  const content = text || children;

  if (isLoading) {
    return (
      <span className="skeleton-loading-wrapper">
        <SkeletonTheme color="#CFDAE7" highlightColor="#fff">
          <Skeleton
            width={skeletonWidth}
            height={skeletonHeight}
            count={count}
          />
        </SkeletonTheme>
      </span>
    );
  }

  return <>{content}</>;
};

export default ContentLoading;

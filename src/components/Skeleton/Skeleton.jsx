import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f5f0f0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="100" r="100" />
    <rect x="5" y="260" rx="14" ry="14" width="270" height="88" />
    <rect x="3" y="211" rx="15" ry="15" width="270" height="30" />
  </ContentLoader>
);

export default Skeleton;

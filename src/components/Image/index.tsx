import React from "react";

interface ImageProps {
  imgUrl: string;
  altText: string;
}

const Image: React.FC<ImageProps> = ({ imgUrl, altText }) => {
  return <img src={imgUrl} alt={altText} />;
};

export default Image;

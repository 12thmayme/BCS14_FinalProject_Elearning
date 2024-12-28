import React from "react";
import { useState } from "react";

const FallbackImage = ({ src, alt, className, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = () => {
    setImgSrc("./public/fontend_image.jpeg");
  };

  return (
    <img
      {...rest}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default FallbackImage;

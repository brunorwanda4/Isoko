import { useState } from "react";

interface Props {
  src: string;
  alt?: string;
  wrapperClassName?: string;
  imageClassName?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export const MyImage = ({
  src,
  alt = "Image",
  wrapperClassName,
  imageClassName,
  width = "100%",
  height = "auto",
  style = {},
}: Props) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={wrapperClassName} style={{ position: "relative" }}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          className={imageClassName}
          loading="lazy"
          width={width}
          height={height}
          style={{
            width,
            height,
            objectFit: "cover",
            ...style,
          }}
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          style={{
            width,
            height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
            color: "#888",
            fontSize: 14,
          }}
        >
          Image not available
        </div>
      )}
    </div>
  );
};

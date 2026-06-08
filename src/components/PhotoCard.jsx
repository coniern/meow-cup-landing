import React from "react";

export default function PhotoCard({
  src,
  alt,
  className = "",
  imageStyle,
  contain = false,
  loading = "lazy",
  children,
}) {
  return (
    <div className={`photo-card ${className} ${contain ? "is-contain" : ""}`} data-card>
      <img
        className="photo-media"
        src={src}
        alt={alt}
        loading={loading}
        style={{
          objectFit: contain ? "contain" : "cover",
          ...imageStyle,
        }}
      />
      <div className="photo-shadow" />
      <div className="photo-glow" />
      <div className="photo-sheen" />
      {children}
    </div>
  );
}

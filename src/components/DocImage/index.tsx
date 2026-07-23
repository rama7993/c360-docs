import React from "react";
import styles from "./styles.module.css";

interface DocImageProps {
  src: string;
  alt?: string;
  caption?: string;
  maxWidth?: string;
}

export default function DocImage({
  src,
  alt,
  caption,
  maxWidth = "100%",
}: DocImageProps): React.ReactElement {
  return (
    <figure className={styles.figure}>
      <img
        src={src}
        alt={alt || caption || ""}
        className={styles.img}
        style={{ maxWidth }}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

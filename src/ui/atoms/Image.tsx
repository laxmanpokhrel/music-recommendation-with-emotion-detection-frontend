enum AspectRation {
  SQUARE = "square",
  VIDEO = "video",
  AUTO = "auto",
}

interface IProps {
  aspectRation?: string;
  alt: string;
  src: string;
  styleClass?: string;
}
export default function Image({
  aspectRation = "auto",
  styleClass,
  src,
  alt,
}: IProps): JSX.Element {
  return (
    <div
      className={`image-cover naxatw-aspect-${aspectRation} ${styleClass}}  `}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

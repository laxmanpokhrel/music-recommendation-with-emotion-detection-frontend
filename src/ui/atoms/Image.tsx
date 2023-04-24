enum AspectRation {
  SQUARE = "square",
  VIDEO = "video",
  AUTO = "auto",
}

interface IProps {
  aspectRation: AspectRation | string;
  alt: string;
  src: string;
  styleClass?: string;
}
export default function Image({
  aspectRation,
  styleClass,
  src,
  alt,
}: IProps): JSX.Element {
  return (
    <div className={`naxatw-aspect-${aspectRation} ${styleClass}`}>
      <img src={src} alt={alt} width="100%" height="100%" />
    </div>
  );
}

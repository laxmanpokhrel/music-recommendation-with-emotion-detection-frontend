interface IProps {
  aspectRation?: string;
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
    <div
      className={`image-cover naxatw-aspect-${aspectRation} ${styleClass}}  `}
      style={{ aspectRatio: aspectRation }}
    >
      <img src={src} alt={alt} />
    </div>
  );
}

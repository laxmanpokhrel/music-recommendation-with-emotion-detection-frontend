interface IProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  className?: string;
}

export default function Chip({ label, className, style }: IProps) {
  return (
    <div className={`naxatw-p-2 naxatw-bg-slate-200 naxatw-rounded-lg naxatw-body-md ${className}`} style={style}>
      {label}
    </div>
  );
}

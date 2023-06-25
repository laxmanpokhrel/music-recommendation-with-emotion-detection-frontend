interface IProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  className?: string;
}

export default function Chip({ label, className, style }: IProps) {
  return (
    <div className={`laxutw-p-2 laxutw-bg-slate-200 laxutw-rounded-lg laxutw-body-md ${className}`} style={style}>
      {label}
    </div>
  );
}

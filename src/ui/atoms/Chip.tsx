interface IProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
  className?: string;
}

export default function Chip({ label, className, style }: IProps) {
  return (
    <div className={`p-2 bg-slate-200 rounded-lg body-md ${className}`} style={style}>
      {label}
    </div>
  );
}

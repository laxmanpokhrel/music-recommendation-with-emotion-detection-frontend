interface IProps extends React.HTMLAttributes<HTMLElement> {
  iconName: string;
}
export default function Icon({ iconName, className, style }: IProps): JSX.Element {
  return (
    <i className={`material-symbols-outlined  ${className} `} style={style}>
      {iconName}
    </i>
  );
}

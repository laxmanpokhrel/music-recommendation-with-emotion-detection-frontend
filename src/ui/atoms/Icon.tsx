interface IProps {
  iconName: string;
}
export default function Icon({ iconName }: IProps): JSX.Element {
  return <span className="material-icon">{iconName}</span>;
}

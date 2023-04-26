interface IProps {
  iconName: string;
}
export default function Icon({ iconName }: IProps): JSX.Element {
  return <i className="material-icons">{iconName}</i>;
}

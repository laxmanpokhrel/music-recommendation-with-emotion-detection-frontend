interface IProps {
  iconName: string;
  style?: string;
}
export default function Icon({ iconName, style }: IProps): JSX.Element {
  return <i className={`material-icons ${style}`}>{iconName}</i>;
}

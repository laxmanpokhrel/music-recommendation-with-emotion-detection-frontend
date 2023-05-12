interface IProps {
  iconName: string;
  iconStyle?: string;
}
export default function Icon({ iconName, iconStyle }: IProps): JSX.Element {
  return <i className={`material-icons ${iconStyle}`}>{iconName}</i>;
}

interface IErrorLabelProps {
  message?: string;
  disabled?: boolean;
}
export default function ErrorLabel({ message = '', disabled }: IErrorLabelProps) {
  return <p className={`text-[#FF0F0F] font-normal body-sm ${disabled ? 'text-gray-600' : ''}`}>{message}</p>;
}

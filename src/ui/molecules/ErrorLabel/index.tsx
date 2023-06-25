interface IErrorLabelProps {
  message?: string;
  disabled?: boolean;
}
export default function ErrorLabel({ message = '', disabled }: IErrorLabelProps) {
  return (
    <p className={`laxutw-text-[#FF0F0F] laxutw-font-normal laxutw-body-sm ${disabled ? 'laxutw-text-gray-600' : ''}`}>
      {message}
    </p>
  );
}

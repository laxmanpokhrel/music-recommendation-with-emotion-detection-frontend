interface IErrorLabelProps {
  message?: string;
  disabled?: boolean;
}
export default function ErrorLabel({ message = '', disabled }: IErrorLabelProps) {
  return (
    <p className={`naxatw-text-[#FF0F0F] naxatw-font-normal naxatw-body-sm ${disabled ? 'naxatw-text-gray-600' : ''}`}>
      {message}
    </p>
  );
}

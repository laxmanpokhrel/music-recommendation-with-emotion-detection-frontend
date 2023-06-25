import ComboBox from '@Atoms/radixComponents/ComboBox';
import Dropdown from '@Atoms/radixComponents/Dropdown';
import { Input } from '@Atoms/radixComponents/Input';
import ErrorLabel from '@Molecules/ErrorLabel';
import InputLabel from '@Molecules/InputLabel';
import Upload from '@Molecules/Upload';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { IComboBoxProps, IInputLabelProps, IInputProps } from '@Schemas/interfaces';
import { FormControlTypes } from '@Schemas/types';
import { cn } from '@Utils/index';

interface IFormControlProps
  extends Partial<IComboBoxProps>,
    Partial<IInputProps>,
    Partial<Omit<IInputLabelProps, 'astric'>> {
  controlType: FormControlTypes;
}
function FormControl({
  controlType,
  label = '',
  touched = false,
  error,
  required,
  tooltipMessage,
  className,
  disabled,
  ...props
}: IFormControlProps) {
  const controlElements: Record<string, any> = {
    input: Input,
    comboBox: ComboBox,
    dropDown: Dropdown,
    upload: Upload,
  };

  const ControlElement = controlElements[controlType];
  return (
    <div className={cn('form-control naxatw-flex naxatw-flex-col naxatw-gap-[0.5rem] ', className)}>
      {label && <InputLabel label={label} tooltipMessage={tooltipMessage} astric={required} disabled={disabled} />}
      <ControlElement {...props} disabled={disabled} />
      {touched && error ? <ErrorLabel message={error} disabled={disabled} /> : null}
    </div>
  );
}
export default hasErrorBoundary(FormControl);

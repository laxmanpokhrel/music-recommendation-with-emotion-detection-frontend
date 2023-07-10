import ComboBox from '@Atoms/radixComponents/ComboBox';
import DatePicker from '@Atoms/radixComponents/DatePicker';
import Dropdown from '@Atoms/radixComponents/Dropdown';
import Input from '@Atoms/radixComponents/Input';
import ErrorLabel from '@Molecules/ErrorLabel';
import InputLabel from '@Molecules/InputLabel';
import RadioButton from '@Molecules/RadioButton';
import Upload from '@Molecules/Upload';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { IComboBoxProps, IDatePickerProps, IInputLabelProps, IInputProps, IIteratorProps } from '@Schemas/interfaces';
import { FormControlTypes } from '@Schemas/types';
import { cn } from '@Utils/index';

interface IFormControlProps
  extends Partial<IComboBoxProps>,
    Partial<IInputProps>,
    Partial<Omit<IInputLabelProps, 'astric'>>,
    Partial<IDatePickerProps>,
    Partial<IIteratorProps> {
  controlType: FormControlTypes;
  disabled?: boolean;
}

function FormControl({
  controlType,
  label = '',
  error,
  required = false,
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
    radio: RadioButton,
    datePicker: DatePicker,
  };
  const ControlElement = controlElements[controlType];
  return (
    <div className={cn('form-control flex flex-col gap-[0.5rem] ', className)}>
      {label && <InputLabel label={label} tooltipMessage={tooltipMessage} astric={required} disabled={disabled} />}
      <ControlElement {...props} error={error} disabled={disabled} />
      {/* {touched && error && typeof error === 'string' ? <ErrorLabel message={error} disabled={disabled} /> : null} */}
      {error ? <ErrorLabel message={error} disabled={disabled} /> : null}
    </div>
  );
}
export default hasErrorBoundary(FormControl);

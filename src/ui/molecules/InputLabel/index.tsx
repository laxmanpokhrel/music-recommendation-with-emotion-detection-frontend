import ToolTip from '@Atoms/radixComponents/Tooltip';
import { IInputLabelProps } from '@Schemas/interfaces';

export default function InputLabel({ label, tooltipMessage, astric, id, disabled }: IInputLabelProps) {
  return (
    <div className={`label flex h-5 items-center  ${disabled ? 'text-gray-600' : ''}`}>
      <p id={id} className="text-lg text-gray-900">
        {label}
      </p>
      {astric ? <span className="text-red-600">&nbsp;*</span> : null}
      <div className="tooltip ml-1  ">
        {tooltipMessage ? <ToolTip iconName="info" message={tooltipMessage || 'tooltip'} /> : null}
      </div>
    </div>
  );
}

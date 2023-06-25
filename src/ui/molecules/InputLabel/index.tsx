import ToolTip from '@Atoms/radixComponents/Tooltip';
import { IInputLabelProps } from '@Schemas/interfaces';

export default function InputLabel({ label, tooltipMessage, astric, id, disabled }: IInputLabelProps) {
  return (
    <div className={`label laxutw-flex laxutw-h-5 laxutw-items-center  ${disabled ? 'laxutw-text-gray-600' : ''}`}>
      <p id={id} className="laxutw-body-sm">
        {label}
      </p>
      {astric ? <span className="laxutw-text-red-600">&nbsp;*</span> : null}
      <div className="tooltip laxutw-ml-1  ">
        {tooltipMessage ? <ToolTip iconName="info" message={tooltipMessage || 'tooltip'} /> : null}
      </div>
    </div>
  );
}

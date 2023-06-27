/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { IPieLegendItemProps } from '@Schemas/interfaces';

export default function PieLegendItem({ color, name, value, percentage, onLegendClick }: IPieLegendItemProps) {
  const [legendIsDisabled, setLegendIsDisabled] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        setLegendIsDisabled((prev) => !prev);
        onLegendClick(name);
      }}
      className="flex justify-between items-start"
    >
      <div className="legend-box-name flex justify-items-start items-start gap-2 flex-1">
        <div
          className="w-[16px] h-[16px] rounded my-[2px]"
          style={{
            backgroundColor: legendIsDisabled ? '#D7D7D7' : color,
            border: legendIsDisabled ? '1px solid #D7D7D7' : '',
          }}
        />
        <div className={`name button font-normal text-start ${legendIsDisabled ? 'text-gray-300' : ''}`}>{name}</div>
      </div>
      <div className="value-percentage flex gap-2  justify-end items-center min-w-[2rem] flex-1">
        <div className={`button ${legendIsDisabled ? 'text-gray-300' : ''}`}>{value}</div>
        <div className={`button whitespace-nowrap ${legendIsDisabled ? 'text-gray-300' : ''}`}>{percentage} %</div>
      </div>
    </button>
  );
}

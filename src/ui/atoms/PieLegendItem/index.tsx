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
      className="laxutw-flex laxutw-justify-between laxutw-items-start"
    >
      <div className="legend-box-name laxutw-flex laxutw-justify-items-start laxutw-items-start laxutw-gap-2 laxutw-flex-1">
        <div
          className="laxutw-w-[16px] laxutw-h-[16px] laxutw-rounded laxutw-my-[2px]"
          style={{
            backgroundColor: legendIsDisabled ? '#D7D7D7' : color,
            border: legendIsDisabled ? '1px solid #D7D7D7' : '',
          }}
        />
        <div
          className={`name laxutw-button laxutw-font-normal laxutw-text-start ${
            legendIsDisabled ? 'laxutw-text-gray-300' : ''
          }`}
        >
          {name}
        </div>
      </div>
      <div className="value-percentage laxutw-flex laxutw-gap-2  laxutw-justify-end laxutw-items-center laxutw-min-w-[2rem] laxutw-flex-1">
        <div className={`laxutw-button ${legendIsDisabled ? 'laxutw-text-gray-300' : ''}`}>{value}</div>
        <div className={`laxutw-button laxutw-whitespace-nowrap ${legendIsDisabled ? 'laxutw-text-gray-300' : ''}`}>
          {percentage} %
        </div>
      </div>
    </button>
  );
}

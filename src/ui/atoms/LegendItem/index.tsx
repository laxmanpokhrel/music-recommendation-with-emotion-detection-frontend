/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ILegendItemProps } from '@Schemas/interfaces';

export default function LegendItem({ color, name, onLegendClick }: ILegendItemProps) {
  const [legendIsDisabled, setLegendIsDisabled] = useState(false);
  return (
    <button
      type="button"
      className="laxutw-flex laxutw-items-center laxutw-justify-center laxutw-gap-2"
      onClick={() => {
        setLegendIsDisabled((prev) => !prev);
        onLegendClick(name);
      }}
    >
      <span
        className="laxutw-w-[16px] laxutw-h-[16px] laxutw-rounded "
        style={{
          background: legendIsDisabled ? '#D7D7D7' : color,
          border: legendIsDisabled ? '1px solid #D7D7D7' : '',
        }}
      />
      <p className={`laxutw-text-sm ${legendIsDisabled ? 'laxutw-text-gray-300' : ''}`}>{name}</p>
    </button>
  );
}

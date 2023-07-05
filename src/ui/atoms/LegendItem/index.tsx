/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ILegendItemProps } from '@Schemas/interfaces';

export default function LegendItem({ color, name, onLegendClick }: ILegendItemProps) {
  const [legendIsDisabled, setLegendIsDisabled] = useState(false);
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2"
      onClick={() => {
        setLegendIsDisabled((prev) => !prev);
        onLegendClick(name);
      }}
    >
      <span
        className="w-[16px] h-[16px] rounded "
        style={{
          background: legendIsDisabled ? '#D7D7D7' : color,
          border: legendIsDisabled ? '1px solid #D7D7D7' : '',
        }}
      />
      <p className={`text-sm ${legendIsDisabled ? 'text-gray-300' : ''}`}>{name}</p>
    </button>
  );
}

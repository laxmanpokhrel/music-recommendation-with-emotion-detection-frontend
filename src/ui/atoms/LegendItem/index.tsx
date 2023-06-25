/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ILegendItemProps } from '@Schemas/interfaces';

export default function LegendItem({ color, name, onLegendClick }: ILegendItemProps) {
  const [legendIsDisabled, setLegendIsDisabled] = useState(false);
  return (
    <button
      type="button"
      className="naxatw-flex naxatw-items-center naxatw-justify-center naxatw-gap-2"
      onClick={() => {
        setLegendIsDisabled((prev) => !prev);
        onLegendClick(name);
      }}
    >
      <span
        className="naxatw-w-[16px] naxatw-h-[16px] naxatw-rounded "
        style={{
          background: legendIsDisabled ? '#D7D7D7' : color,
          border: legendIsDisabled ? '1px solid #D7D7D7' : '',
        }}
      />
      <p className={`naxatw-text-sm ${legendIsDisabled ? 'naxatw-text-gray-300' : ''}`}>{name}</p>
    </button>
  );
}

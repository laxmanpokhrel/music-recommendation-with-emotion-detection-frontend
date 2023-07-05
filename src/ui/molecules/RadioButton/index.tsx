import { TabsList, TabsTrigger } from '@Atoms/radixComponents/ClickableTab';
import { IRadioDataProps, IRadioData } from '@Schemas/interfaces';
import { Tabs } from '@radix-ui/react-tabs';
import { useState } from 'react';

export default function RadioButton({
  id = 'input-form-control',
  className,
  bindvalue,
  options = [],
  choose = 'id',
  onChange,
  onFocus,
}: IRadioDataProps) {
  const [value, setValue] = useState<string | number>(bindvalue);
  const handleClick = (val: string) => {
    if (onFocus) onFocus();
    setValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <Tabs id={id} defaultValue={String(value)} className={`w-[147px] ${className}`}>
      <TabsList>
        {options?.map((itm: IRadioData) => (
          <TabsTrigger key={itm?.label} value={String(itm[choose])} onClick={() => handleClick(String(itm[choose]))}>
            {itm?.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

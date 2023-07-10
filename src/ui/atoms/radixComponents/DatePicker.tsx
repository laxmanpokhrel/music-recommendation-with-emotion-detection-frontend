/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { format, isValid, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@Utils/index';
import { IDatePickerProps } from '@Schemas/interfaces';
import Icon from '@Atoms/Icon';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import Input from './Input';

/**
 *  This code exports a default function called `DatePicker` that takes an optional boolean prop
 * `canType`. It uses React hooks to manage state for the selected date and a typed date input.
 */
export default function DatePicker({ canType = false, onChange, bindvalue, id, placeholder }: IDatePickerProps) {
  const [date, setDate] = React.useState<Date>();
  const [typedDate, setTypedDate] = React.useState<any>();

  useEffect(() => {
    setDate(bindvalue);
    setTypedDate(bindvalue);
  }, [bindvalue]);

  const handleTypedDate = (e: any) => {
    const passedTypedDate = e.target.value;
    setTypedDate(passedTypedDate);
    const parsedDate = parse(passedTypedDate, 'yyyy-MM-dd', new Date());

    if (isValid(parsedDate)) setDate(parsedDate);
    if (onChange) onChange(parsedDate);
  };

  const handleCalendarSelect = (data: any) => {
    setDate(data);
    setTypedDate((prev: any) => (data ? format(data, 'yyyy-MM-dd') : prev));
    if (onChange) onChange(data ? format(data, 'yyyy-MM-dd') : typedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild id={id} className="hover:bg-teal-green-50">
        {canType ? (
          <Input
            type="text"
            hasIcon
            rightIconName="calendar_month"
            leftIconName="arrow_drop_down"
            value={typedDate}
            onChange={handleTypedDate}
            placeholder={placeholder}
          />
        ) : (
          <Button
            variant="secondary"
            className={cn(
              'text-left font-normal flex gap-2 items-center justify-between !px-[0.75rem] w-fit',
              !date && '',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              <span className="flex-1">{format(date, 'yyyy-MM-dd')}</span>
            ) : (
              <span className="flex-1">Pick a date</span>
            )}
            <Icon
              iconName="arrow_drop_down"
              // className={cn('text-2xl px-[12px]', iconStyle)}
              // onClick={onClick}
            />
            {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-full !p-[0px] bg-white">
        <Calendar mode="single" selected={date} onSelect={handleCalendarSelect} initialFocus />
      </PopoverContent>
    </Popover>
  );
}

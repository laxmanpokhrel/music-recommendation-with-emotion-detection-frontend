import * as React from 'react';
import { format, isValid, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@Utils/index';
import { Button } from './Button';
import { Calendar } from './Calendar';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Input } from './Input';

interface IDatePickerProps {
  canType?: boolean;
}

/**
 *  This code exports a default function called `DatePicker` that takes an optional boolean prop
 * `canType`. It uses React hooks to manage state for the selected date and a typed date input.
 */
export default function DatePicker({ canType = false }: IDatePickerProps) {
  const [date, setDate] = React.useState<Date>();
  const [typedDate, setTypedDate] = React.useState<any>();

  const handleTypedDate = (e: any) => {
    const passedTypedDate = e.target.value;
    setTypedDate(passedTypedDate);
    const parsedDate = parse(passedTypedDate, 'yyyy-MM-dd', new Date());

    if (isValid(parsedDate)) setDate(parsedDate);
  };

  const handleCalendarSelect = (data: any) => {
    setDate(data);
    setTypedDate((prev: any) => (data ? format(data, 'yyyy-MM-dd') : prev));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {canType ? (
          <Input type="text" hasIcon iconName="calendar_month" value={typedDate} onChange={handleTypedDate} />
        ) : (
          <Button
            variant="secondary"
            className={cn(
              'w-[280px] text-left font-normal flex gap-2 items-center justify-center',
              !date && 'bg-gray-400',
            )}
          >
            {date ? format(date, 'yyyy-MM-dd') : <span>Pick a date</span>}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-full !p-[0px] bg-white">
        <Calendar mode="single" selected={date} onSelect={handleCalendarSelect} initialFocus />
      </PopoverContent>
    </Popover>
  );
}

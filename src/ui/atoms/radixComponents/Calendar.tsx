import React from 'react';
import { DayPicker } from 'react-day-picker';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/**
 * This is a TypeScript React component that renders a calendar using DayPicker library with
 * customizable styling.
 * @param {any}  - - `selected`: the currently selected date(s)
 * @returns A React functional component named "Calendar" is being returned. It takes in several props
 * including "selected", "className", " ", "onSelect", and "props". It renders a DayPicker
 * component with various classNames and props passed down as well.
 */
function Calendar({ selected, className, classNames, onSelect, ...props }: any) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      showOutsideDays
      onSelect={onSelect}
      className="p-[2px] w-fit m-0 rounded-lg"
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 mx-[0px] my-[0px]',
        month: 'm-[0px]',
        caption: 'flex justify-between pt-1 px-2 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        // nav_button_previous: 'absolute left-1',
        // nav_button_next: 'absolute right-1',
        table: 'w-full p-2',
        cell: 'rounded-lg hover:bg-gray-200 overflow-hidden m-1',
        day: 'w-full px-[4px] py-[2px] font-semibold',
        selected: '!bg-blue-500',
        day_selected: 'hover:blue-400 !bg-blue-500 b-2 !text-white',
        day_today: 'bg-orange-300 text-white font-bold',
        day_outside: 'text-gray-400 !font-light',
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

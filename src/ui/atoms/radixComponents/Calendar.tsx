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
      className="laxutw-p-[2px] laxutw-w-fit laxutw-m-0 laxutw-rounded-lg"
      classNames={{
        months:
          'laxutw-flex laxutw-flex-col sm:laxutw-flex-row laxutw-space-y-4 sm:laxutw-space-x-4 sm:laxutw-space-y-0 laxutw-mx-[0px] laxutw-my-[0px]',
        month: 'laxutw-m-[0px]',
        caption: 'laxutw-flex laxutw-justify-between laxutw-pt-1 laxutw-px-2 laxutw-relative laxutw-items-center',
        caption_label: 'laxutw-text-sm laxutw-font-medium',
        nav: 'laxutw-space-x-1 laxutw-flex laxutw-items-center',
        // nav_button_previous: 'laxutw-absolute laxutw-left-1',
        // nav_button_next: 'laxutw-absolute laxutw-right-1',
        table: 'laxutw-w-full laxutw-p-2',
        cell: 'laxutw-rounded-lg hover:laxutw-bg-gray-200 laxutw-overflow-hidden laxutw-m-1',
        day: 'laxutw-w-full laxutw-px-[4px] laxutw-py-[2px] laxutw-font-semibold',
        selected: '!laxutw-bg-blue-500',
        day_selected: 'hover:laxutw-blue-400 !laxutw-bg-blue-500 laxutw-b-2 !laxutw-text-white',
        day_today: 'laxutw-bg-orange-300 laxutw-text-white laxutw-font-bold',
        day_outside: 'laxutw-text-gray-400 !laxutw-font-light',
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

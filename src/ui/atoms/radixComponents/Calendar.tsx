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
      className="naxatw-p-[2px] naxatw-w-fit naxatw-m-0 naxatw-rounded-lg"
      classNames={{
        months:
          'naxatw-flex naxatw-flex-col sm:naxatw-flex-row naxatw-space-y-4 sm:naxatw-space-x-4 sm:naxatw-space-y-0 naxatw-mx-[0px] naxatw-my-[0px]',
        month: 'naxatw-m-[0px]',
        caption: 'naxatw-flex naxatw-justify-between naxatw-pt-1 naxatw-px-2 naxatw-relative naxatw-items-center',
        caption_label: 'naxatw-text-sm naxatw-font-medium',
        nav: 'naxatw-space-x-1 naxatw-flex naxatw-items-center',
        // nav_button_previous: 'naxatw-absolute naxatw-left-1',
        // nav_button_next: 'naxatw-absolute naxatw-right-1',
        table: 'naxatw-w-full naxatw-p-2',
        cell: 'naxatw-rounded-lg hover:naxatw-bg-gray-200 naxatw-overflow-hidden naxatw-m-1',
        day: 'naxatw-w-full naxatw-px-[4px] naxatw-py-[2px] naxatw-font-semibold',
        selected: '!naxatw-bg-blue-500',
        day_selected: 'hover:naxatw-blue-400 !naxatw-bg-blue-500 naxatw-b-2 !naxatw-text-white',
        day_today: 'naxatw-bg-orange-300 naxatw-text-white naxatw-font-bold',
        day_outside: 'naxatw-text-gray-400 !naxatw-font-light',
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

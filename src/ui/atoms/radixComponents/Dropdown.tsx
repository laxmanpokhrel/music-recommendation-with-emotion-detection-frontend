/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from 'react';
import Icon from '@Atoms/Icon';
import { cn } from '@Utils/index';
import { IComboBoxProps, IDropDownData } from '@Schemas/interfaces';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { Button } from './Button';

import { Command, CommandGroup, CommandItem } from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

function Dropdown({
  options = [],
  multiple = false,
  choose = 'id',
  bindvalue,
  placeholder,
  onChange,
  onFocus,
  id,
  className,
  disabled,
  isLoading = false,
}: IComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(bindvalue);
  const [dropDownWidth, setDropDownWidth] = React.useState<number | undefined>(0);
  const handleSelect = (currentValue: any) => {
    if (onFocus) onFocus();

    if (multiple) {
      const selectedValues = Array.isArray(value) ? [...value] : [];
      const selectedIndex = selectedValues.indexOf(currentValue);
      if (selectedIndex === -1) {
        selectedValues.push(currentValue);
      } else {
        selectedValues.splice(selectedIndex, 1);
      }
      if (onChange) {
        onChange(selectedValues);
      }
      setValue(selectedValues);
    } else {
      const selectedValue = currentValue === value ? '' : currentValue;
      setValue(selectedValue);
      if (onChange) {
        onChange(selectedValue);
      }
      setOpen(false);
    }
  };

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    setDropDownWidth(triggerRef.current?.clientWidth);
  }, [triggerRef.current?.clientWidth]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild ref={triggerRef}>
        <Button
          id={id}
          variant={disabled ? 'ghost' : 'drop'}
          size="drop-lg"
          role="combobox"
          aria-expanded={open}
          className={cn('flex justify-between gap-1 bg-white items-center', className)}
          onClick={() => setOpen(true)}
        >
          {multiple ? (
            <div className="flex flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <p className="line-clamp-2">{value.length} items selected</p>
              ) : (
                <p className="body-md text-gray-400 px-0 line-clamp-2">{placeholder || 'Choose'}</p>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find((option: IDropDownData) => option[choose as keyof IDropDownData] === value)?.label
              ) : (
                <p className="body-md px-0 text-gray-400 line-clamp-2">{placeholder || 'Choose'}</p>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className="h-4 text-black w-4 flex justify-center items-center shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-[0px] bg-white block search-scrollbar max-h-[10rem] overflow-y-auto"
        style={{ width: `${dropDownWidth}px` }}
      >
        <Command className="p-0 m-0">
          {isLoading && <p>Loading ...</p>}
          <CommandGroup className="">
            {options.length ? (
              options.map((option: IDropDownData) => (
                <CommandItem key={option.value} onSelect={() => handleSelect(option[choose as keyof IDropDownData])}>
                  {/* {multiple ? (
                  <Icon
                    iconName={`${
                      Array.isArray(value) && value.includes(option[choose] as T)
                        ? 'check_box'
                        : 'check_box_outline_blank'
                    }`}
                    className={`mr-[1px] text-[20px]
                    ${
                      Array.isArray(value) && value.includes(option[choose] as T)
                        ? 'text-green-600'
                        : 'text-gray-600'
                    } `}
                  />
                ) : (
                  <Icon
                    iconName="done"
                    className={`mr-[1px] text-[20px] ${
                      value === option[choose] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )} */}
                  <Icon
                    iconName="done"
                    className={`mr-[1px] text-[20px] ${
                      !multiple
                        ? value === option[choose as keyof IDropDownData]
                          ? 'opacity-100'
                          : 'opacity-0'
                        : Array.isArray(value) && value.includes(option[choose as keyof IDropDownData])
                        ? 'opacity-100'
                        : 'opacity-0'
                    }`}
                  />
                  {option.label}
                </CommandItem>
              ))
            ) : (
              <div className="h-[4.25rem] flex items-center justify-center text-gray-400">No Data Found.</div>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
export default hasErrorBoundary(Dropdown);

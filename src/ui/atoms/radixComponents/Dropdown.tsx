/* eslint-disable no-nested-ternary */
import Icon from '@Atoms/Icon';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { IComboBoxProps, IDropDownData } from '@Schemas/interfaces';
import { cn } from '@Utils/index';
import React from 'react';
import { Button } from './Button';

import { Command, CommandEmpty, CommandGroup, CommandItem } from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

function Dropdown({
  options,
  multiple = false,
  choose = 'id',
  bindvalue,
  placeholder,
  onChange,
  onFocus,
  id,
  className,
  disabled,
}: IComboBoxProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(bindvalue);
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

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
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
                <p>{value.length} items selected</p>
              ) : (
                <p className="body-md text-black px-0">{placeholder || 'Select options...'}</p>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find((option: IDropDownData) => option[choose] === value)?.label
              ) : (
                <p className="body-md text-black px-0">{placeholder || 'Select options...'}</p>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className="h-4 text-black w-4 flex justify-center items-center shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-[0px] bg-white min-w-full block" style={{ minWidth: '100%' }}>
        <Command className="p-0 m-0">
          {options.length === 0 && <CommandEmpty>No match found.</CommandEmpty>}
          <CommandGroup className="">
            {options.map((option: IDropDownData) => (
              <CommandItem key={option.value} onSelect={() => handleSelect(option[choose])}>
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
                      ? value === option[choose]
                        ? 'opacity-100'
                        : 'opacity-0'
                      : Array.isArray(value) && value.includes(option[choose])
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
export default hasErrorBoundary(Dropdown);

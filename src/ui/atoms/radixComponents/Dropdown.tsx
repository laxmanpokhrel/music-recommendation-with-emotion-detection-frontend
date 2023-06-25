/* eslint-disable no-nested-ternary */
import React from 'react';
import Icon from '@Atoms/Icon';
import { cn } from '@Utils/index';
import { IComboBoxProps, IDropDownData } from '@Schemas/interfaces';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
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
          className={cn(
            'laxutw-flex laxutw-justify-between laxutw-gap-1 laxutw-bg-white laxutw-items-center',
            className,
          )}
          onClick={() => setOpen(true)}
        >
          {multiple ? (
            <div className="laxutw-flex laxutw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <p>{value.length} items selected</p>
              ) : (
                <p className="laxutw-body-md laxutw-text-black laxutw-px-0">{placeholder || 'Select options...'}</p>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find((option: IDropDownData) => option[choose] === value)?.label
              ) : (
                <p className="laxutw-body-md laxutw-text-black laxutw-px-0">{placeholder || 'Select options...'}</p>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className="laxutw-h-4 laxutw-text-black laxutw-w-4 laxutw-flex laxutw-justify-center laxutw-items-center laxutw-shrink-0 laxutw-opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="laxutw-p-[0px] laxutw-bg-white laxutw-min-w-full laxutw-block"
        style={{ minWidth: '100%' }}
      >
        <Command className="laxutw-p-0 laxutw-m-0">
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
                    className={`laxutw-mr-[1px] laxutw-text-[20px]
                    ${
                      Array.isArray(value) && value.includes(option[choose] as T)
                        ? 'laxutw-text-green-600'
                        : 'laxutw-text-gray-600'
                    } `}
                  />
                ) : (
                  <Icon
                    iconName="done"
                    className={`laxutw-mr-[1px] laxutw-text-[20px] ${
                      value === option[choose] ? 'laxutw-opacity-100' : 'laxutw-opacity-0'
                    }`}
                  />
                )} */}
                <Icon
                  iconName="done"
                  className={`laxutw-mr-[1px] laxutw-text-[20px] ${
                    !multiple
                      ? value === option[choose]
                        ? 'laxutw-opacity-100'
                        : 'laxutw-opacity-0'
                      : Array.isArray(value) && value.includes(option[choose])
                      ? 'laxutw-opacity-100'
                      : 'laxutw-opacity-0'
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

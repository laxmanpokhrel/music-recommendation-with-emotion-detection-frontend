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
            'naxatw-flex naxatw-justify-between naxatw-gap-1 naxatw-bg-white naxatw-items-center',
            className,
          )}
          onClick={() => setOpen(true)}
        >
          {multiple ? (
            <div className="naxatw-flex naxatw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <p>{value.length} items selected</p>
              ) : (
                <p className="naxatw-body-md naxatw-text-black naxatw-px-0">{placeholder || 'Select options...'}</p>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find((option: IDropDownData) => option[choose] === value)?.label
              ) : (
                <p className="naxatw-body-md naxatw-text-black naxatw-px-0">{placeholder || 'Select options...'}</p>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className="naxatw-h-4 naxatw-text-black naxatw-w-4 naxatw-flex naxatw-justify-center naxatw-items-center naxatw-shrink-0 naxatw-opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="naxatw-p-[0px] naxatw-bg-white naxatw-min-w-full naxatw-block"
        style={{ minWidth: '100%' }}
      >
        <Command className="naxatw-p-0 naxatw-m-0">
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
                    className={`naxatw-mr-[1px] naxatw-text-[20px]
                    ${
                      Array.isArray(value) && value.includes(option[choose] as T)
                        ? 'naxatw-text-green-600'
                        : 'naxatw-text-gray-600'
                    } `}
                  />
                ) : (
                  <Icon
                    iconName="done"
                    className={`naxatw-mr-[1px] naxatw-text-[20px] ${
                      value === option[choose] ? 'naxatw-opacity-100' : 'naxatw-opacity-0'
                    }`}
                  />
                )} */}
                <Icon
                  iconName="done"
                  className={`naxatw-mr-[1px] naxatw-text-[20px] ${
                    !multiple
                      ? value === option[choose]
                        ? 'naxatw-opacity-100'
                        : 'naxatw-opacity-0'
                      : Array.isArray(value) && value.includes(option[choose])
                      ? 'naxatw-opacity-100'
                      : 'naxatw-opacity-0'
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

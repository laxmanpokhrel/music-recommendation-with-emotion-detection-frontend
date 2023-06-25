/* eslint-disable no-nested-ternary */
import { ChangeEvent, useEffect, useState } from 'react';
import Icon from '@Atoms/Icon';
import { IComboBoxProps, IDropDownData } from '@Schemas/interfaces';
import hasErrorBoundary from '@Molecules/_lib_/hasErrorBoundary';
import { Button } from './Button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './Command';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

function Combobox({
  options,
  bindvalue,
  choose = 'id',
  multiple = false,
  onChange,
  onFocus,
  disabled,
}: IComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(bindvalue);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(options);

  useEffect(() => {
    const debounceInstance = setTimeout(() => {
      setFilteredData([...options]);
      if (searchQuery.length)
        setFilteredData(() => [
          ...options.filter(
            (item) => item.value.includes(searchQuery.toLowerCase()) || item.label.includes(searchQuery.toLowerCase()),
          ),
        ]);
      else setFilteredData(options);
    }, 300);

    return () => clearTimeout(debounceInstance);
  }, [searchQuery, options]);

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
      if (onChange) onChange(selectedValue);
      setValue(selectedValue);
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={disabled ? 'ghost' : 'drop'}
          size="drop-lg"
          role="combobox"
          aria-expanded={open}
          className="laxutw-flex laxutw-justify-between laxutw-pr-3 laxutw-items-center"
        >
          {multiple ? (
            <div className="laxutw-flex laxutw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <span>{value.length} items selected</span>
              ) : (
                <span className="laxutw-opacity-50">Select options...</span>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find((option: IDropDownData) => option[choose] === value)?.label
              ) : (
                <span className="laxutw-opacity-50">Select options...</span>
              )}
            </>
          )}
          <Icon
            iconName="arrow_drop_down"
            className=" laxutw-h-4 laxutw-w-4 laxutw-flex laxutw-justify-center laxutw-items-center laxutw-shrink-0 laxutw-opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="laxutw-p-[0px] laxutw-bg-white laxutw-w-full" style={{ width: 'inherit' }}>
        <Command className="laxutw-p-0 laxutw-m-0">
          <CommandInput
            placeholder="Search data..."
            value={searchQuery}
            onChangeCapture={(e: ChangeEvent<any>) => {
              setSearchQuery(e.target.value);
            }}
          />
          {/* {!filteredData.length && (
            <div className="laxutw-px-2 laxutw-py-1 laxutw-text-gray-500 laxutw-font-extralight">No match found!</div>
          )} */}
          <CommandEmpty>No match found.</CommandEmpty>
          <CommandGroup>
            {filteredData.map((option: IDropDownData) => (
              <CommandItem key={option.label} onSelect={() => handleSelect(option[choose])}>
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

export default hasErrorBoundary(Combobox);

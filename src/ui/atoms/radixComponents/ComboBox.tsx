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
          className="flex justify-between pr-3 items-center"
        >
          {multiple ? (
            <div className="flex flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <span>{value.length} items selected</span>
              ) : (
                <span className="opacity-50">Select options...</span>
              )}
            </div>
          ) : (
            <>
              {value ? (
                options.find((option: IDropDownData) => option[choose] === value)?.label
              ) : (
                <span className="opacity-50">Select options...</span>
              )}
            </>
          )}
          <Icon iconName="arrow_drop_down" className=" h-4 w-4 flex justify-center items-center shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-[0px] bg-white w-full" style={{ width: 'inherit' }}>
        <Command className="p-0 m-0">
          <CommandInput
            placeholder="Search data..."
            value={searchQuery}
            onChangeCapture={(e: ChangeEvent<any>) => {
              setSearchQuery(e.target.value);
            }}
          />
          {/* {!filteredData.length && (
            <div className="px-2 py-1 text-gray-500 font-extralight">No match found!</div>
          )} */}
          <CommandEmpty>No match found.</CommandEmpty>
          <CommandGroup>
            {filteredData.map((option: IDropDownData) => (
              <CommandItem key={option.label} onSelect={() => handleSelect(option[choose])}>
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

export default hasErrorBoundary(Combobox);

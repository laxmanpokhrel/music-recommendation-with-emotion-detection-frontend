import { ChangeEvent, useEffect, useState } from 'react';
import Icon from '@Atoms/Icon';
import { IDropDownData, IRegisterProps } from '@Schemas/interfaces';
import { Command, CommandGroup, CommandInput, CommandItem } from './Command';

interface ISearchCommand extends Partial<IRegisterProps> {
  options: IDropDownData[];
  choose: keyof IDropDownData;
  className?: string;
}

const SearchCommand = ({ options, choose = 'id', className, onChange, onFocus }: ISearchCommand) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<IDropDownData[]>(options);

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

    return () => {
      clearTimeout(debounceInstance);
      setOpen(false);
    };
  }, [searchQuery, options]);

  const handleSelect = (currentValue: any) => {
    const selectedValue = currentValue === value ? '' : currentValue;
    if (onChange) onChange(selectedValue);
    setValue(selectedValue);
  };

  const onFocusInput = () => {
    if (onFocus) onFocus();
    setOpen(true);
  };

  return (
    <Command className={`naxatw-p-0 naxatw-m-0 naxatw-border ${className}`}>
      <CommandInput
        placeholder="Search..."
        value={searchQuery}
        onChangeCapture={(e: ChangeEvent<any>) => {
          setSearchQuery(e.target.value);
        }}
        onFocus={onFocusInput}
      />

      {open && (
        <>
          {!filteredData.length && (
            <div className="naxatw-px-2 naxatw-py-1 naxatw-text-gray-500 naxatw-font-extralight">No match found!</div>
          )}

          <CommandGroup>
            {filteredData.map((option: IDropDownData) => (
              <CommandItem key={option.label} onSelect={() => handleSelect(option[choose])}>
                <Icon
                  iconName="done"
                  className={`naxatw-mr-[1px] naxatw-text-[20px] ${
                    Array.isArray(value) && value.includes(option[choose]) ? 'naxatw-opacity-100' : 'naxatw-opacity-0'
                  }`}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </>
      )}
    </Command>
  );
};

export default SearchCommand;

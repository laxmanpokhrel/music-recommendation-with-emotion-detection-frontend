/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { cn } from '@Utils/index';
import Icon from '@Atoms/Icon';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  rightIconName?: string;
  leftIconName?: string;
  varientSize?: 'sm' | 'lg';
  iconStyle?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      hasIcon = false,
      rightIconName = '',
      leftIconName = 'idators',
      varientSize = 'lg',
      iconStyle = '',
      onClick,
      ...props
    },
    ref,
  ) => {
    const sizeVarient = {
      sm: 'h-[2.25rem]',
      lg: 'h-[2.75rem]',
    };
    if (hasIcon)
      return (
        <div
          className={cn(
            `bg-white group flex gap-[2px] w-full items-center justify-center rounded-md border -[12px] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-5 disabled:border-b-gray-600`,
            className,
            sizeVarient[varientSize],
          )}
        >
          {rightIconName && (
            <Icon
              iconName={rightIconName}
              className={cn('text-2xl px-[12px] group-hover:bg-teal-green-50', iconStyle)}
              onClick={onClick}
            />
          )}
          <input
            type={type}
            className={cn(
              'flex pl-[8px] h-full w-full  border-input bg-transparent text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400  disabled:cursor-not-allowed disabled:opacity-50 focus:border-none focus:outline-none hover:bg-teal-green-50 transition-all duration-200',
            )}
            ref={ref}
            onClick={onClick}
            {...props}
          />
          {leftIconName && (
            <Icon iconName={leftIconName} className={cn('text-2xl  px-[12px]', iconStyle)} onClick={onClick} />
          )}
        </div>
      );

    return (
      <input
        type={type}
        className={cn(
          'bg-white flex h-10 w-full rounded-md border border-gray-400 bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-teal-green-50 transition-all duration-200',
          className,
          sizeVarient[varientSize],
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;

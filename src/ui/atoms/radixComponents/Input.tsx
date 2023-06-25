/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { cn } from '@Utils/index';
import Icon from '@Atoms/Icon';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  varientSize?: 'sm' | 'lg';
  iconStyle?: string;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      type,
      hasIcon = false,
      iconName = 'calendar_month',
      varientSize = 'lg',
      iconStyle = '',
      onClick,
      iconPosition = 'right',
      ...props
    },
    ref,
  ) => {
    const sizeVarient = {
      sm: 'laxutw-h-[2.25rem]',
      lg: 'laxutw-h-[2.75rem]',
    };
    if (hasIcon)
      return (
        <div
          className={cn(
            `laxutw-bg-white laxutw-flex laxutw-gap-[2px] laxutw-w-full laxutw-items-center laxutw-justify-center laxutw-rounded-md laxutw-border laxutw--[12px] file:laxutw-border-0 file:laxutw-bg-transparent file:laxutw-text-sm file:laxutw-font-medium placeholder:laxutw-text-gray-400 focus-visible:laxutw-outline-none focus-visible:laxutw-ring-2 focus-visible:laxutw-ring-ring focus-visible:laxutw-ring-offset-2 disabled:laxutw-cursor-not-allowed disabled:laxutw-opacity-5 disabled:laxutw-border-b-gray-600`,
            className,
            sizeVarient[varientSize],
          )}
        >
          {iconPosition === 'left' && (
            <Icon iconName={iconName} className={cn('laxutw-text-2xl ', iconStyle)} onClick={onClick} />
          )}
          <input
            type={type}
            className={cn(
              'laxutw-flex laxutw-pl-[8px] laxutw-h-full laxutw-w-full  laxutw-border-input laxutw-bg-transparent laxutw-text-sm laxutw-ring-offset-background file:laxutw-border-0 file:laxutw-bg-transparent file:laxutw-text-sm file:laxutw-font-medium placeholder:laxutw-text-gray-400  disabled:laxutw-cursor-not-allowed disabled:laxutw-opacity-50 focus:laxutw-border-none focus:laxutw-outline-none hover:laxutw-bg-teal-green-50 laxutw-transition-all laxutw-duration-200',
            )}
            ref={ref}
            onClick={onClick}
            {...props}
          />
          {iconPosition === 'right' && (
            <Icon
              iconName={iconName}
              className={cn('laxutw-text-2xl  laxutw-px-[12px]', iconStyle)}
              onClick={onClick}
            />
          )}
        </div>
      );

    return (
      <input
        type={type}
        className={cn(
          'laxutw-bg-white laxutw-flex laxutw-h-10 laxutw-w-full laxutw-rounded-md laxutw-border laxutw-border-gray-400 laxutw-bg-transparent laxutw-px-3 laxutw-py-2 laxutw-text-sm laxutw-ring-offset-background file:laxutw-border-0 file:laxutw-bg-transparent file:laxutw-text-sm file:laxutw-font-medium placeholder:laxutw-text-gray-400 focus-visible:laxutw-outline-none focus-visible:laxutw-ring-2 focus-visible:laxutw-ring-ring focus-visible:laxutw-ring-offset-2 disabled:laxutw-cursor-not-allowed disabled:laxutw-opacity-50 hover:laxutw-bg-teal-green-50 laxutw-transition-all laxutw-duration-200',
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

export { Input };

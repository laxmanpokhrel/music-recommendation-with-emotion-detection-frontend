/* eslint-disable react/prop-types */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@Utils/index';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        primary: ' bg-teal-green-400 hover:bg-teal-green-600 rounded-[8px] font-[700] text-white text-[14px]',
        secondary:
          ' border border-teal-green-400 hover:bg-teal-green-50 rounded-[8px] text-teal-green-400 font-[700] text-[14px]',
        link: 'rounded-[8px] outline-none text-teal-green-400 hover:text-teal-600 text-[14px]',
        'primary-disabled': 'bg-gray-400 cursor-default font-[700] text-white text-[14px]',
        'secondary-disabled': 'cursor-default border border-gray-400 text-gray-400 font-[700] text-[14px]',
        'link-disabled': 'cursor-default text-gray-400 font-[700] text-[14px]',
        drop: 'bg-white text-gray-900 font-[400] text-[14px] border border-gray-400 hover:bg-teal-green-50 focus:border-gray-900',
        outline: 'border border-input',
        ghost: 'border border-gray-400 text-gray-600 opacity-60 pointer-events-none',
        'icon-primary': 'border-none bg-white hover:bg-teal-green-50',
        'icon-secondary': 'border-none border-2 border-[#D7D7D7]',
      },
      size: {
        lg: 'h-[44px] px-8 rounded-md',
        sm: 'h-[36px] px-[16px] py-[18px] rounded-md',
        'lg-icon': 'p-[0.625rem] h-fit',
        'sm-icon': 'p-[0.375rem] h-fit',
        'drop-lg': 'h-[44px] px-[0.75rem] rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

/* eslint-disable react/prop-types */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@Utils/index';

const buttonVariants = cva(
  'naxatw-inline-flex naxatw-items-center naxatw-justify-center naxatw-rounded-md naxatw-text-sm naxatw-font-medium naxatw-transition-all focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-opacity-50 disabled:naxatw-pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        primary:
          ' naxatw-bg-teal-green-400 hover:naxatw-bg-teal-green-600 naxatw-rounded-[8px] naxatw-font-[700] naxatw-text-white naxatw-text-[14px]',
        secondary:
          ' naxatw-border naxatw-border-teal-green-400 hover:naxatw-bg-teal-green-50 naxatw-rounded-[8px] naxatw-text-teal-green-400 naxatw-font-[700] naxatw-text-[14px]',
        link: 'naxatw-rounded-[8px] naxatw-outline-none naxatw-text-teal-green-400 hover:naxatw-text-teal-600 naxatw-text-[14px]',
        'primary-disabled':
          'naxatw-bg-gray-400 naxatw-cursor-default naxatw-font-[700] naxatw-text-white naxatw-text-[14px]',
        'secondary-disabled':
          'naxatw-cursor-default naxatw-border naxatw-border-gray-400 naxatw-text-gray-400 naxatw-font-[700] naxatw-text-[14px]',
        'link-disabled': 'naxatw-cursor-default naxatw-text-gray-400 naxatw-font-[700] naxatw-text-[14px]',
        drop: 'naxatw-bg-white naxatw-text-gray-900 naxatw-font-[400] naxatw-text-[14px] naxatw-border naxatw-border-gray-400 hover:naxatw-bg-teal-green-50 focus:naxatw-border-gray-900',
        outline: 'naxatw-border naxatw-border-input',
        ghost: 'naxatw-border naxatw-border-gray-400 naxatw-text-gray-600 naxatw-opacity-60 naxatw-pointer-events-none',
        'icon-primary': 'naxatw-border-none naxatw-bg-white hover:naxatw-bg-teal-green-50',
        'icon-secondary': 'naxatw-border-none naxatw-border-2 naxatw-border-[#D7D7D7]',
      },
      size: {
        lg: 'naxatw-h-[44px] naxatw-px-8 naxatw-rounded-md',
        sm: 'naxatw-h-[36px] naxatw-px-[16px] naxatw-py-[18px] naxatw-rounded-md',
        'lg-icon': 'naxatw-p-[0.625rem] naxatw-h-fit',
        'sm-icon': 'naxatw-p-[0.375rem] naxatw-h-fit',
        'drop-lg': 'naxatw-h-[44px] naxatw-px-[0.75rem] naxatw-rounded-md',
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

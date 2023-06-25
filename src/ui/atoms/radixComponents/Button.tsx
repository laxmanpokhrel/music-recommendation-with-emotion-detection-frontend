/* eslint-disable react/prop-types */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@Utils/index';

const buttonVariants = cva(
  'laxutw-inline-flex laxutw-items-center laxutw-justify-center laxutw-rounded-md laxutw-text-sm laxutw-font-medium laxutw-transition-all focus-visible:laxutw-outline-none focus-visible:laxutw-ring-2 focus-visible:ring-ring focus-visible:laxutw-ring-offset-2 disabled:laxutw-opacity-50 disabled:laxutw-pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        primary:
          ' laxutw-bg-teal-green-400 hover:laxutw-bg-teal-green-600 laxutw-rounded-[8px] laxutw-font-[700] laxutw-text-white laxutw-text-[14px]',
        secondary:
          ' laxutw-border laxutw-border-teal-green-400 hover:laxutw-bg-teal-green-50 laxutw-rounded-[8px] laxutw-text-teal-green-400 laxutw-font-[700] laxutw-text-[14px]',
        link: 'laxutw-rounded-[8px] laxutw-outline-none laxutw-text-teal-green-400 hover:laxutw-text-teal-600 laxutw-text-[14px]',
        'primary-disabled':
          'laxutw-bg-gray-400 laxutw-cursor-default laxutw-font-[700] laxutw-text-white laxutw-text-[14px]',
        'secondary-disabled':
          'laxutw-cursor-default laxutw-border laxutw-border-gray-400 laxutw-text-gray-400 laxutw-font-[700] laxutw-text-[14px]',
        'link-disabled': 'laxutw-cursor-default laxutw-text-gray-400 laxutw-font-[700] laxutw-text-[14px]',
        drop: 'laxutw-bg-white laxutw-text-gray-900 laxutw-font-[400] laxutw-text-[14px] laxutw-border laxutw-border-gray-400 hover:laxutw-bg-teal-green-50 focus:laxutw-border-gray-900',
        outline: 'laxutw-border laxutw-border-input',
        ghost: 'laxutw-border laxutw-border-gray-400 laxutw-text-gray-600 laxutw-opacity-60 laxutw-pointer-events-none',
        'icon-primary': 'laxutw-border-none laxutw-bg-white hover:laxutw-bg-teal-green-50',
        'icon-secondary': 'laxutw-border-none laxutw-border-2 laxutw-border-[#D7D7D7]',
      },
      size: {
        lg: 'laxutw-h-[44px] laxutw-px-8 laxutw-rounded-md',
        sm: 'laxutw-h-[36px] laxutw-px-[16px] laxutw-py-[18px] laxutw-rounded-md',
        'lg-icon': 'laxutw-p-[0.625rem] laxutw-h-fit',
        'sm-icon': 'laxutw-p-[0.375rem] laxutw-h-fit',
        'drop-lg': 'laxutw-h-[44px] laxutw-px-[0.75rem] laxutw-rounded-md',
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

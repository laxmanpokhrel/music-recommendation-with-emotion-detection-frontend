import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@Utils/index';

const buttonVariants = cva(
  'naxatw-inline-flex naxatw-items-center naxatw-justify-center naxatw-rounded-md naxatw-text-sm naxatw-font-medium naxatw-transition-colors focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-opacity-50 disabled:naxatw-pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'naxatw-bg-primarycolor naxatw-text-white hover:bg-primarycolor/90',
        // destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'naxatw-border naxatw-border-input hover:naxatw-bg-primarycolor hover:naxatw-text-white',
        // secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        // ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'naxatw-underline-offset-4 hover:naxatw-underline naxatw-text-primarycolor',
      },
      size: {
        default: 'naxatw-h-10 naxatw-py-2 naxatw-px-4',
        sm: 'naxatw-h-9 naxatw-px-3 naxatw-rounded-md',
        lg: 'naxatw-h-11 naxatw-px-8 naxatw-rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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

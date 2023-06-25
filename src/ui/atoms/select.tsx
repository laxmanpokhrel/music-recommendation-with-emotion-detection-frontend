import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@Utils/index';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className = '', children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'laxutw-flex laxutw-h-10 laxutw-w-full laxutw-items-center laxutw-justify-between laxutw-rounded-md laxutw-border border-input laxutw-bg-transparent laxutw-px-3 laxutw-py-2 laxutw-text-sm ring-offset-background placeholder:text-muted-foreground focus:laxutw-outline-none focus:laxutw-ring-2 focus:ring-ring focus:laxutw-ring-offset-2 disabled:laxutw-cursor-not-allowed disabled:laxutw-opacity-50',
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="laxutw-h-4 laxutw-w-4 laxutw-opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'laxutw-relative laxutw-z-50 min-w-[8rem] laxutw-overflow-hidden laxutw-rounded-md laxutw-border bg-popover text-popover-foreground laxutw-shadow-md animate-in fade-in-80',
        position === 'popper' && 'translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          'laxutw-p-1',
          position === 'popper' &&
            'laxutw-h-[var(--radix-select-trigger-height)] laxutw-w-full laxutw-min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('laxutw-py-1.5 laxutw-pl-8 laxutw-pr-2 laxutw-text-sm laxutw-font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'laxutw-relative laxutw-flex laxutw-w-full laxutw-cursor-default laxutw-select-none laxutw-items-center laxutw-rounded-sm laxutw-py-1.5 laxutw-pl-8 laxutw-pr-2 laxutw-text-sm laxutw-outline-none focus:laxutw-bg-primarycolor focus:text-accent-foreground data-[disabled]:laxutw-pointer-events-none data-[disabled]:laxutw-opacity-50',
    )}
    {...props}
  >
    <span className="laxutw-absolute laxutw-left-2 laxutw-flex laxutw-h-3.5 laxutw-w-3.5 laxutw-items-center laxutw-justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="laxutw-h-4 laxutw-w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('laxutw--mx-1 laxutw-my-1 laxutw-h-px laxutw-bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator };

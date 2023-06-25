/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';

import { cn } from '@Utils/index';
import { Dialog, DialogContent } from './Dialog';

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      'laxutw-flex laxutw-h-full laxutw-w-full laxutw-flex-col laxutw-overflow-hidden laxutw-rounded-md bg-popover',
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="laxutw-overflow-hidden laxutw-p-0 laxutw-shadow-2xl">
        <Command className="[&_[cmdk-group-heading]]:laxutw-px-2 [&_[cmdk-group-heading]]:laxutw-font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:laxutw-pt-0 [&_[cmdk-group]]:laxutw-px-2 [&_[cmdk-input-wrapper]_svg]:laxutw-h-5 [&_[cmdk-input-wrapper]_svg]:laxutw-w-5 [&_[cmdk-input]]:laxutw-h-12 [&_[cmdk-item]]:laxutw-px-2 [&_[cmdk-item]]:laxutw-py-3 [&_[cmdk-item]_svg]:laxutw-h-5 [&_[cmdk-item]_svg]:laxutw-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="laxutw-flex laxutw-items-center laxutw-border-b laxutw-px-3" cmdk-input-wrapper="">
    <Search className="laxutw-mr-2 laxutw-h-4 laxutw-w-4 laxutw-shrink-0 laxutw-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'laxutw-flex laxutw-h-11 laxutw-w-full laxutw-rounded-md laxutw-bg-transparent laxutw-py-3 laxutw-text-sm laxutw-outline-none placeholder:text-muted-foreground disabled:laxutw-cursor-not-allowed disabled:laxutw-opacity-50',
        className,
      )}
      {...props}
    />
    <span className="laxutw-flex laxutw-justify-center laxutw-items-center">
      <i className="material-symbols-outlined laxutw-font-thin hover:laxutw-bg-teal-50 laxutw-cursor-pointer laxutw-rounded ">
        close
      </i>
    </span>
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('laxutw-max-h-[300px] laxutw-overflow-y-auto laxutw-overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="laxutw-py-6 laxutw-text-center laxutw-text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'laxutw-overflow-hidden laxutw-p-1 text-foreground [&_[cmdk-group-heading]]:laxutw-px-2 [&_[cmdk-group-heading]]:laxutw-py-1.5 [&_[cmdk-group-heading]]:laxutw-text-xs [&_[cmdk-group-heading]]:laxutw-font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-laxutw-mx-1 laxutw-h-px laxutw-bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      'laxutw-relative laxutw-flex laxutw-cursor-default laxutw-select-none laxutw-items-center laxutw-rounded-sm laxutw-px-2 laxutw-py-1.5 laxutw-text-sm laxutw-outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:laxutw-pointer-events-none data-[disabled]:laxutw-opacity-50 hover:laxutw-bg-blue-50',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('laxutw-ml-auto laxutw-text-xs laxutw-tracking-widest text-muted-foreground', className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};

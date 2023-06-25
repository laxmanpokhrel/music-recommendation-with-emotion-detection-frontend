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
      'naxatw-flex naxatw-h-full naxatw-w-full naxatw-flex-col naxatw-overflow-hidden naxatw-rounded-md bg-popover',
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
      <DialogContent className="naxatw-overflow-hidden naxatw-p-0 naxatw-shadow-2xl">
        <Command className="[&_[cmdk-group-heading]]:naxatw-px-2 [&_[cmdk-group-heading]]:naxatw-font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:naxatw-pt-0 [&_[cmdk-group]]:naxatw-px-2 [&_[cmdk-input-wrapper]_svg]:naxatw-h-5 [&_[cmdk-input-wrapper]_svg]:naxatw-w-5 [&_[cmdk-input]]:naxatw-h-12 [&_[cmdk-item]]:naxatw-px-2 [&_[cmdk-item]]:naxatw-py-3 [&_[cmdk-item]_svg]:naxatw-h-5 [&_[cmdk-item]_svg]:naxatw-w-5">
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
  <div className="naxatw-flex naxatw-items-center naxatw-border-b naxatw-px-3" cmdk-input-wrapper="">
    <Search className="naxatw-mr-2 naxatw-h-4 naxatw-w-4 naxatw-shrink-0 naxatw-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'naxatw-flex naxatw-h-11 naxatw-w-full naxatw-rounded-md naxatw-bg-transparent naxatw-py-3 naxatw-text-sm naxatw-outline-none placeholder:text-muted-foreground disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50',
        className,
      )}
      {...props}
    />
    <span className="naxatw-flex naxatw-justify-center naxatw-items-center">
      <i className="material-symbols-outlined naxatw-font-thin hover:naxatw-bg-teal-50 naxatw-cursor-pointer naxatw-rounded ">
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
    className={cn('naxatw-max-h-[300px] naxatw-overflow-y-auto naxatw-overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="naxatw-py-6 naxatw-text-center naxatw-text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'naxatw-overflow-hidden naxatw-p-1 text-foreground [&_[cmdk-group-heading]]:naxatw-px-2 [&_[cmdk-group-heading]]:naxatw-py-1.5 [&_[cmdk-group-heading]]:naxatw-text-xs [&_[cmdk-group-heading]]:naxatw-font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
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
    className={cn('-naxatw-mx-1 naxatw-h-px naxatw-bg-border', className)}
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
      'naxatw-relative naxatw-flex naxatw-cursor-default naxatw-select-none naxatw-items-center naxatw-rounded-sm naxatw-px-2 naxatw-py-1.5 naxatw-text-sm naxatw-outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:naxatw-pointer-events-none data-[disabled]:naxatw-opacity-50 hover:naxatw-bg-blue-50',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn('naxatw-ml-auto naxatw-text-xs naxatw-tracking-widest text-muted-foreground', className)}
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

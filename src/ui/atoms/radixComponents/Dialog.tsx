/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@Utils/index';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, children, ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="naxatw-fixed naxatw-inset-0 naxatw-z-50 naxatw-flex naxatw-items-start naxatw-justify-center sm:naxatw-items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'naxatw-fixed naxatw-inset-0 naxatw-z-50 naxatw-bg-background/80 naxatw-backdrop-blur-sm naxatw-transition-all naxatw-duration-100 data-[state=closed]:naxatw-animate-out data-[state=closed]:naxatw-fade-out data-[state=open]:naxatw-fade-in',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'naxatw-fixed naxatw-z-50 naxatw-grid naxatw-w-full naxatw-gap-4 naxatw-rounded-b-lg naxatw-border naxatw-bg-background naxatw-p-6 naxatw-shadow-lg naxatw-animate-in data-[state=open]:naxatw-fade-in-90 data-[state=open]:naxatw-slide-in-from-bottom-10 sm:naxatw-max-w-lg sm:naxatw-rounded-lg sm:naxatw-zoom-in-90 data-[state=open]:sm:naxatw-slide-in-from-bottom-0',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="naxatw-absolute naxatw-right-4 naxatw-top-4 naxatw-rounded-sm naxatw-opacity-70 naxatw-ring-offset-background naxatw-transition-opacity hover:naxatw-opacity-100 focus:naxatw-outline-none focus:naxatw-ring-2 focus:naxatw-ring-ring focus:naxatw-ring-offset-2 disabled:naxatw-pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="naxatw-h-4 naxatw-w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('naxatw-flex naxatw-flex-col naxatw-space-y-1.5 naxatw-text-center sm:naxatw-text-left', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'naxatw-flex naxatw-flex-col-reverse sm:naxatw-flex-row sm:naxatw-justify-end sm:naxatw-space-x-2',
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('naxatw-text-lg naxatw-font-semibold naxatw-leading-none naxatw-tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('naxatw-text-sm text-muted-foreground', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };

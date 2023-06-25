/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@Utils/index';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ className, children, ...props }: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="laxutw-fixed laxutw-inset-0 laxutw-z-50 laxutw-flex laxutw-items-start laxutw-justify-center sm:laxutw-items-center">
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
      'laxutw-fixed laxutw-inset-0 laxutw-z-50 laxutw-bg-background/80 laxutw-backdrop-blur-sm laxutw-transition-all laxutw-duration-100 data-[state=closed]:laxutw-animate-out data-[state=closed]:laxutw-fade-out data-[state=open]:laxutw-fade-in',
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
        'laxutw-fixed laxutw-z-50 laxutw-grid laxutw-w-full laxutw-gap-4 laxutw-rounded-b-lg laxutw-border laxutw-bg-background laxutw-p-6 laxutw-shadow-lg laxutw-animate-in data-[state=open]:laxutw-fade-in-90 data-[state=open]:laxutw-slide-in-from-bottom-10 sm:laxutw-max-w-lg sm:laxutw-rounded-lg sm:laxutw-zoom-in-90 data-[state=open]:sm:laxutw-slide-in-from-bottom-0',
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="laxutw-absolute laxutw-right-4 laxutw-top-4 laxutw-rounded-sm laxutw-opacity-70 laxutw-ring-offset-background laxutw-transition-opacity hover:laxutw-opacity-100 focus:laxutw-outline-none focus:laxutw-ring-2 focus:laxutw-ring-ring focus:laxutw-ring-offset-2 disabled:laxutw-pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="laxutw-h-4 laxutw-w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('laxutw-flex laxutw-flex-col laxutw-space-y-1.5 laxutw-text-center sm:laxutw-text-left', className)}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'laxutw-flex laxutw-flex-col-reverse sm:laxutw-flex-row sm:laxutw-justify-end sm:laxutw-space-x-2',
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
    className={cn('laxutw-text-lg laxutw-font-semibold laxutw-leading-none laxutw-tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('laxutw-text-sm text-muted-foreground', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };

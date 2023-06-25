import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@Utils/index';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'laxutw-inline-flex laxutw-h-10 laxutw-items-center laxutw-justify-center laxutw-gap-1 laxutw-rounded-lg laxutw-bg-gray-200 laxutw-p-1 laxutw-text-gray-600',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'laxutw-inline-flex laxutw-items-center laxutw-justify-center laxutw-whitespace-nowrap laxutw-rounded-lg hover:laxutw-bg-teal-50 laxutw-px-3 laxutw-py-1.5 laxutw-text-sm laxutw-font-medium laxutw-ring-offset-white laxutw-transition-all focus-visible:laxutw-outline-none focus-visible:laxutw-ring-2 focus-visible:laxutw-ring-ring focus-visible:laxutw-ring-offset-2 disabled:laxutw-pointer-events-none disabled:laxutw-opacity-50 data-[state=active]:laxutw-bg-white data-[state=active]:laxutw-text-black data-[state=active]:laxutw-shadow-sm',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'laxutw-mt-2 laxutw-ring-offset-background focus-visible:laxutw-outline-none focus-visible:laxutw-ring-2 focus-visible:laxutw-ring-ring focus-visible:laxutw-ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

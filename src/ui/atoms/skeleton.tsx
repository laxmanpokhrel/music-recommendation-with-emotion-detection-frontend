import { HTMLAttributes } from 'react';

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`laxutw-animate-pulse laxutw-rounded-md laxutw-bg-muted ${className}`} {...props} />;
}

export { Skeleton };

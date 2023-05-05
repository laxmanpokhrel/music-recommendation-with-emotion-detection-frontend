import { HTMLAttributes } from 'react';

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={'naxatw-animate-pulse naxatw-rounded-md naxatw-bg-muted ' + className} {...props} />;
}

export { Skeleton };

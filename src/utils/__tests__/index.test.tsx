import { Skeleton } from '@Atoms/skeleton';
import React, { ReactNode } from 'react';

export function generateTestSkeleton(x: any, isDirectChild: boolean = false): JSX.Element {
  const y = x();
  console.log('Y: ', y);
  console.log('Y props.children: ', y.props.children);
  const children = y.props.children;
  const skeleton = children?.map((child: any) => {
    return <Skeleton className={`${child.props?.className} naxatw-min-h-[4rem] naxatw-bg-gray-500 naxatw-border-4 `} />;
  });
  console.log('😎 - file: index.test.tsx:12 - skeleton:', skeleton);

  return <div className={x.props?.className}>{skeleton}</div>;
}

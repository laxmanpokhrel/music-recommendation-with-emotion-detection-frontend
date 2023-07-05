/* eslint-disable react/jsx-props-no-spreading */
import { IDivProps } from '@Schemas/interfaces';
import { cn } from '@Utils/index';

export default function BindContentContainer({ children, className, ...props }: IDivProps) {
  return (
    <div {...props} className={cn('max-w-[90rem] m-auto', className)}>
      {children}
    </div>
  );
}

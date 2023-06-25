/* eslint-disable react/jsx-props-no-spreading */
import { IDivProps } from '@Schemas/interfaces';
import { cn } from '@Utils/index';

export default function BindContentContainer({ children, className, ...props }: IDivProps) {
  return (
    <div {...props} className={cn('laxutw-max-w-[90rem] laxutw-m-auto', className)}>
      {children}
    </div>
  );
}

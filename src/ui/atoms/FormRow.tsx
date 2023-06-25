import { IDivProps } from '@Schemas/interfaces';
import { cn } from '@Utils/index';

export default function FormRow({ children, className }: IDivProps) {
  return (
    <div className={cn('laxutw-flex laxutw-items-start laxutw-gap-[0.75rem] laxutw-w-full', className)}>{children}</div>
  );
}

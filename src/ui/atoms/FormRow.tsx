import { IDivProps } from '@Schemas/interfaces';
import { cn } from '@Utils/index';

export default function FormRow({ children, className }: IDivProps) {
  return (
    <div className={cn('naxatw-flex naxatw-items-start naxatw-gap-[0.75rem] naxatw-w-full', className)}>{children}</div>
  );
}

import { IDivProps } from '@Schemas/interfaces';
import { cn } from '@Utils/index';

export default function FormRow({ children, className }: IDivProps) {
  return <div className={cn('flex items-start gap-[0.75rem] w-full', className)}>{children}</div>;
}

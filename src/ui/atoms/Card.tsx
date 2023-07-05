import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@Utils/index';
import Icon from './Icon';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <section className={cn('rounded-xl shadow-xl', className)}>
      {children}
      <div className="flex justify-end w-full px-4 pb-3   transition-all duration-300">
        <Icon iconName="play_circle" className="text-6xl text-orange-400 hover:text-[#ffffff]" />
      </div>
    </section>
  );
};

export default Card;

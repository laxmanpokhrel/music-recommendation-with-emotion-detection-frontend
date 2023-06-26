import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@Utils/index';
import Icon from './Icon';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <section className={cn('laxutw-rounded-xl laxutw-shadow-xl', className)}>
      {children}
      <div className="laxutw-flex laxutw-justify-end laxutw-w-full laxutw-px-4 laxutw-pb-3   laxutw-transition-all laxutw-duration-300">
        <Icon iconName="play_circle" className="laxutw-text-6xl laxutw-text-orange-400 hover:laxutw-text-[#ffffff]" />
      </div>
    </section>
  );
};

export default Card;

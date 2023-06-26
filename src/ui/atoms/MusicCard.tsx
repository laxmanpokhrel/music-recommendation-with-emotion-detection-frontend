import { HTMLAttributes } from 'react';
import { cn } from '@Utils/index';

interface MusicCardType extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  title?: string;
  description?: string;
}

const MusicCard = ({ image, title, description, className }: MusicCardType) => {
  return (
    <section
      className={cn(
        'laxutw-min-h-[20rem] laxutw-flex laxutw-flex-col laxutw-justify-between laxutw-shadow-xl laxutw-overflow-hidden laxutw-group laxutw-rounded-xl',
        className,
      )}
    >
      <img
        src={image}
        alt="card cover"
        className="object-cover laxutw-h-[20rem] laxutw-rounded-t-xl group-hover:laxutw-scale-[1.05] laxutw-transition-all laxutw-duration-150 laxutw-ease-in"
      />
      <div className="laxutw-flex laxutw-flex-col laxutw-justify-center laxutw-w-full laxutw-flex-1 laxutw-px-4 laxutw-pt-2  group-hover:laxutw-translate-y-4 laxutw-transition-all laxutw-duration-150 laxutw-ease-in">
        <div className="laxutw-font-extrabold laxutw-text-2xl laxutw-text-white  group-hover:laxutw-text-3xl  laxutw-transition-all laxutw-duration-150 laxutw-ease-in">
          {title}
        </div>
        <div className="laxutw-text-white laxutw-font-light laxutw-text-lg group-hover:laxutw-text-opacity-0 laxutw-transition-all laxutw-duration-150 laxutw-ease-in">
          {description}
        </div>
      </div>
    </section>
  );
};

export default MusicCard;

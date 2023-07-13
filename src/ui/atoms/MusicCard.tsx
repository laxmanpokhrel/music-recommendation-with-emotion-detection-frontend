import { cn } from '@Utils/index';
import Icon from './Icon';

interface MusicCardType /* extends HTMLAttributes<HTMLDivElement>*/ {
  image?: string;
  title?: string;
  description?: string;
}

const MusicCard = ({ image, title, description, className }: MusicCardType) => {
  return (
    <section
      className={cn(
        'min-h-[12rem] flex flex-col justify-between shadow-xl overflow-hidden group rounded-xl',
        className,
      )}
    >
      <img
        src={image}
        alt="card cover"
        className="object-cover h-[12rem] rounded-t-xl  transition-all duration-150 ease-in"
      />
      <div className="flex flex-col justify-center w-full flex-1 px-4 pt-2  transition-all duration-150 ease-in">
        <div className="font-extrabold text-2xl text-white    transition-all duration-150 ease-in">{title}</div>
        <div className="text-white font-light text-lg  transition-all duration-150 ease-in">{description}</div>
      </div>
    </section>
  );
};

export default MusicCard;

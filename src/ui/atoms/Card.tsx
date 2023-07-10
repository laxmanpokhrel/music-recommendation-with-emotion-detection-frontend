import { cn } from '@Utils/index';
import { HTMLAttributes, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { authenticatedApi } from '../../api/config';
import Icon from './Icon';
import { Select, SelectContent, SelectItem, SelectTrigger } from './radixComponents/Select';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  const { data } = useQuery('playlist', () => {
    return authenticatedApi(`${process.env.API_URL}/playlists/own`);
  });
  const playlists = data?.data?.data;
  return (
    <section className={cn('rounded-xl shadow-xl', className)}>
      {children}
      <div className="flex items-center justify-end w-full px-4 pb-3   transition-all duration-300">
        <Icon iconName="play_circle" className="text-6xl text-orange-400 hover:text-[#ffffff]" />
        <Select>
          <SelectTrigger className="w-fit flex justify-center items-center">
            <Icon iconName="playlist_add" className="text-2xl text-orange-400 hover:text-[#ffffff]" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {playlists?.map((playlist: any) => {
              return <SelectItem value={playlist.id}>{playlist.name}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
};

export default Card;

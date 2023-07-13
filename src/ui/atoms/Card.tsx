import { cn } from '@Utils/index';
import { HTMLAttributes, ReactNode } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { authenticatedApi } from '../../api/config';
import Icon from './Icon';
import { Select, SelectContent, SelectItem } from './radixComponents/Select';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  id: string;
}

const Card = ({ children, className, id }: CardProps) => {
  const queryClient = useQueryClient();
  const { data } = useQuery('playlist', () => {
    return authenticatedApi(`${process.env.API_URL}/playlists/own`);
  });
  const {
    mutate,
    error,
    data: response,
  } = useMutation({
    mutationFn: (payload) => {
      return authenticatedApi.post(`${process.env.API_URL}/music/toggle-like`, payload);
    },
    onSuccess: () => {
      queryClient.refetchQueries('liked_musics');
    },
  });
  toast.dismiss();
  if (response) {
    toast.success(response?.data?.message);
  } else if (error) {
    toast.error(error?.response?.data?.message);
  }

  const playlists = data?.data?.data;
  return (
    <section className={cn('rounded-xl shadow-xl', className)}>
      {children}
      <div className="flex items-center justify-end w-full px-4 pb-3   transition-all duration-300">
        <Icon iconName="play_circle" className="text-6xl text-orange-400 hover:text-[#ffffff]" />
        <AiFillHeart
          size={30}
          color="white"
          onClick={() => {
            mutate({ music: id.toString() });
          }}
        />
        <Select>
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

{
  /* <SelectTrigger className="w-fit flex justify-center items-center">
  <Icon iconName="playlist_add" className="text-2xl text-orange-400 hover:text-[#ffffff]" />
</SelectTrigger> */
}

import { Button } from '@Atoms/radixComponents/Button';
import { useNavigate } from 'react-router-dom';
import Icon from '@Atoms/Icon';
import { PlaylistCreateService } from '../_lib_';

export default function YourPlaylist() {
  const { data } = PlaylistCreateService.fetchData();
  const navigate = useNavigate();
  if (!data?.data?.length)
    return (
      <div className="w-full flex flex-col justify-center items-center gap-4 h-[92vh]">
        <p className="text-2xl text-gray-600">No Playlist created Yet</p>
        <Button type="button" onClick={() => navigate('/create-playlist')}>
          Create One
        </Button>
      </div>
    );

  return (
    <div className="home-page-template text-lg w-full h-full grid pt-10">
      <div className="grid grid-cols-3 gap-6 w-3/5 m-auto">
        {data?.data?.map((item: any) => {
          return (
            <div className="bg-gray-200 p-2 rounded-lg shadow-xl group min-w-[10rem] border border-gray-300">
              <h4>{item.name}</h4>
              {item.musics.map((itm: any) => (
                <h6 className="pl-4 flex gap-1 w-fit border p-2 hover:bg-gray-400 items-center justify-center">
                  <p className="flex-1">{itm.title}</p>
                  <Icon iconName="play_arrow" className="cursor-pointer" />
                </h6>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

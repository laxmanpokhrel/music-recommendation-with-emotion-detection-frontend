import Card from '@Atoms/Card';
import MusicCard from '@Atoms/MusicCard';
import { Button } from '@Atoms/radixComponents/Button';
import { useNavigate } from 'react-router-dom';
import { PlaylistCreateService } from '../_lib_';

export default function YourPlaylist() {
  const { data } = PlaylistCreateService.fetchData();
  const navigate = useNavigate();
  if (!data?.length)
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
        {data?.data.map((item: any) => {
          return (
            <div key={item.title} className="group transition-all duration-150 ease-in rounded-lg overflow-hidden">
              <Card
                className="bg-gray-950 group-hover:scale-[1.05] transition-all duration-150 ease-in"
                key={item.title}
              >
                <MusicCard
                  image={item.media.find((med: Record<string, any>) => med.type === 'THUMBNAIL').path}
                  title={item.title}
                  description={item.genre}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

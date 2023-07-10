import { LikedMusicService } from '../_lib_';
import Card from '../atoms/Card';
import MusicCard from '../atoms/MusicCard';

export default function LikedMusics() {
  const { data } = LikedMusicService.fetchData();

  return (
    <div className="home-page-template text-lg w-full h-full grid pt-10">
      <div className="grid grid-cols-3 gap-6 w-3/5 m-auto">
        {data?.data?.map((item: any) => {
          return (
            <div key={item.id} className="group transition-all duration-150 ease-in rounded-lg">
              <Card
                className="bg-gray-950 group-hover:scale-[1.05] transition-all duration-150 ease-in"
                key={item.title}
              >
                <MusicCard
                  image={item.media?.find((el: any) => el.type === 'THUMBNAIL')?.path}
                  title={item.title}
                  description={item.genre.substring(0, 30)}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

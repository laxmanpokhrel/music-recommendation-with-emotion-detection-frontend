import Card from '@Atoms/Card';
import MusicCard from '@Atoms/MusicCard';
import { MusicService } from '../_lib_';

export default function YourMusic() {
  const { data } = MusicService.fetchData();
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

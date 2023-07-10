import Card from '@Atoms/Card';
import MusicCard from '@Atoms/MusicCard';
import { MusicService } from '../_lib_';

export default function HomePageTemplate(): JSX.Element {
  const { data: music } = MusicService.fetchData();

  return (
    <div className="home-page-template text-lg w-full h-full grid pt-10">
      <div className="grid grid-cols-3 gap-6 w-3/5 m-auto">
        {music?.data?.map((data: any) => {
          return (
            <div key={data.id} className="group transition-all duration-150 ease-in rounded-lg">
              <Card
                className="bg-gray-950 group-hover:scale-[1.05] transition-all duration-150 ease-in"
                key={data.title}
              >
                <MusicCard
                  image={data.media?.find((el: any) => el.type === 'THUMBNAIL')?.path}
                  title={data.title}
                  description={data.genre.substring(0, 30)}
                />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

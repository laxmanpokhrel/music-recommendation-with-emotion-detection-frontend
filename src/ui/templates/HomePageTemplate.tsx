import Card from '@Atoms/Card';
import MusicCard from '@Atoms/MusicCard';
import { TestMusicData } from '@Constants/_test_/index.test';

export default function HomePageTemplate(): JSX.Element {
  return (
    <div className="home-page-template text-lg w-full h-full grid pt-10">
      <div className="grid grid-cols-3 gap-6 w-3/5 m-auto">
        {TestMusicData.map((data) => {
          return (
            <div className="group transition-all duration-150 ease-in rounded-lg">
              <Card
                className="bg-gray-950 group-hover:scale-[1.05] transition-all duration-150 ease-in"
                key={data.title}
              >
                <MusicCard image={data.image} title={data.title} description={data.description.substring(0, 30)} />
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import Card from '@Atoms/Card';
import MusicCard from '@Atoms/MusicCard';
import { TestMusicData } from '@Constants/_test_/index.test';

export default function HomePageTemplate(): JSX.Element {
  return (
    <div className="home-page-template laxutw-text-lg laxutw-w-full laxutw-h-full laxutw-grid laxutw-pt-10">
      <div className="laxutw-grid laxutw-grid-cols-3 laxutw-gap-6 laxutw-w-3/5 laxutw-m-auto">
        {TestMusicData.map((data) => {
          return (
            <div className="laxutw-group laxutw-transition-all laxutw-duration-150 laxutw-ease-in laxutw-rounded-lg">
              <Card
                className="laxutw-bg-gray-950 group-hover:laxutw-scale-[1.05] laxutw-transition-all laxutw-duration-150 laxutw-ease-in"
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

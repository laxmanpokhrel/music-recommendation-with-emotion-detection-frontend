/* eslint-disable react/no-array-index-key */
import { useEffect, useMemo } from 'react';
import Card from '@Atoms/Card';
import { useQuery } from 'react-query';
import { Mood } from '../../constants/type';
import MusicCard from '../atoms/MusicCard';

export default function MooDetector() {
  const { data, refetch: refetchMood } = useQuery('mood', () =>
    fetch(`${process.env.AI_URL}/emotion-parameters`).then((res) => res.json()),
  );
  // * Get the mood from the data having highest value
  const mood = useMemo(() => {
    return Object.keys(data ?? {}).reduce((a, b) => (data[a] > data[b] ? a : b), 'NONE') as Mood;
  }, [data]);

  const { data: recommendedMusics, refetch: refetchSong } = useQuery('recommended-songs', () =>
    fetch(`${process.env.API_URL}/music?type=${mood.toUpperCase()}`).then((res) => res.json()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      refetchMood();
      refetchSong();
    }, 2000);
    return () => clearInterval(interval);
  }, [refetchMood, refetchSong]);

  return (
    <div className="w-full  h-[80vh] flex gap-8 p-4 relative items-start justify-start">
      <div className="flex-2 w-full h-full">
        <iframe title="camera" className="w-full h-full" src={`${process.env.AI_URL}/video`} />
      </div>
      <div className="absolute right-0 h-[90%] w-1/5">
        <div className="songs  flex flex-col flex-1 overflow-y-auto gap-4 h-full items-start justify-start scrollbar">
          {recommendedMusics?.data?.map((item: any, index: number) => (
            <Card
              id={item?.id}
              music={item?.media?.find((x: any) => x.type === 'MUSIC')}
              className="bg-gray-500 w-full"
            >
              <MusicCard
                key={index}
                title={item.title}
                image={item?.media?.find((el: any) => el.type === 'THUMBNAIL')?.path}
                description={item.genre}
              />
            </Card>
          ))}
        </div>
        {/* <Button variant="link" className="!px-4 !py-0 !p-0" onClick={() => navigate('/explore-more')}>
          See More
        </Button> */}
      </div>
    </div>
  );
}

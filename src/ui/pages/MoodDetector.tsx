/* eslint-disable react/no-array-index-key */
import { Button } from '@Atoms/radixComponents/Button';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Mood } from '../../constants/type';
import MusicCard from '../atoms/MusicCard';

export default function MooDetector() {
  const navigate = useNavigate();
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
    <div className="w-full  h-[80vh] flex gap-8 p-4">
      <div className="flex-2  w-fit">
        <iframe title="camera" className="w-full h-full " src={`${process.env.AI_URL}/video`} />
      </div>
      <div>
        <div className="songs flex-1 flex gap-4 items-start justify-start">
          {recommendedMusics?.data?.map((__item, index: number) => (
            <MusicCard
              key={index}
              title={__item.title}
              image={__item?.media?.find((el) => el.type === 'THUMBNAIL')?.path}
              description={__item.genre}
            />
          ))}
        </div>
        <Button variant="link" className="!px-4 !py-0 !p-0" onClick={() => navigate('/explore-more')}>
          See More
        </Button>
      </div>
    </div>
  );
}

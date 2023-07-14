/* eslint-disable react/no-array-index-key */
import { api } from '@Api/config';
import Card from '@Atoms/Card';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Mood } from '../../constants/type';
import { musicPlayerActions } from '../../store/actions/musicPlayerActions';
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
  const { data: _, refetch: closeCamera } = useQuery(
    'close-camera',
    () => api.get(`${process.env.AI_URL}/close-camera`),
    {
      enabled: false,
    },
  );
  const { refetch: openCamera } = useQuery('close-camera', () => api.get(`${process.env.AI_URL}/open-camera`), {
    enabled: false,
  });
  const { data: initializeData } = useQuery('initialize-data', () => api.get(`${process.env.AI_URL}/initialize`), {});
  const music = useSelector((state: any) => state.music.music);
  const playStatus = useSelector((state: any) => state.music.play);
  console.log('🚀 ~ file: MoodDetector.tsx:35 ~ MooDetector ~ playStatus:', playStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      refetchMood();
      refetchSong();
    }, 3000);
    return () => clearInterval(interval);
  }, [refetchMood, refetchSong]);

  useEffect(() => {
    openCamera();
    return () => {
      closeCamera();
    };
  }, [openCamera, closeCamera]);

  useEffect(() => {
    if (recommendedMusics && !playStatus && !music) {
      dispatch(musicPlayerActions.setMusic(recommendedMusics?.data[0]));
    }
  }, [recommendedMusics]);

  return (
    <>
      <p>Happy: {data?.Happy}</p>
      <p>Sad: {data?.Sad}</p>
      <p>Neutral: {data?.Neutral}</p>

      <div className="w-full h-[80vh] flex gap-8 p-4 items-start justify-start">
        <div className="user-video w-2/5">.</div>
        <div className="h-[90%] w-3/5">
          <div className="songs flex  flex-1 overflow-y-auto gap-4 h-full items-start justify-start scrollbar">
            {recommendedMusics?.data?.map((item: any, index: number) => (
              <Card id={item?.id} music={item} className="bg-gray-500 w-full">
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
    </>
  );
}

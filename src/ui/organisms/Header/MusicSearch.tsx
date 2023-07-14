import { Autocomplete, Loader } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { api } from '../../../api/config';
import { musicPlayerActions } from '../../../store/actions/musicPlayerActions';

const MusicSearch = () => {
  const timeoutRef = useRef<number>(-1);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);
  const [selectedMusic, setSelectedMusic] = useState<any | null>(null);
  const { data: musics, refetch: refetchMusic } = useQuery(
    'search-music',
    () => api.get(`${process.env.API_URL}/music?query=${value}`),
    {
      enabled: false,
    },
  );

  useEffect(() => {
    if (musics?.data?.data) {
      setData(musics?.data?.data?.map((item: any) => item.title));
      const searchedMusic = musics?.data?.data?.find((item: any) => item.title === value);
      console.log('🚀 ~ file: MusicSearch.tsx:27 ~ useEffect ~ searchedMusic:', searchedMusic);
      if (searchedMusic) {
        setSelectedMusic(searchedMusic);
      }
    }
  }, [musics]);

  useEffect(() => {
    if (selectedMusic) {
      const music = selectedMusic?.media?.find((item: any) => item.type === 'MUSIC');
      dispatch(musicPlayerActions.setMusic(music));
      dispatch(musicPlayerActions.togglePlay(true));
    }
  }, [selectedMusic]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current);
    setValue(val);
    setData([]);

    if (val.trim().length === 0) {
      setLoading(false);
    } else {
      setLoading(true);
      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        refetchMusic();
      }, 1000);
    }
  };
  return (
    <Autocomplete
      className="w-full"
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      placeholder="Search Music"
    />
  );
};

export default MusicSearch;

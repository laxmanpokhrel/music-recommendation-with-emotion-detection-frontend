// import { useSelector } from 'react-redux';

// export default function MusicPlayer() {
//   const music = useSelector((state: any) => state.music.music);
//   console.log('🚀 ~ file: index.tsx:5 ~ MusicPlayer ~ music:', music?.path);
//   return (
//     <div className="fixed bottom-0 w-full h-20 bg-gray-100 shadow-2xl px-4 py-2">
//       <audio controls className="w-full bg-gray-100">
//         <source src={music?.path} type="audio/ogg" />
//       </audio>
//     </div>
//   );
// }

// import { useEffect, useRef } from 'react';
// import { useSelector } from 'react-redux';

// export default function MusicPlayer() {
//   const music = useSelector((state: any) => state.music.music);
//   console.log('🚀 ~ file: index.tsx:20 ~ MusicPlayer ~ music:', music);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     const audioElement = audioRef.current;

//     if (audioElement) {
//       if (music && music.path) {
//         audioElement.play();
//       } else {
//         audioElement.pause();
//       }
//     }
//   }, [music]);

//   return (
//     <div className="fixed bottom-0 w-full h-20 bg-gray-100 shadow-2xl px-4 py-2">
//       <audio ref={audioRef} controls className="w-full bg-gray-100">
//         <source src={music?.path} type="audio/ogg" />
//       </audio>
//     </div>
//   );
// }

import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../../api/config';
import { musicPlayerActions } from '../../../store/actions/musicPlayerActions';

export default function MusicPlayer() {
  const music = useSelector((state: any) => state.music.music);
  const playStatus = useSelector((state: any) => state.music.play);
  const { data: similarMusic, refetch } = useQuery(
    'similar-music',
    () => api.get(`${process.env.API_URL}/music/similar/${music?.id}}`),
    {
      enabled: false,
    },
  );
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  useEffect(() => {
    dispatch(musicPlayerActions.setMusic(similarMusic?.data?.data));
    dispatch(musicPlayerActions.togglePlay(true));
  }, [similarMusic]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      try {
        if (music) {
          let path = music?.media?.find((el) => el.type === 'MUSIC')?.path;
          audioElement.src = path;
          audioElement.play();
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  }, [music, playStatus]);

  const musicPath = music?.media?.find((el: any) => el.type === 'MUSIC')?.path;

  const playSimilarNextMusicHandler = () => {
    refetch();
  };

  return (
    <div className="fixed bottom-0 w-full h-50 bg-gray-100 shadow-2xl px-4 py-2">
      {music && (
        <div className="flex">
          <img
            src={music?.media?.find((el) => el.type === 'THUMBNAIL')?.path}
            alt="Thumbnail"
            className="w-12 h-12 object-contain"
          />
          <div className="ml-4">
            <h4>{music?.title}</h4>
            <p>{music?.album}</p>
          </div>
        </div>
      )}
      <audio ref={audioRef} controls className="w-full bg-gray-100" onEnded={playSimilarNextMusicHandler}>
        <source src={musicPath} type="audio/ogg" />
      </audio>
    </div>
  );
}

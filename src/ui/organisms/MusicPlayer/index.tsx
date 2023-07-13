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

import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export default function MusicPlayer() {
  const music = useSelector((state: any) => state.music.music);
  const playStatus = useSelector((state: any) => state.music.play);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      try {
        if (music && music.path) audioElement.src = music.path;
        audioElement.play();

        // if (playStatus) if (!playStatus) audioElement.pause();
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    }
  }, [music, playStatus]);

  return (
    <div className="fixed bottom-0 w-full h-20 bg-gray-100 shadow-2xl px-4 py-2">
      <audio ref={audioRef} controls className="w-full bg-gray-100">
        <source src={music?.path} type="audio/ogg" />
      </audio>
    </div>
  );
}

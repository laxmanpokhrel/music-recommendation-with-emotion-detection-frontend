/* eslint-disable import/prefer-default-export */
import ApiFactory from '@Api/ApiFactory';

export const ownMusicService = ApiFactory.createQuery({
  key: 'personal_music',
  url: '/music/own',
  authenticated: true,
});

export const LikedMusicService = ApiFactory.createQuery({
  key: 'liked_musics',
  url: '/music/liked',
  authenticated: true,
});

export const PlaylistCreateService = ApiFactory.createQuery({
  key: 'personal_playlist',
  url: '/playlists/own',
  authenticated: true,
});

export const MusicService = ApiFactory.createQuery({
  key: 'music',
  url: '/music',
  authenticated: true,
});

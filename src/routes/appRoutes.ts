import React from 'react';
import IRoute from '@Schemas/interfaces';

// Lazy loading
//*  Please consider rethinking before implementing lazy loading
const HomePage = React.lazy(() => import('@Pages/HomePage'));
const MusicProfile = React.lazy(() => import('@Pages/MusicProfile'));
const MoodDetector = React.lazy(() => import('@Pages/MoodDetector'));
const ExploreMoreMusicWithMood = React.lazy(() => import('@Pages/ExploreMoreMusicWithMood'));
const UploadMusic = React.lazy(() => import('@Pages/UploadMusic'));
const Login = React.lazy(() => import('@Pages/Login'));
const Signup = React.lazy(() => import('@Pages/Signup'));
const YourMusic = React.lazy(() => import('@Pages/YourMusic'));
const YourPlaylist = React.lazy(() => import('@Pages/YourPlaylist'));
const CreatePlaylist = React.lazy(() => import('@Pages/CreatePlaylist'));

const appRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home ',
    component: HomePage,
    authenticated: false,
  },
  {
    path: '/music/:musicId',
    name: 'Music Profile ',
    component: MusicProfile,
    authenticated: false,
  },
  {
    path: '/login',
    name: 'Login ',
    component: Login,
    authenticated: false,
  },
  {
    path: '/signup',
    name: 'Signup ',
    component: Signup,
    authenticated: false,
  },
  {
    path: '/detect-mood',
    name: 'Detect Mood ',
    component: MoodDetector,
    authenticated: true,
  },
  {
    path: '/explore-more',
    name: 'Explore More Music',
    component: ExploreMoreMusicWithMood,
    authenticated: false,
  },
  {
    path: '/upload-music',
    name: 'Upload Music',
    component: UploadMusic,
    authenticated: true,
  },
  {
    path: '/your-music',
    name: 'Your Music',
    component: YourMusic,
    authenticated: true,
  },
  {
    path: '/your-playlist',
    name: 'Your Music',
    component: YourPlaylist,
    authenticated: true,
  },
  {
    path: '/create-playlist',
    name: 'Your Music',
    component: CreatePlaylist,
    authenticated: true,
  },
];
export default appRoutes;

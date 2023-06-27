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
    authenticated: false,
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
    authenticated: false,
  },
  {
    path: '/your-music',
    name: 'Your Music',
    component: HomePage,
    authenticated: false,
  },
];
export default appRoutes;

/* eslint-disable import/prefer-default-export */
import ApiFactory from '@Api/ApiFactory';

export const MusicService = ApiFactory.createQuery({ key: 'personal_music', url: '/music/own', authenticated: true });

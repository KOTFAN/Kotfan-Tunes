import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { youtubeMusicAPI } from './services/YoutubeMusic';
import { musicTracksAPI } from './services/MusicTracks';

export const store = configureStore({
   reducer: {
      [youtubeMusicAPI.reducerPath]: youtubeMusicAPI.reducer,
      [musicTracksAPI.reducerPath]: musicTracksAPI.reducer,
      player: playerReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(youtubeMusicAPI.middleware).concat(musicTracksAPI.middleware),
});

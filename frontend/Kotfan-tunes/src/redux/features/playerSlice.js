import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   currentSongs: [],
   currentIndex: 0,
   isActive: false,
   isPlaying: false,
   activeSong: {},
   genreListId: '',
};

const playerSlice = createSlice({
   name: 'player',
   initialState,
   reducers: {
      setActiveSong: (state, action) => {
         state.activeSong = action.payload.song;




         if (Array.isArray(action.payload?.data)) {
            state.currentSongs = action.payload.data;

         } else {
            state.currentSongs = [];
         }

         state.currentIndex = action.payload.i;
         state.isActive = true;

         console.log(action.payload.song)

      },

      nextSong: (state, action) => {
         const nextIndex = action.payload;
         const nextSong = state.currentSongs[nextIndex];

         if (nextSong) {
            state.activeSong = nextSong;
            state.currentIndex = nextIndex;
            state.isActive = true;
         }
      },
      prevSong: (state, action) => {
         const prevIndex = action.payload;
         const prevSong = state.currentSongs[prevIndex];

         if (prevSong) {
            state.activeSong = prevSong;
            state.currentIndex = prevIndex;
            state.isActive = true;
         }
      },

      playPause: (state, action) => {


         state.isPlaying = action.payload;

         // console.log(state.isPlaying)
      },

      selectGenreListId: (state, action) => {
         state.genreListId = action.payload;
      },
   },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;

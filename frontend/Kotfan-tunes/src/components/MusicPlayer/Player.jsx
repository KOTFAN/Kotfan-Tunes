/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect } from 'react';

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat }) => {
   const musicAdress = activeSong?.audioFile ? `http://localhost:8000/api/files/${activeSong.audioFile}` : 'https://storage.xpleer.com/get_file/?fileId=4_zd4bdb41e2251a7768a8b0616_f201c7d1970d0acb9_d20230612_m211533_c003_v0312004_t0004_u01686604533593'


   // console.log(musicAdress)



   const ref = useRef(null);
   // eslint-disable-next-line no-unused-expressions
   if (ref.current) {
      if (isPlaying) {
         ref.current.play();
      } else {
         ref.current.pause();
      }
   }

   useEffect(() => {
      ref.current.volume = volume;
   }, [volume]);
   // updates audio element only on seekTime change (and not on each rerender):
   useEffect(() => {
      ref.current.currentTime = seekTime;
   }, [seekTime]);
   //here is audio set

   // console.log(ref, repeat, onEnded, onTimeUpdate, onLoadedData, activeSong?.hub?.actions[1]?.uri)
   return (
      <audio
         src={musicAdress}
         ref={ref}
         loop={repeat}
         onEnded={onEnded}
         onTimeUpdate={onTimeUpdate}
         onLoadedData={onLoadedData}
      />
   );
};

export default Player;
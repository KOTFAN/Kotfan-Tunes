import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import logo from '../assets/logo.png'//change to "fallback image"



const SongCard = ({ song, i, isPlaying, activeSong, data }) => {

   // console.log(song, i, isPlaying, activeSong, data)

   const dispatch = useDispatch()

   const handlePauseClick = () => {
      dispatch(playPause(false))

   }

   const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true))
   }

   return (
      <div className='flex flex-col w-[250px] p-4 bg-main bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg group hover:bg-bgHover transition-colors duration-500'>
         <div className="relative w-full h-56  cursor-pointer">
            <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
               <PlayPause
                  song={song}
                  handlePause={handlePauseClick}
                  handlePlay={handlePlayClick}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
               />
            </div>
            <img className='w-full h-full object-cover ' src={song?.coverImage || logo} alt="song_img" onError={(e) => {
               e.target.onerror = null;
               e.target.src = logo;
            }} />
         </div>
         <div className="mt-4 flex flex-col">
            <p className='font-semibold text-lg text-text truncate inline-block' >
               <Link to={`/songs/${song?.slug}`}>
                  {song.title}
               </Link>
            </p>
            <p className='mt-1 font-semibold text-sm text-gray-300 truncate inline-block'>
               <Link to={`/songs/${song?.artist}`}>
                  {song.artist}
               </Link>
            </p>
         </div>
      </div>
   )
};

export default SongCard;

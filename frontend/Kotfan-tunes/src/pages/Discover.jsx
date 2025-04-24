import { useDispatch, useSelector } from 'react-redux';


import { Error, Loader, SongCard } from '../components';
import { genres } from './../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/YoutubeMusic';


import { useGetGenresQuery, useGetTracksQuery } from '../redux/services/MusicTracks';

const Discover = () => {
   const dispatch = useDispatch();
   const { activeSong, isPlaying } = useSelector((state) => state.player);

   const { data, isFetching, error } = useGetTopChartsQuery();

   const { data: genresData, isFetching: genresIsFetching, error: genresError } = useGetGenresQuery();

   const { data: tracksData, isFetching: tracksIsFetching, error: tracksError } = useGetTracksQuery();

   console.log(tracksData, tracksIsFetching, tracksError)

   if (isFetching) return <Loader title='Loading Best Ever Songs...' />

   if (error) return <Error />


   return (
      <div className='flex flex-col'>
         <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-text text-3xl text-shadow-sm">Discover</h2>
            <select name="genre" id="1" value='' onChange={() => { }}
               className='bg-black text-gray-300 p-3 text-sm outline-none rounded-lg sm:mt-0 mt-5'>
               {genresData.map((ganre, i) => {
                  console.log(ganre)
                  return <option key={i} value={ganre}>{ganre}</option>
               })}
            </select>

         </div>
         <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {/* map on result arr */}
            {tracksData?.data?.map((song, i) => (
               <SongCard
                  key={song.id}
                  song={song}
                  i={i}
                  activeSong={activeSong}
                  isPlaying={isPlaying}
                  data={data}
               />
            ))}
         </div>
      </div>
   )
};

export default Discover;

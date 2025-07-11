import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, MusicPlayer, RecentlyAdded } from './components';
import { ArtistDetails, Discover, Search, SongDetails } from './pages';

import logo from './assets/logo.png'
const App = () => {
   const { activeSong } = useSelector((state) => state.player);

   return (
      <div className="relative flex">

         <div className="flex-1 flex flex-col bg-gradient-to-tr from-bg to-main">
            <div className="flex items-center justify-between px-6 py-4">
               <img src={logo} alt="Logo" className="h-10 w-auto" />
               <div className="flex-1 ml-4">
                  <Searchbar />
               </div>
               <div className="addTrack">
                  <button type="button" className='text-text text-base pt-2 pb-2 pr-4 pl-4 bg-secondary hover:bg-bgHover hover:text-textHover transition-colors rounded-sm'>Add track</button>
               </div>
            </div>

            <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex md:flex-row flex-col-reverse md:gap-x-4 gap-x-0">
               <div className="flex-1 h-fit pb-40">
                  <Routes>
                     <Route path="/" element={<div />} />
                     <Route path="/tracks" element={<div />} />
                     <Route path="/discover" element={<Discover />} />
                     <Route path="/artists/:id" element={<ArtistDetails />} />
                     <Route path="/songs/:songid" element={<SongDetails />} />
                     <Route path="/search/:searchTerm" element={<Search />} />
                  </Routes>
               </div>
               <div className="xl:sticky relative top-0 h-fit">
                  <RecentlyAdded />
               </div>
            </div>
         </div>

         {activeSong?.title && (
            <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
               <MusicPlayer />
            </div>
         )}
      </div>
   );
};

export default App;

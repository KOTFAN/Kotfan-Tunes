import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { MusicPlayer, RecentlyAdded } from "./components";
import { ArtistDetails, Discover, Search, SongDetails } from "./pages";

import Tracks from "./pages/Tracks";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <div
        className="flex-1 flex flex-col bg-gradient-to-br from-[#FF6EC7] via-[#FF8C00] to-[#FFD800]
"
      >
        <Navigation />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex md:flex-row flex-col-reverse md:gap-x-4 gap-x-0">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Tracks />} />

              <Route path="/tracks" element={<Tracks />} />

              <Route path="/discover" element={<Discover />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* <div className="xl:sticky relative top-0 h-fit">
            <RecentlyAdded />
          </div> */}
        </div>
      </div>

      {/* {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )} */}
    </div>
  );
};

export default App;
